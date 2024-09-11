# Code adapted from: Daniel Bourke's Lear Pytorch for Deep Learning:
# https://www.learnpytorch.io

from typing import Dict, List
import torch
from sklearn.metrics import f1_score


def train_step(model, model_name, data_loader, loss_fn, optimiser, device):

  model.train()
  total_loss, total_accuracy = 0, 0   # Setup train loss and train accuracy values
  all_predictions = []
  all_targets = []

  for input, target in data_loader:

        if model_name == "gru":
            input = input
        elif model_name == "lstm":
            input = input.transpose(2,3)

        input, target = input.to(device), target.to(device)

        # calculate loss and accuracy
        prediction = model(input)
        train_loss = loss_fn(prediction, target)

        # backpropagate error and update weights
        optimiser.zero_grad()
        train_loss.backward()
        optimiser.step()

        # update class, loss, and accuracy values
        target_class = torch.argmax(torch.softmax(prediction, dim=1), dim=1)
        total_loss += train_loss.item()
        total_accuracy += (target_class == target).sum().item()/len(prediction)
        all_predictions.extend(target_class.cpu().numpy())
        all_targets.extend(target.cpu().numpy())

  train_f1 = f1_score(all_targets, all_predictions, average='macro')
  avg_loss = total_loss/len(data_loader)
  avg_acc = total_accuracy/len(data_loader)
  
  return avg_loss, avg_acc, train_f1

def test_step(model, model_name, data_loader, loss_fn, device):

    model.eval()
    test_loss, test_acc = 0, 0    # Setup test loss and test accuracy values
    all_predictions = []
    all_targets = []

    with torch.inference_mode():

        for input, target in data_loader:

            if model_name == "gru":
              input = input
            elif model_name == "lstm":
              input = input.transpose(2,3)

            input, target = input.to(device), target.to(device)
            test_pred = model(input)

            # Calculate and accumulate loss and accuracy
            loss = loss_fn(test_pred, target)
            test_loss += loss.item()
            test_pred_labels = test_pred.argmax(dim=1)
            test_acc += ((test_pred_labels == target).sum().item()/len(test_pred))

            all_predictions.extend(test_pred_labels.cpu().numpy())
            all_targets.extend(target.cpu().numpy())

    test_f1 = f1_score(all_targets, all_predictions, average='macro')
    test_loss = test_loss / len(data_loader)
    test_acc = test_acc / len(data_loader)
    return test_loss, test_acc, test_f1

def train(model, model_name, train_data_loader, test_data_loader, loss_fn, optimiser, device, epochs, writer: torch.utils.tensorboard.writer.SummaryWriter)-> Dict[str, List]:  #

    results = {"train_loss": [],
        "train_acc": [],
        "train_f1": [],
        "test_loss": [],
        "test_acc": [],
        "test_f1": []
    }

    for i in range(epochs):

        train_loss, train_acc, train_f1 = train_step(model, model_name, train_data_loader, loss_fn, optimiser, device)
        test_loss, test_acc, test_f1 = test_step(model, model_name, test_data_loader, loss_fn, device)

        print(f"Epoch: {i+1} | "
              f"Train Accuracy: {train_acc:.4f} | "
              f"Train Loss: {train_loss:.4f} | "
              f"Train F1 Score: {train_f1:.4f} | "
              f"Test Accuracy: {test_acc:.4f} | "
              f"Test Loss:  {test_loss:.4f} | "
              f"Test F1 Score: {test_f1:.4f}" )

        results["train_loss"].append(train_loss)
        results["train_acc"].append(train_acc)
        results["train_f1"].append(train_f1)
        results["test_loss"].append(test_loss)
        results["test_acc"].append(test_acc)
        results["test_f1"].append(test_f1)

        if writer:
          writer.add_scalars(main_tag="Loss",
                            tag_scalar_dict={"train_loss": train_loss,
                                              "test_loss": test_loss},
                            global_step=i)

          writer.add_scalars(main_tag="Accuracy",
                            tag_scalar_dict={"train_acc": train_acc,
                                              "test_acc": test_acc},
                            global_step=i)

          writer.add_scalars(main_tag="F1 Score",
                            tag_scalar_dict={"train_f1": train_f1,
                                              "test_f1": test_f1},
                            global_step=i)

          writer.close()
        else:
          pass

    return results