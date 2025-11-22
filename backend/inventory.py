from flask import Blueprint, jsonify
from flask_login import login_required
from datetime import date

from models import StockMove, Inventory, Product, Warehouse


inv_bp = Blueprint("inv", __name__)

# =========================
#        RECEIPTS
# =========================
@inv_bp.route("/api/receipts")
@login_required
def get_receipts():

    moves = StockMove.query.filter_by(type="receipt").all()
    today = date.today()

    data = []

    for m in moves:

        if m.schedule_date and m.schedule_date < today and m.status != "done":
            status = "Late"
        elif m.status == "waiting":
            status = "Waiting"
        elif m.status == "ready":
            status = "Ready"
        else:
            status = m.status

        data.append({
            "id": m.id,
            "reference": m.reference,
            "from": m.from_warehouse.name if m.from_warehouse else "Vendor",
            "to": m.to_warehouse.name if m.to_warehouse else "",
            "contact": m.contact if m.contact else "N/A",
            "schedule_date": str(m.schedule_date) if m.schedule_date else "",
            "status": status
        })

    return jsonify(data)


# =========================
#        DELIVERIES
# =========================
@inv_bp.route("/api/deliveries")
@login_required
def get_deliveries():

    moves = StockMove.query.filter_by(type="delivery").all()
    today = date.today()

    data = []

    for m in moves:

        if m.schedule_date and m.schedule_date < today and m.status != "done":
            status = "Late"
        elif m.status == "waiting":
            status = "Waiting"
        elif m.status == "ready":
            status = "Ready"
        else:
            status = m.status

        data.append({
            "id": m.id,
            "reference": m.reference,
            "from": m.from_warehouse.name if m.from_warehouse else "",
            "to": "Customer",
            "contact": m.contact if m.contact else "N/A",
            "schedule_date": str(m.schedule_date) if m.schedule_date else "",
            "status": status
        })

    return jsonify(data)


# =========================
#        STOCK PAGE
# =========================
@inv_bp.route("/api/stock")
@login_required
def stock_overview():

    inventory = Inventory.query.all()

    data = []

    for i in inventory:
        data.append({
            "id": i.id,
            "product": i.product.name,
            "cost": 3000,  # can be dynamic later
            "on_hand": i.quantity,
            "free_to_use": i.quantity
        })

    return jsonify(data)


# =========================
# TEST ROUTE
# =========================
@inv_bp.route("/inventory/test")
def test():
    return "Inventory routes working ✅"

from flask import request
from datetime import date
from models import db, StockMove, StockMoveLine, Inventory, Warehouse

# Generate WH/IN/XXX reference
def generate_reference(warehouse_code="WH"):
    last = StockMove.query.filter(
        StockMove.reference.like(f"{warehouse_code}/IN/%")
    ).count() + 1

    return f"{warehouse_code}/IN/{str(last).zfill(3)}"


@inv_bp.route("/api/receipts/new", methods=["POST"])
@login_required
def create_receipt():

    data = request.json

    product_id = int(data["product_id"])
    qty = float(data["quantity"])
    warehouse_id = int(data["warehouse_id"])
    contact = data["contact"]

    warehouse = Warehouse.query.get(warehouse_id)

    reference = generate_reference(warehouse.name[:2].upper())

    # 1. Create StockMove
    move = StockMove(
        type="receipt",
        status="done",
        to_warehouse_id=warehouse_id,
        reference=reference,
        schedule_date=date.today(),
        contact=contact
    )

    db.session.add(move)
    db.session.flush()

    # 2. Create move line
    line = StockMoveLine(
        move_id=move.id,
        product_id=product_id,
        quantity=qty
    )

    db.session.add(line)

    # 3. Update inventory (increase)
    inv = Inventory.query.filter_by(
        product_id=product_id,
        warehouse_id=warehouse_id
    ).first()

    if not inv:
        inv = Inventory(
            product_id=product_id,
            warehouse_id=warehouse_id,
            quantity=qty
        )
        db.session.add(inv)
    else:
        inv.quantity += qty

    db.session.commit()

    return jsonify({
        "message": "Receipt created",
        "reference": reference
    })
from models import Product, Warehouse

@inv_bp.route("/setup/warehouse")
def create_warehouse():
    w = Warehouse(name="Main Warehouse", location="Bangalore")
    db.session.add(w)
    db.session.commit()
    return "✅ Warehouse created with ID = 1"


@inv_bp.route("/setup/product")
def create_product():
    p = Product(
        name="Steel Rods",
        sku="SR-001",
        uom="kg",
        reorder_level=10
    )
    db.session.add(p)
    db.session.commit()
    return "✅ Product created with ID = 1"

