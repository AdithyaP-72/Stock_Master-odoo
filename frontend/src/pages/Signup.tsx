import { Link } from "react-router-dom"
import DotGrid from "../components/DotGrid"

export default function Signup() {
    return (
        <div className="relative min-h-screen bg-[#060b1a] text-white overflow-hidden">

            {/* DotGrid Background */}
            <div className="absolute inset-0 z-0">
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
            </div>

            {/* CONTENT */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">

                <div className="w-[420px] rounded-2xl border border-purple-400/40 p-8 bg-black/50 backdrop-blur-xl shadow-2xl">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Create <span className="text-purple-400">Account</span>
                    </h2>

                    <div className="mb-3">
                        <label className="text-sm text-gray-400">Login ID</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 rounded bg-transparent border border-gray-600 focus:border-purple-400 outline-none"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="text-sm text-gray-400">Email ID</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-2 rounded bg-transparent border border-gray-600 focus:border-purple-400 outline-none"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="text-sm text-gray-400">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-2 rounded bg-transparent border border-gray-600 focus:border-purple-400 outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="text-sm text-gray-400">Re-enter Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-2 rounded bg-transparent border border-gray-600 focus:border-purple-400 outline-none"
                        />
                    </div>

                    <button className="w-full py-2 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-400 transition">
                        SIGN UP
                    </button>

                    <p className="mt-4 text-sm text-center text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-400 hover:underline">
                            Login
                        </Link>
                    </p>

                </div>

            </div>
        </div>
    )
}
