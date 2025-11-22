from flask import Flask
from flask_login import LoginManager
from models import db, User

login_manager = LoginManager()

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config["SECRET_KEY"] = "change-this-secret"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///ims.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = "auth.login"

    from auth import auth_bp
    from inventory import inv_bp
    from dashboard import dashboard_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(inv_bp, url_prefix="/inventory")
    app.register_blueprint(dashboard_bp)

    with app.app_context():
        db.create_all()

    return app


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
