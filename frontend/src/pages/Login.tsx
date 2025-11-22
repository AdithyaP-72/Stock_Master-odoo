import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import DotGrid from "../components/DotGrid"

export default function Login() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async () => {
        setError("")

        try {
            const res = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.message || "Login failed")
                return
            }

            // SUCCESS ✅
            navigate("/dashboard")

        } catch (err) {
            setError("Server not reachable")
        }
    }

    return (
        <div className="relative min-h-screen bg-[#060b1a] text-white overflow-hidden">

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

            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="w-[380px] rounded-2xl border border-purple-400/40 p-8 bg-black/50 backdrop-blur-xl shadow-2xl">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Login to <span className="text-purple-400">StockMaster</span>
                    </h2>

                    {error && (
                        <p className="mb-4 text-red-400 text-sm text-center">
                            {error}
                        </p>
                    )}

                    <div className="mb-4">
                        <label className="text-sm text-gray-400">Login ID</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 p-2 rounded bg-transparent border border-gray-600 focus:border-purple-400 outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="text-sm text-gray-400">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full mt-1 p-2 rounded bg-transparent border border-gray-600 focus:border-purple-400 outline-none"
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full py-2 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-400 transition"
                    >
                        SIGN IN
                    </button>

                    <p className="mt-4 text-sm text-center text-gray-400">
                        Forgot password?{" "}
                        <span className="text-purple-400 cursor-pointer hover:underline">
                            Reset
                        </span>
                    </p>

                    <p className="mt-2 text-sm text-center text-gray-400">
                        No account?{" "}
                        <Link to="/signup" className="text-purple-400 hover:underline">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    )
}
