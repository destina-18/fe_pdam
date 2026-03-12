"use client"
import { storeCookie } from "@/lib/client-cookies"
import { useState } from "react"

export default function SignUpPage() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    async function handleSignUp(e: React.FormEvent) {
        e.preventDefault()
        try {
            const request = JSON.stringify({ //mengubah data menjadi JSON string 
                username,
                password,
                name,
                phone
            })
            const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth`
            const response = await fetch(url, { //mengirim data ke server
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "app-key": `${process.env.NEXT_PUBLIC_APP_KEY}`
                },
                body: request
            })
            console.log(response)
            if (!response.ok) {//false
                alert("gagal melakukan registrasi")
                return;
            }
            const responseData = await response.json()
            storeCookie( `accessToken`, responseData.token, 1);
            if (responseData.role == "ADMIN") {
                window.location.href = "/admin/profile"
            } else if (responseData.role == "CUSTOMER") {
                window.location.href = "/customer/dashboard"
            }
            alert(responseData.message)
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    }

    return (
        <div className="w-full h-dvh bg-blue-100 p-3 flex items-center justify-center">
            <div className="bg-white p-10 w-full md:w-1/2 lg:w-1/3 rounded-lg">
                <h1 className="text-center font-bold text-blue-800 text-2xl">
                    Log-in
                </h1>

                <form className="my-3" onSubmit={handleSignUp}>
                    <label htmlFor="username" className="text-sm font-semibold text-blue-500">Username</label>
                    <input type="text" id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-blue-500 text-slate-900 mb-2 rounded" />

                    <label htmlFor="password" className="text-sm font-semibold text-blue-500">Password</label>
                    <input type="password" id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-2 border border-blue-500 text-slate-900 mb-2 rounded" />

                    <button type="submit"
                        className="w-full bg-blue-500 text-white p-2 font-semibold hover:bg-blue-600 rounded">
                        Sign in
                    </button>

                </form>
            </div>
        </div>
    )
}