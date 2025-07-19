from flask import Flask
from flask_cors import CORS
from routes.calculate import calculate_bp
from routes.auth import auth_bp
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB configuration
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

# Register routes
app.register_blueprint(calculate_bp, url_prefix='/api/calculate')
app.register_blueprint(auth_bp, url_prefix='/api/auth')

if __name__ == "__main__":
    app.run(debug=True)
