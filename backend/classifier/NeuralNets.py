import torch.nn as nn

# ------ MODEL DEFINITION ------ #

class GRU(nn.Module):
  def __init__(self, num_classes, num_hidden):
    super(GRU, self).__init__()

    #conv layers (feature extraction)
    self.conv1 = nn.Sequential(
        nn.Conv2d(2, 8, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )
    self.conv2 = nn.Sequential(
        nn.Conv2d(8, 16, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )
    self.conv3 = nn.Sequential(
        nn.Conv2d(16, 32, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )
    self.conv4 = nn.Sequential(
        nn.Conv2d(32, 64, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )


    # Recurrent layer
    self.rnn = nn.GRU(input_size=64, hidden_size = num_hidden, bidirectional=True)

    # Fully connected classification layers
    self.fc = nn.Sequential(
        nn.Flatten(),
        nn.Linear(num_hidden*4, num_classes)
    )

  def forward(self,x):
     
    x = self.conv1(x)
    # print(f"conv1: {x.shape}")
    x = self.conv2(x)
    x = self.conv3(x)

    x = x.permute(0,3,1,2)  #reshape for recurr layer
    x = x.view(x.size(0), x.size(1), -1) 

    x, _ = self.rnn(x)  #recurrent layer
    x = self.fc(x)  #output classification

    return x

class LSTM(nn.Module):
  def __init__(self, num_classes, num_hidden):
    super(LSTM, self).__init__()

    #conv layers (feature extraction)
    self.conv1 = nn.Sequential(
        nn.Conv2d(2, 8, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )
    self.conv2 = nn.Sequential(
        nn.Conv2d(8, 16, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )
    self.conv3 = nn.Sequential(
        nn.Conv2d(16, 32, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )
    self.conv4 = nn.Sequential(
        nn.Conv2d(32, 64, kernel_size = 3, stride = 1, padding=1),
        nn.ReLU(),
        nn.AdaptiveAvgPool2d(2)
    )


    # Recurrent layer
    self.rnn = nn.LSTM(input_size= 64, hidden_size = num_hidden, bidirectional=True)   #LSTM CRNN

    # Fully connected classification layers
    self.fc = nn.Sequential(
        nn.Flatten(),
        nn.Linear(num_hidden*4, num_classes)
    )

  def forward(self,x):
     
    x = self.conv1(x)
    # print(f"conv1: {x.shape}")
    x = self.conv2(x)
    x = self.conv3(x)

    x = x.permute(0,3,1,2)  #reshape for recurr layer
    x = x.contiguous().view(x.size(0), x.size(1), -1)

    x, _ = self.rnn(x)  #recurrent layer
    x = self.fc(x)

    return x