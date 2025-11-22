export default function Dashboard() {
    return (
        <>
            <h1 className="text-6xl text-red-600 font-bold">Dashboard</h1>

            {/* KPI CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p className="text-slate-400">Total Products</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p className="text-slate-400">Low / Out of Stock</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p className="text-slate-400">Pending Receipts</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p className="text-slate-400">Pending Deliveries</p>
                    <h2 className="text-3xl font-bold mt-2">0</h2>
                </div>

            </div>

            {/* OPERATIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-bold mb-2">Receipt Operations</h2>
                    <p className="text-slate-400 mb-4">Incoming Stock</p>
                    <span className="bg-blue-600 px-4 py-2 rounded-lg">0 to receive</span>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-bold mb-2">Delivery Operations</h2>
                    <p className="text-slate-400 mb-4">Outgoing Stock</p>
                    <span className="bg-purple-600 px-4 py-2 rounded-lg">0 to deliver</span>
                </div>

            </div>
        </>
    )
}
