import zipfile
from pathlib import Path
import torch
from google.colab import drive # type: ignore
from torch.utils.tensorboard import SummaryWriter

# Setup path to data and model folders
data_path = Path("data/")
audio_path = data_path / "audios"
models_path = Path("models/")

# If the audio folder doesn't exist, download it and prepare it...
if audio_path.is_dir():
    print(f"{audio_path} directory exists.")
else:
    print(f"Did not find {audio_path} directory, creating one...")
    audio_path.mkdir(parents=True, exist_ok=True)
    
    with zipfile.ZipFile("drive/MyDrive/FYP/Audios.zip", "r") as zip_ref:
        print("Unzipping data...")
        zip_ref.extractall(audio_path)


def create_writer(experiment_name, model_name, extra):
  writer = SummaryWriter(log_dir=f"runs/{experiment_name}/{model_name}/{extra}")
  return writer

def metric_avg(metric):
  return sum(metric)/len(metric)

def save_model(model: torch.nn.Module, model_name: str):

  if not models_path.is_dir():
    print(f"Did not find {models_path} directory, creating one...")
    models_path.mkdir(parents=True, exist_ok=True)

  assert model_name.endswith(".pth") or model_name.endswith(".pt"), "model_name should end with '.pt' or '.pth'"
  model_save_path = models_path / model_name

    # Save the model state_dict()
  print(f"[INFO] Saving model to: {model_save_path}")
  torch.save(obj=model.state_dict(),
             f=model_save_path)