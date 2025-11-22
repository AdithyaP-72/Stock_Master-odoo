from flask import Flask, session, jsonify
from flask_cors import CORS
from backend.models import db
from backend.auth import auth_bp

def create_app():
    app = Flask(__name__)

    app.config["SECRET_KEY"] = "super-secret"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///ims.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    CORS(app, supports_credentials=True)

    db.init_app(app)

    app.register_blueprint(auth_bp)

    # ✅ Test route
    @app.route("/")
    def home():
        return "Backend alive"

    # ✅ Check login state
    @app.route("/me")
    def me():
        if "user_id" not in session:
            return jsonify({"logged_in": False}), 401

        return jsonify({"logged_in": True, "user_id": session["user_id"]})

    with app.app_context():
        db.create_all()

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
