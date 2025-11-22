## 📦 StockMaster — Inventory Management System (IMS)

StockMaster is a full-stack inventory and warehouse management system designed to replace manual registers and messy spreadsheets with a clean, real-time, centralized dashboard.

It includes:

✅ User Authentication (Login / Signup)
✅ Inventory Dashboard with KPIs
✅ Receipts (Incoming Stock)
✅ Deliveries (Outgoing Stock)
✅ Stock Overview
✅ Multi-warehouse ready design
✅ Modern React + Tailwind UI
✅ Flask + SQLite backend

Built with: React + TypeScript + Tailwind + Flask + SQLite

🏗️ Project Structure
Odoo/
│
├── frontend/        → React + Vite + Tailwind
│
├── backend/         → Flask API + SQLite
│   ├── app.py
│   ├── auth.py
│   ├── inventory.py
│   ├── dashboard.py
│   ├── models.py
│   ├── requirements.txt
│   └── ims.db
│
└── README.md

🚀 How to Run the Backend (Flask)
1️⃣ Go into backend
cd backend

2️⃣ Create virtual environment
python -m venv venv

3️⃣ Activate environment
Windows
venv\Scripts\activate

Mac/Linux
source venv/bin/activate

4️⃣ Install dependencies
pip install -r requirements.txt

5️⃣ Run Flask server
python app.py


You should see:

Running on http://127.0.0.1:5000


✅ Backend is now live

🔐 Test Login (Backend)

To auto-create a test user, open in browser:

http://127.0.0.1:5000/register


Then login using:

Email: admin@test.com
Password: admin123


Backend login URL (for testing):

http://127.0.0.1:5000/login

⚙️ Available API Routes
URL	Function
/inventory/api/receipts	Get receipts
/inventory/api/deliveries	Get deliveries
/inventory/api/stock	Get stock
/dashboard/kpis	Dashboard stats
/login	Login user
/logout	Logout user
🎨 How to Run the Frontend (React + Vite)
1️⃣ Go into frontend
cd frontend

2️⃣ Install packages
npm install

3️⃣ Run dev server
npm run dev


You will see:

Local: http://localhost:5173


✅ Frontend is now live

🗺️ Main Frontend Routes
Page	Route
Home	/
Login	/login
Signup	/signup
Dashboard	/dashboard
Receipts	/receipts
Deliveries	/deliveries
Stock	/stock
🖥️ Main Features
📊 Dashboard

Shows:

Total products in stock

Low / out of stock

Pending receipts

Pending deliveries

📥 Receipts

Add goods from vendors
Auto updates stock

📤 Deliveries

Send goods to customers
Auto reduces stock

🔁 Internal Transfers

Move stock between warehouses / racks

🛠️ Adjustments

Correct physical vs digital mismatches

🧰 Tech Stack
Frontend:

React

TypeScript

Tailwind CSS

Vite

React Router

Backend:

Flask

SQLAlchemy

Flask Login

SQLite

💡 Future Improvements

JWT-based authentication

Charts in dashboard

Barcode scanning

Mobile version

Export to Excel

Multi-user roles