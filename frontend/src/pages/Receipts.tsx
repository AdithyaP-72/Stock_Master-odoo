import { Link } from "react-router-dom"

export default function Receipts() {
    return (
        <div>

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Receipts</h1>

                <Link
                    to="/receipts/new"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white"
                >
                    + NEW
                </Link>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg">

                {/* Header */}
                <div className="grid grid-cols-6 bg-slate-900 text-slate-400 px-5 py-3 text-sm font-semibold">
                    <div>Reference</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Contact</div>
                    <div>Schedule</div>
                    <div>Status</div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-6 px-5 py-4 border-t border-slate-700 text-sm hover:bg-slate-900">
                    <div>WH/IN/001</div>
                    <div>Vendor</div>
                    <div>Main Warehouse</div>
                    <div>Azure</div>
                    <div>Today</div>
                    <div className="text-green-400 font-semibold">Ready</div>
                </div>

                <div className="grid grid-cols-6 px-5 py-4 border-t border-slate-700 text-sm hover:bg-slate-900">
                    <div>WH/IN/002</div>
                    <div>Vendor</div>
                    <div>Main Warehouse</div>
                    <div>Azure</div>
                    <div>Tomorrow</div>
                    <div className="text-yellow-400 font-semibold">Waiting</div>
                </div>

            </div>

        </div>
    )
}
