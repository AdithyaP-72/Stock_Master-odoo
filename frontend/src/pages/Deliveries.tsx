export default function Deliveries() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Deliveries</h1>

                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    + New
                </button>
            </div>

            <div className="bg-white p-6 rounded shadow">
                <p>No deliveries yet.</p>
            </div>
        </div>
    )
}
