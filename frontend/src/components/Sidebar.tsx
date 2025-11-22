import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
    const location = useLocation()

    const linkClass = (path: string) =>
        `p-2 rounded transition ${location.pathname === path
            ? "bg-[#2d2d2d] text-white"
            : "text-gray-400 hover:bg-[#2d2d2d] hover:text-white"
        }`

    return (
        <div className="h-screen w-64 bg-[#111827] text-white fixed left-0 top-0 flex flex-col px-6 py-8">

            {/* LOGO */}
            <div className="flex items-center mb-12 gap-3">
                <div className="bg-blue-600 p-3 rounded-xl">📦</div>
                <h1 className="text-2xl font-bold tracking-wide">
                    StockMaster
                </h1>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-2 text-sm">

                <Link to="/" className={linkClass("/")}>
                    Dashboard
                </Link>

                <Link to="/receipts" className={linkClass("/receipts")}>
                    Receipts
                </Link>

                <Link to="/deliveries" className={linkClass("/deliveries")}>
                    Deliveries
                </Link>

                <Link to="/stock" className={linkClass("/stock")}>
                    Stock
                </Link>

                <div className="border-t border-gray-700 my-4" />

                <a
                    href="http://127.0.0.1:5000/logout"
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-[#2d2d2d] rounded text-center"
                >
                    Logout
                </a>
            </nav>

        </div>
    )
}
