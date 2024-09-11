######################################################
#
#    Title: Record.py source code
#    Author: Haque et al.
#    Date: 2023
#    Availability: https://github.com/WildTechAlert/wildtechalert-detection-system/blob/cbe6d55ad15318b1ab9d8a1ff0b18e3c9b0768b9/Record.py
#
######################################################

import pyaudio
import wave

class Record:
    def __init__(self):
        self.CHUNK = 1024
        self.FORMAT = pyaudio.paInt16
        self.CHANNELS = 1
        self.RATE = 44100

    def record(self):
        p = pyaudio.PyAudio()
        stream = p.open(format=self.FORMAT,
                        channels=self.CHANNELS,
                        rate=self.RATE,
                        input=True,
                        frames_per_buffer=self.CHUNK)

        print("START")

        frames = []
        seconds = 4

        for i in range(0, int(self.RATE / self.CHUNK * seconds)):
            data = stream.read(self.CHUNK)
            frames.append(data)

        print("STOPPED")

        stream.stop_stream()
        stream.close()

        wf = wave.open("rec.wav", 'wb')
        wf.setnchannels(self.CHANNELS)
        wf.setsampwidth(p.get_sample_size(self.FORMAT))
        wf.setframerate(self.RATE)
        wf.writeframes(b''.join(frames))
        wf.close()

        file = "rec.wav"
        return file
