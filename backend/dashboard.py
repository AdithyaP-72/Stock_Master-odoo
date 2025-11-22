from flask import Blueprint, jsonify
from flask_login import login_required
from models import Inventory, StockMove, Product
from sqlalchemy import func

dashboard_bp = Blueprint("dashboard", __name__)


@dashboard_bp.route("/")
@dashboard_bp.route("/dashboard")
@login_required
def dashboard():
    return "Dashboard is running! (Now connect this to React)"


@dashboard_bp.route("/api/dashboard")
@login_required
def dashboard_api():

    total_stock = (
        Inventory.query.with_entities(func.sum(Inventory.quantity)).scalar() or 0
    )

    low_stock_count = (
        Inventory.query
        .join(Product)
        .filter(Inventory.quantity <= Product.reorder_level)
        .count()
    )

    pending_receipts = StockMove.query.filter(
        StockMove.type == "receipt",
        StockMove.status != "done"
    ).count()

    pending_deliveries = StockMove.query.filter(
        StockMove.type == "delivery",
        StockMove.status != "done"
    ).count()

    return jsonify({
        "total_stock": total_stock,
        "low_stock": low_stock_count,
        "pending_receipts": pending_receipts,
        "pending_deliveries": pending_deliveries
    })
