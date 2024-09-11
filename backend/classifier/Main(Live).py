import base64
from torch.utils.data import DataLoader
import os
from NeuralNets import GRU, LSTM
from DataPrep import AudioDataset
from Record import Record
import torch
import requests

data_path = os.getcwd()
model_path = '/Users/yenzinhlabatsi/Documents/FYP/code(main) 2/backend/classifier/gru_20_epochs.pt'

# Load model
model = GRU(3, 128)
model.load_state_dict(torch.load(model_path, map_location='cpu'))
model.eval()

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
torch.manual_seed(42)
model = model.to(device)

def inference(model, inf):
    # Disable gradient updates
    with torch.no_grad():

        # Get the predicted class with the highest score
        image = next(iter(inf))
        image = image.to(device)
        output = model(image)
        probabilities = torch.sigmoid(output)
        print(probabilities)
        confidence, prediction = torch.max(probabilities.data, 1)
        print(f"Conf: {confidence} | Pred: {prediction}")
        return prediction, confidence

def verify(aud, sgrm):
    with open(aud, "rb") as f:
        audio_data = f.read()

    # Prepare data for request
    location = '2.945 101.874'
    data = {"location": location, 
            "audio": base64.b64encode(audio_data).decode('utf-8'),
            "sgram": sgrm}

    # Send POST request to API
    response = requests.post('http://127.0.0.1:5555/verification', json=data)

    # Handle response (optional)
    if response.status_code == 200:
        print("Audio data stored successfully!")
    else:
        print("Error storing audio data:", response.text)
        
def notify(pred):
    location = '2.945 101.874'
    data = {"prediction": pred,
            "location": location}
    response = requests.post('http://127.0.0.1:5555/detections', json=data)

    # Handle response (optional)
    if response.status_code == 200:
        print("Audio data stored successfully!")
    else:
        print("Error storing audio data:", response.text)

while True:
    mic = Record()
    df = mic.record()
    #df = "test.wav"
    sample = AudioDataset(df, data_path)
    # Create test data loaders
    inf = torch.utils.data.DataLoader(sample, batch_size=1)

    pred, conf = inference(model, inf)
    pred = pred.item()
    print(pred)
    conf = conf.item() * 100
    
    if pred == 0:
        if conf > 99:
            notify(pred)
        else:
            verify(df, data_path)
    elif pred == 1:
        if conf > 80:
            print("gunshot")
    elif pred == 2:
        if conf > 80:
            print("mosquito")
