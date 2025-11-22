import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Receipts from "./pages/Receipts"
import Deliveries from "./pages/Deliveries"
import Stock from "./pages/Stock"

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-900 text-white">
        <Sidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/stock" element={<Stock />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
