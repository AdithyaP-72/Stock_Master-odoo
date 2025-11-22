import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Receipts from "./pages/Receipts"
import Deliveries from "./pages/Deliveries"
import Stock from "./pages/Stock"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/stock" element={<Stock />} />

      </Routes>
    </BrowserRouter>
  )
}
