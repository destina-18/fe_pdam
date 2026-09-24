"use server"

import { getCookies } from "@/lib/server-cookie"

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL!

export const verifyPayment = async (id: number) => {
  try {
    const token = await getCookies("accessToken")

    if (!token) {
      return {
        success: false,
        message: "Unauthorized (token tidak ada)",
      }
    }

    const res = await fetch(`${BASE_API_URL}/payments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paid: true,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Gagal verify",
      }
    }

    return {
      success: true,
      message: "Berhasil verify",
      data,
    }

  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: "Server error",
    }
  }
}