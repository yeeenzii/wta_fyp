from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})


db = SQLAlchemy(metadata=metadata)

ma = Marshmallow()

###### USERS TABLE ######
class User(db.Model):
  __tablename__ = 'users' 

  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(80), unique=True, nullable=False)
  password = db.Column(db.String(80), nullable=False, primary_key=True)
  role = db.Column(db.String(80))
  
class UsersShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("username", "role", "email")

user_schema = UsersShema()
users_schema = UsersShema(many=True)


###### DETECTIONS TABLE ######
class Detections(db.Model):
  __tablename__ = 'detections' 

  id = db.Column(db.Integer, primary_key=True)
  prediction = db.Column(db.String(80))
  location = db.Column(db.String(80), nullable=False)
  time = db.Column(db.String(80), default=datetime.now)
  
class DetectionsShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("prediction","location", "time")

detection_schema = DetectionsShema()
detections_schema = DetectionsShema(many=True)

###### VERIFICATIONS TABLE ######
class Verifications(db.Model):
  __tablename__ = 'verifications' 

  id = db.Column(db.Integer, primary_key=True)
  location = db.Column(db.String(80))
  audio = db.Column(db.LargeBinary(80), nullable=False)
  sgram = db.Column(db.LargeBinary, nullable=False)
  
class VerificationsShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("audio", "sgram")

verification_schema = VerificationsShema()
verifications_schema = VerificationsShema(many=True)

###### MAINTENANCE TABLE ######
class Maintenance(db.Model):
  __tablename__ = 'maintenance' 

  id = db.Column(db.Integer, primary_key=True)
  site = db.Column(db.String(80), nullable=False)
  date = db.Column(db.String(80), nullable=False)
  
class MaintenanceShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("site", "date")


maintenance_schema = MaintenanceShema()
maintenances_schema = MaintenanceShema(many=True)