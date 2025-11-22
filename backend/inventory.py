from flask import Blueprint

inv_bp = Blueprint("inv", __name__)

@inv_bp.route("/test")
def test():
    return "Inventory routes working"
