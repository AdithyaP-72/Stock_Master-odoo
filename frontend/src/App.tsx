import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Receipts from "./pages/Receipts"
import Deliveries from "./pages/Deliveries"
import Stock from "./pages/Stock"
import NewReceipt from "./pages/NewReceipt"

export default function App() {
  return (
    <BrowserRouter>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="ml-64 p-8 bg-[#111827] min-h-screen">
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/receipts/new" element={<NewReceipt />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}
