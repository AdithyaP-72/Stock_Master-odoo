import Sidebar from "../components/Sidebar"

export default function Dashboard() {
    return (
        <div className="flex min-h-screen bg-slate-950 text-white">

            {/* SIDEBAR */}
            <Sidebar />

            {/* MAIN PAGE */}
            <div className="flex-1 p-10">

                <h1 className="text-4xl font-bold mb-10 text-purple-400">
                    Dashboard
                </h1>

                {/* KPI ROW */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">

                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
                        <p className="text-slate-400 text-sm">Total Products</p>
                        <h2 className="text-3xl font-bold mt-2">0</h2>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
                        <p className="text-slate-400 text-sm">Low / Out of Stock</p>
                        <h2 className="text-3xl font-bold mt-2 text-red-400">0</h2>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
                        <p className="text-slate-400 text-sm">Pending Receipts</p>
                        <h2 className="text-3xl font-bold mt-2 text-yellow-400">0</h2>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
                        <p className="text-slate-400 text-sm">Pending Deliveries</p>
                        <h2 className="text-3xl font-bold mt-2 text-green-400">0</h2>
                    </div>

                </div>

                {/* MAIN OPERATIONS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-lg">

                        <h2 className="text-xl font-bold mb-2">
                            Receipt Operations
                        </h2>

                        <p className="text-slate-400 mb-6 text-sm">
                            Incoming goods from vendors
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg">
                            0 to receive
                        </button>

                        <div className="mt-4 text-xs text-slate-400">
                            0 Late · 0 Waiting
                        </div>

                    </div>

                    <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-lg">

                        <h2 className="text-xl font-bold mb-2">
                            Delivery Operations
                        </h2>

                        <p className="text-slate-400 mb-6 text-sm">
                            Outgoing goods to customers
                        </p>

                        <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-lg">
                            0 to deliver
                        </button>

                        <div className="mt-4 text-xs text-slate-400">
                            0 Late · 0 Waiting
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
