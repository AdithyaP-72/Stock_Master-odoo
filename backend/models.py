from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(UserMixin, db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), nullable=False, default="warehouse_staff")  # or inventory_manager

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Warehouse(db.Model):
    __tablename__ = "warehouses"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)
    location = db.Column(db.String(255))


class Category(db.Model):
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)


class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    sku = db.Column(db.String(100), unique=True, nullable=False)
    uom = db.Column(db.String(50), nullable=False)  # e.g., "pcs", "kg"
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    reorder_level = db.Column(db.Integer, default=0)

    category = db.relationship("Category", backref="products")


class Inventory(db.Model):
    __tablename__ = "inventory"
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    warehouse_id = db.Column(db.Integer, db.ForeignKey("warehouses.id"), nullable=False)
    quantity = db.Column(db.Float, default=0)

    product = db.relationship("Product", backref="inventory_rows")
    warehouse = db.relationship("Warehouse", backref="inventory_rows")

    __table_args__ = (
        db.UniqueConstraint("product_id", "warehouse_id", name="uq_product_warehouse"),
    )


class StockMove(db.Model):
    __tablename__ = "stock_moves"
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)  
    # "receipt", "delivery", "internal", "adjustment"
    schedule_date = db.Column(db.Date)
    contact = db.Column(db.String(120))


    status = db.Column(db.String(50), nullable=False, default="draft")
    # "draft", "waiting", "ready", "done", "canceled"

    from_warehouse_id = db.Column(db.Integer, db.ForeignKey("warehouses.id"))
    to_warehouse_id = db.Column(db.Integer, db.ForeignKey("warehouses.id"))
    created_by_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    reference = db.Column(db.String(100))  # e.g., PO number, SO number, note

    from_warehouse = db.relationship("Warehouse", foreign_keys=[from_warehouse_id])
    to_warehouse = db.relationship("Warehouse", foreign_keys=[to_warehouse_id])
    created_by = db.relationship("User", backref="stock_moves")


class StockMoveLine(db.Model):
    __tablename__ = "stock_move_lines"
    id = db.Column(db.Integer, primary_key=True)
    move_id = db.Column(db.Integer, db.ForeignKey("stock_moves.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Float, nullable=False)

    move = db.relationship(
        "StockMove",
        backref=db.backref(
            "lines",
            cascade="all, delete-orphan"
        )
    )

    product = db.relationship("Product")

