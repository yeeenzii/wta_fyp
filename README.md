# WildTechAlert Live Detector
An extension of the existing WTA EWS, using a CRNN

This project prototypes the use of CRNNs (LSTM and GRU) for the classification of vocalisations in audio samples, with the main aim of detecting elephant presence in live audio recordings. All positive elephant detections in the live detection and classification system are pushed onto the 'Notifications' popup on the website in real time.

# Prerequisites:
1. Start venv and install all necessary packages using requirements.txt

# Steps to run the system:

1. Change directories to 'backend' and run the commands
        flask db migrate
        flask db upgrade
    in order to ensure all the migrations to the database are up to date. 
2. Run the app.py file
3. Change directories to 'frontend' and start the webapp using the following command
        npm start
4. No login credentials needed to access other pages, just click 'submit' on the login popup (leads to Client group of pages)
    a. To route to Researcher group of pages, replace 'client' with 'researcher' in the url
5. Start the live detector by running Main(Live).py in the 'backend/classifier' folder
