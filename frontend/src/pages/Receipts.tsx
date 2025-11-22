export default function Receipts() {
    return (
        <div>

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Receipts</h1>

                <a
                    href="/receipts/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                    NEW
                </a>
            </div>

            <div className="bg-[#1f2937] border border-gray-700 rounded-xl overflow-hidden">

                <table className="w-full text-left text-sm text-gray-300">

                    <thead className="bg-[#111827] text-gray-400">
                        <tr>
                            <th className="p-4">Reference</th>
                            <th className="p-4">From</th>
                            <th className="p-4">To</th>
                            <th className="p-4">Contact</th>
                            <th className="p-4">Schedule</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-t border-gray-700 hover:bg-[#111827]">
                            <td className="p-4">WH/IN/001</td>
                            <td className="p-4">Vendor</td>
                            <td className="p-4">Main Warehouse</td>
                            <td className="p-4">Azure Interiors</td>
                            <td className="p-4">Today</td>
                            <td className="p-4 text-green-400">Ready</td>
                        </tr>

                        <tr className="border-t border-gray-700 hover:bg-[#111827]">
                            <td className="p-4">WH/IN/002</td>
                            <td className="p-4">Vendor</td>
                            <td className="p-4">Main Warehouse</td>
                            <td className="p-4">Azure Interiors</td>
                            <td className="p-4">Tomorrow</td>
                            <td className="p-4 text-yellow-400">Waiting</td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </div>
    )
}
