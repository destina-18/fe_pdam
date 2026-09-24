"use client"

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
            const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/customers`
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
                window.location.href = "/sign-up"
                return;
            }
            const responseData = await response.json()
            alert(responseData.message)
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    }

    return (
        <div className="w-full h-dvh bg-pink-100 p-3 flex items-center justify-center">
            <div className="bg-white p-10 w-full md:w-1/2 lg:w-1/3 rounded-lg">
                <h1 className="text-center font-bold text-pink-800 text-2xl">
                    Register Customer
                </h1>

                <form className="my-3" onSubmit={handleSignUp}>
                    <label htmlFor="username" className="text-sm font-semibold text-pink-500">Username</label>
                    <input type="text" id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-pink-500 text-slate-900 mb-2 rounded" />

                    <label htmlFor="password" className="text-sm font-semibold text-pink-500">Password</label>
                    <input type="password" id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-2 border border-pink-500 text-slate-900 mb-2 rounded" />

                    <label htmlFor="name" className="text-sm font-semibold text-pink-500">Name</label>
                    <input type="text" id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full p-2 border border-pink-500 text-slate-900 mb-2 rounded" />

                    <label htmlFor="phone" className="text-sm font-semibold text-pink-500">Phone</label>
                    <input type="text" id="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full p-2 border border-pink-500 text-slate-900 mb-2 rounded" />

                    <button type="submit"
                        className="w-full bg-pink-500 text-white p-2 font-semibold hover:bg-pink-600 rounded">
                        Sign Up
                    </button>

                </form>
            </div>
        </div>
    )
}