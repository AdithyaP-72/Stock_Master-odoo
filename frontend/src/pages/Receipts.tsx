export default function Receipts() {
    return (
        <div>

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Receipts</h1>

                <a
                    href="/receipts/new"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
                >
                    NEW
                </a>
            </div>

            <div className="bg-[#1e293b] border border-gray-700 rounded-xl overflow-hidden">

                {/* Header */}
                <div className="grid grid-cols-6 bg-[#020617] text-gray-400 px-4 py-3">
                    <div>Reference</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Contact</div>
                    <div>Schedule</div>
                    <div>Status</div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-6 px-4 py-4 border-t border-gray-700">
                    <div>WH/IN/001</div>
                    <div>Vendor</div>
                    <div>Main Warehouse</div>
                    <div>Azure</div>
                    <div>Today</div>
                    <div className="text-green-400">Ready</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-6 px-4 py-4 border-t border-gray-700">
                    <div>WH/IN/002</div>
                    <div>Vendor</div>
                    <div>Main Warehouse</div>
                    <div>Azure</div>
                    <div>Tomorrow</div>
                    <div className="text-yellow-400">Waiting</div>
                </div>

            </div>
        </div>
    )
}
