from flask import Blueprint, render_template, request, redirect
from flask_login import login_user, logout_user
from models import User, db

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        user = User.query.filter_by(email=email).first()

        if user and user.check_password(password):
            login_user(user)
            return redirect("/dashboard")

        return "Invalid credentials"

    # Temporary form (we'll replace this with React later)
    return """
    <h2>Login</h2>
    <form method="POST">
    <input name="email" placeholder="Email"/><br><br>
    <input name="password" type="password" placeholder="Password"/><br><br>
    <button>Login</button>
    </form>
    """


@auth_bp.route("/register")
def register():
    # TEMPORARY: auto-create a user for testing
    user = User(
        name="Admin",
        email="admin@test.com",
        role="inventory_manager"
    )
    user.set_password("admin123")

    db.session.add(user)
    db.session.commit()

    return "User created. Now go to /login (email: admin@test.com, pass: admin123)"


@auth_bp.route("/logout")
def logout():
    logout_user()
    return redirect("/login")
