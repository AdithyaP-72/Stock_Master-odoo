export default function Stock() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-white">Stock</h1>

            <div className="bg-[#1f2937] border border-gray-700 rounded-xl overflow-hidden">

                <table className="w-full text-left text-gray-300">

                    <thead className="bg-[#111827] text-gray-400">
                        <tr>
                            <th className="p-4">Product</th>
                            <th className="p-4">Unit Cost</th>
                            <th className="p-4">On Hand</th>
                            <th className="p-4">Free To Use</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t border-gray-700">
                            <td className="p-4">Steel Rods</td>
                            <td className="p-4">₹3000</td>
                            <td className="p-4">50</td>
                            <td className="p-4">45</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
