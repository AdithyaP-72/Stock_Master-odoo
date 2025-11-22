export default function Stock() {
    return (
        <div>

            <h1 className="text-3xl font-bold mb-8">
                Stock Overview
            </h1>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg">

                {/* Header */}
                <div className="grid grid-cols-4 bg-slate-900 text-slate-400 px-5 py-3 text-sm font-semibold">
                    <div>Product</div>
                    <div>Unit Cost</div>
                    <div>On Hand</div>
                    <div>Free To Use</div>
                </div>

                <div className="grid grid-cols-4 px-5 py-4 border-t border-slate-700 text-sm hover:bg-slate-900">
                    <div>Steel Rods</div>
                    <div>₹3000</div>
                    <div>50</div>
                    <div>45</div>
                </div>

                <div className="grid grid-cols-4 px-5 py-4 border-t border-slate-700 text-sm hover:bg-slate-900">
                    <div>Aluminium Sheets</div>
                    <div>₹1200</div>
                    <div>80</div>
                    <div>80</div>
                </div>

            </div>

        </div>
    )
}
