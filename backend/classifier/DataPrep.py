# Code adapted from: muskikalemist
# https://github.com/musikalkemist/pytorchforaudio/blob/38d1950d82a4a309a5e4259d2638f907ccac55af/09%20Training%20urban%20sound%20classifier/urbansounddataset.py

from torch.utils.data import Dataset
import torchaudio
from torchaudio import transforms
import os
import torch
import random
import pathlib
from typing import Tuple, Dict, List

class AudioDataset(Dataset):

    def __init__(self, df, targ_dir: str) -> None:

        #self.paths = list(pathlib.Path(targ_dir).glob("*/*.wav"))   # Get all audio paths
        self.df = df
        self.channels = 2
        self.sample_rate = 4100
        self.duration = 5000
        #self.classes, self.class_to_idx = self.find_classes(targ_dir)  # Create classes and class_to_idx attributes


    def __len__(self) -> int:           # Overwrite the __len__() method
        return len(self.df)


    def __getitem__(self, index):  # Overwrite the __getitem__() method
        "Returns one sample of data, data and label (X, y)."

        #class_name  = self.paths[index].parent.name # Expects path in data_folder/class_name/aud.wav
        #class_idx = self.class_to_idx[class_name]

        aud = self.load_audio(self.df)
        aud = self.resample(aud, self.sample_rate)
        aud = self.rechannel(aud, self.channels)
        aud = self.pad_trunc(aud, self.duration)
        sgrm = self.spectro_gram(aud, n_mels=64, n_fft=1024, hop_len=None)

        return sgrm #class_idx


    # ---- HELPER FUNCTIONS ---- #

    @staticmethod
    def load_audio(file):
        # sample_path = self.paths[index]
        sig, sr = torchaudio.load(file)
        return (sig, sr)

    def find_classes(self, directory: str) -> Tuple[List[str], Dict[str, int]]:
        classes = sorted(entry.name for entry in os.scandir(directory) if entry.is_dir())
        if not classes:
          raise FileNotFoundError(f"Couldn't find any classes in {directory}.")

        class_to_idx = {cls_name: i for i, cls_name in enumerate(classes)}
        return classes, class_to_idx

    def resample(self, aud, newsr):
        sig, sr = aud

        if (sr == newsr):
            return aud

        num_channels = sig.shape[0]
        resig = torchaudio.transforms.Resample(sr, newsr)(sig[:1, :]) # Resample first channel
        if (num_channels > 1):
            retwo = torchaudio.transforms.Resample(sr, newsr)(sig[1:, :]) # Resample the second channel and merge both channels
            resig = torch.cat([resig, retwo])

        return ((resig, self.sample_rate))

    def rechannel(self, aud, new_channel):  # Set audio to desired number of channels (if necessary)
        sig, sr = aud

        if (sig.shape[0] == new_channel):
            return aud

        if (new_channel == 1):
            resig = sig[:1, :]
        else:
            resig = torch.cat([sig, sig])

        return ((resig, sr))

    def pad_trunc(self, aud, max_ms):
        sig, sr = aud
        num_rows, sig_len = sig.shape
        max_len = sr // 1000 * max_ms

        if (sig_len > max_len):
            sig = sig[:, :max_len]       # Truncate the signal to the given length

        elif (sig_len < max_len):        # Zero pad signal to given length
            pad_begin_len = random.randint(0, max_len - sig_len)
            pad_end_len = max_len - sig_len - pad_begin_len
            pad_begin = torch.zeros((num_rows, pad_begin_len))
            pad_end = torch.zeros((num_rows, pad_end_len))

            sig = torch.cat((pad_begin, sig, pad_end), 1)

        return (sig, sr)

    def spectro_gram(self, aud, n_mels, n_fft, hop_len):
        sig, sr = aud
        top_db = 80

        spec = transforms.MelSpectrogram(sr, n_fft=n_fft, hop_length=hop_len, n_mels=n_mels)(sig)
        spec = transforms.AmplitudeToDB(top_db=top_db)(spec)  # Convert to decibels
        return (spec)