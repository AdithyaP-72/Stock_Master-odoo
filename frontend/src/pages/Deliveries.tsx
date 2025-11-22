export default function Deliveries() {
    return (
        <div>

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Deliveries</h1>

                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white">
                    + NEW
                </button>
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

                <div className="grid grid-cols-6 px-5 py-4 border-t border-slate-700 text-sm hover:bg-slate-900">
                    <div>WH/OUT/001</div>
                    <div>Main Warehouse</div>
                    <div>Customer</div>
                    <div>John</div>
                    <div>Today</div>
                    <div className="text-green-400 font-semibold">Ready</div>
                </div>

                <div className="grid grid-cols-6 px-5 py-4 border-t border-slate-700 text-sm hover:bg-slate-900">
                    <div>WH/OUT/002</div>
                    <div>Main Warehouse</div>
                    <div>Customer</div>
                    <div>Mary</div>
                    <div>Tomorrow</div>
                    <div className="text-yellow-400 font-semibold">Waiting</div>
                </div>

            </div>

        </div>
    )
}
