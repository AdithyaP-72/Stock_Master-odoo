export default function Dashboard() {
    return (
        <div>

            <h1 className="text-4xl font-bold mb-8 text-white">
                Dashboard
            </h1>

            {/* KPI CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

                <div className="bg-[#1f2937] rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-400">Total Products in Stock</p>
                    <h2 className="text-4xl mt-2 font-bold text-blue-400">0</h2>
                </div>

                <div className="bg-[#1f2937] rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-400">Low / Out of Stock</p>
                    <h2 className="text-4xl mt-2 font-bold text-red-400">0</h2>
                </div>

                <div className="bg-[#1f2937] rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-400">Pending Receipts</p>
                    <h2 className="text-4xl mt-2 font-bold text-yellow-400">0</h2>
                </div>

                <div className="bg-[#1f2937] rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-400">Pending Deliveries</p>
                    <h2 className="text-4xl mt-2 font-bold text-green-400">0</h2>
                </div>

            </div>


            {/* OPERATION CARDS (like your sketch) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* RECEIPTS BOX */}
                <div className="bg-[#1f2937] rounded-xl p-8 border border-gray-700">

                    <h2 className="text-white text-xl font-bold mb-3">
                        Receipt Operations
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Incoming goods from vendors and suppliers
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                        0 to receive
                    </button>

                    <div className="mt-4 text-sm text-gray-400">
                        0 Late • 0 Waiting
                    </div>
                </div>

                {/* DELIVERY BOX */}
                <div className="bg-[#1f2937] rounded-xl p-8 border border-gray-700">

                    <h2 className="text-white text-xl font-bold mb-3">
                        Delivery Operations
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Outgoing shipments to customers
                    </p>

                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">
                        0 to deliver
                    </button>

                    <div className="mt-4 text-sm text-gray-400">
                        0 Late • 0 Waiting
                    </div>
                </div>

            </div>

        </div>
    )
}
