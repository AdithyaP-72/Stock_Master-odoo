export default function Stock() {
    return (
        <div>

            <h1 className="text-3xl font-bold mb-8">
                Stock
            </h1>

            <div className="bg-[#1e293b] border border-gray-700 rounded-xl overflow-hidden">

                <div className="grid grid-cols-4 text-sm text-gray-400 bg-[#020617] px-4 py-3">
                    <div>Product</div>
                    <div>Unit Cost</div>
                    <div>On Hand</div>
                    <div>Free to Use</div>
                </div>

                <div className="grid grid-cols-4 px-4 py-4 border-t border-gray-700 text-sm">
                    <div>Steel Rods</div>
                    <div>₹3000</div>
                    <div>50</div>
                    <div>45</div>
                </div>

            </div>

        </div>
    )
}
