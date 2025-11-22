import { Link } from "react-router-dom"
import DotGrid from "../components/DotGrid"

export default function Home() {
    return (
        <div className="min-h-screen text-white relative overflow-hidden bg-[#020617]">

            {/* Animated Dot Grid */}
            <DotGrid
                dotSize={6}
                gap={20}
                baseColor="#0f172a"
                activeColor="#a855f7"
                proximity={140}
                shockRadius={180}
                shockStrength={4}
                resistance={600}
                returnDuration={1.2}
            />


            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">

                {/* NAVBAR */}
                <nav className="w-full flex justify-between items-center px-10 py-6 bg-black/40 backdrop-blur-md border-b border-purple-400/20">
                    <h1 className="text-2xl font-bold text-purple-400">StockMaster</h1>

                    <div className="flex space-x-6 items-center">
                        <Link to="/" className="hover:text-purple-400 transition">Home</Link>
                        <Link to="/login" className="hover:text-purple-400 transition">Login</Link>

                        <Link
                            to="/signup"
                            className="border border-purple-400 px-5 py-2 rounded-lg text-purple-400 hover:bg-purple-400 hover:text-black transition"
                        >
                            Get Started
                        </Link>
                    </div>
                </nav>

                {/* HERO */}
                <main className="flex flex-1 flex-col justify-center items-center text-center px-6">

                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-wide">
                        Smarter <span className="text-purple-400">Inventory</span>
                        <br />
                        Smarter <span className="text-purple-400">Business</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mb-10">
                        StockMaster is a next-generation inventory and warehouse management
                        system that tracks stock, deliveries, receipts, and vendors — all
                        in one powerful, elegant dashboard.
                    </p>

                    <div className="flex space-x-6">
                        <Link
                            to="/signup"
                            className="bg-purple-400 text-black px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition"
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/login"
                            className="border border-white px-8 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition"
                        >
                            Login
                        </Link>
                    </div>

                </main>
            </div>

        </div>
    )
}
