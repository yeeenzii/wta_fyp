import base64
from sqlite3 import IntegrityError
from flask import Flask, jsonify, request, session, make_response
from flask_cors import CORS
from flask_migrate import Migrate, upgrade, init, stamp
from flask_bcrypt import Bcrypt

from models import db, User, users_schema, user_schema, Detections, detections_schema, Maintenance, maintenances_schema, Verifications, verifications_schema
 
app = Flask(__name__)
app.secret_key = b'***************************************'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wta.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

migrate = Migrate(app, db)

db.init_app(app)
with app.app_context():
    upgrade()


bcrypt = Bcrypt(app)

@app.route('/users', methods=['POST', 'GET'])
def user_data():
    if request.method == 'GET':
        users = User.query.all()
        user_data = users_schema.dump(users)
        return jsonify(user_data)
    elif request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        role = data.get('role')
        password = data.get('password')
        
        user = User(
        username=username,
        email=email,
        role = role,
        password = password
        )
        
        try:
            # Add user to database session and commit
            db.session.add(user)
            db.session.commit()
        except IntegrityError:
            # Handle potential duplicate email errors (optional)
            return jsonify({'error': 'Email already exists'}), 409

        # Serialize the created user using the schema
        created_user = user_schema.dump(user)
        return jsonify({'message': 'User created successfully!', 'data': created_user}),

@app.route('/detections', methods = ['POST', 'GET'])
def det_data():
    if request.method == 'GET':
        det = Detections.query.all()
        det_data = detections_schema.dump(det)    
        return jsonify(det_data)
    elif request.method == 'POST':
        data = request.get_json()
        prediction = data.get('prediction')
        location = data.get('location')
        
        detection = Detections(
            prediction=prediction,
            location=location
        )
        
        # Add user to database session and commit
        db.session.add(detection)
        db.session.commit()

        # Serialize the created user using the schema
        created_det = user_schema.dump(detection)
        return jsonify({'message': 'Detection added!', 'data': created_det})


@app.route('/verification', methods = ['POST', 'GET'])
def ver_data():
    if request.method == 'GET':
        ver = Verifications.query.all()
        ver_data = verifications_schema.dump(ver)
        return jsonify(ver_data)
    elif request.method == 'POST':
        # data = request.files()
        location = request.form.get('location')
        audio_base64 = request.form.get('audio')
        sgram_base64 = request.form.get('sgram')
        
        audio = base64.b64decode(audio_base64) if audio_base64 else None
        sgram = base64.b64decode(sgram_base64) if sgram_base64 else None
        
        verification = Verifications(
        location=location,
        audio=audio,
        sgram = sgram
        )
        
        # Add user to database session and commit
        db.session.add(verification)
        db.session.commit()

        # Serialize the created user using the schema
        created_ver = user_schema.dump(verification)
        return jsonify({'message': 'Verification added!', 'data': created_ver})
    

@app.route('/maintenace')
def get_mtn_data():
    mtn = Maintenance.query.all()
    mtn_data = maintenances_schema.dump(mtn)   
     
    return jsonify(mtn_data)
    


if __name__ == '__main__':
    app.run(port=5555, debug=True)