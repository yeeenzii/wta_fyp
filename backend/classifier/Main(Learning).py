from torch.utils.data import DataLoader
from timeit import default_timer as timer
from torch.optim import Adam
import torch
import torch.nn as nn
from DataPrep import AudioDataset
from NeuralNets import GRU, LSTM
from Train import train
from Utils import audio_path, create_writer, metric_avg, save_model

train_dir = audio_path / "Train"
test_dir = audio_path / "Test"

train_data = AudioDataset(targ_dir=train_dir)
test_data = AudioDataset(targ_dir=test_dir)
train_data, test_data

if torch.cuda.is_available():
  device = "cuda"
else:
  device = "cpu"
print(f"Using {device}")

models = ["gru", "lstm"]
hidden_units = [64, 128, 256]

batch_size = 128
epochs = 10
lr = 0.001

train_dataloader = DataLoader(train_data, batch_size=batch_size, shuffle= True)
test_dataloader = DataLoader(test_data, batch_size=batch_size, shuffle= False)

for num_hidden in hidden_units:
  for model_name in models:

    experiment = "epochs"

    if model_name == "gru":
      model = GRU(len(train_data.classes), num_hidden).to(device)
    elif model_name == "lstm":
      model = LSTM(len(train_data.classes), num_hidden).to(device)

    model.rnn.flatten_parameters()
    print(f"CRNN: {model_name}")

    loss_fn = nn.CrossEntropyLoss()
    optimiser = Adam(model.parameters(), lr=lr)

    start_time = timer()

    crnn_results = train(model, model_name, train_dataloader, test_dataloader, loss_fn, optimiser, device, epochs, writer=create_writer(experiment_name=experiment, model_name=model_name, extra=f"{epochs}_epochs"))
    end_time = timer()


    for metric, val in crnn_results.items():
      print(f"Average {metric}: ", metric_avg(val))

    print(f"Finished training in {end_time-start_time:.3f} seconds")
    name = f"{model_name}_{epochs}_{experiment}.pt"
    save_model(model=model, model_name=name)
    print("---------------------------")