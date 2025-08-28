from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from config import Config
from routes import auth_bp, api_bp
from models import db

app = Flask(__name__)
app.config.from_object(Config)

# Inicialize extensões
db.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Registre blueprints
app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(api_bp, url_prefix='/api')

# Criar tabelas no banco de dados
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)