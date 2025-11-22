from flask import Blueprint, request, jsonify, session
from backend.models import User, db

auth_bp = Blueprint("auth", __name__)

# --------------------
# REGISTER TEST USER
# --------------------
@auth_bp.route("/register")
def register():
    existing = User.query.filter_by(email="admin@test.com").first()

    if existing:
        return "✅ User already exists: admin@test.com / admin123"

    user = User(
        name="Admin",
        email="admin@test.com",
        role="inventory_manager"
    )
    user.set_password("admin123")

    db.session.add(user)
    db.session.commit()

    return "✅ User created: admin@test.com / admin123"


# --------------------
# LOGIN
# --------------------
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user or not user.check_password(password):
        return jsonify({"message": "Invalid credentials"}), 401

    # ✅ Store session instead of flask-login
    session["user_id"] = user.id

    return jsonify({
        "message": "Login successful",
        "user": {
            "id": user.id,
            "email": user.email,
            "role": user.role
        }
    })


# --------------------
# LOGOUT
# --------------------
@auth_bp.route("/logout")
def logout():
    session.pop("user_id", None)
    return jsonify({"message": "Logged out"})
