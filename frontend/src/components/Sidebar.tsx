import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-slate-950 p-6 border-r border-slate-800">

            <h1 className="text-2xl font-bold mb-10">📦 StockMaster</h1>

            <nav className="flex flex-col gap-4 text-slate-300">

                <Link
                    to="/"
                    className="hover:bg-slate-800 px-4 py-2 rounded-lg"
                >
                    Dashboard
                </Link>

                <Link
                    to="/receipts"
                    className="hover:bg-slate-800 px-4 py-2 rounded-lg"
                >
                    Receipts
                </Link>

                <Link
                    to="/deliveries"
                    className="hover:bg-slate-800 px-4 py-2 rounded-lg"
                >
                    Deliveries
                </Link>

                <Link
                    to="/stock"
                    className="hover:bg-slate-800 px-4 py-2 rounded-lg"
                >
                    Stock
                </Link>

            </nav>

            <button className="mt-10 text-red-400 hover:text-red-500">
                Logout
            </button>
        </div>
    )
}
