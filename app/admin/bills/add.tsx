"use client"

import { Services } from "@/app/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Cookies from "js-cookie" 

type Customer = {
  id: number
  name: string
  meter_number?: string
}

const AddBill = ({
  serviceData,
  customerData,
}: {
  serviceData: Services[]
  customerData: Customer[]
}) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [customerId, setCustomerId] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())
  const [meter, setMeter] = useState("")
  const [usageValue, setUsageValue] = useState(0)
  const [serviceId, setServiceId] = useState(0)
  const [loading, setLoading] = useState(false)

  const openModal = () => {
    setOpen(true)
    setCustomerId(0)
    setMonth(0)
    setYear(new Date().getFullYear())
    setMeter("")
    setUsageValue(0)
    setServiceId(0)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const token = Cookies.get("accessToken") 

    console.log("TOKEN:", token) 

    const payload = {
      customer_id: customerId,
      month,
      year,
      measurement_number: meter,
      usage_value: usageValue,
      service_id: serviceId,
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/bills`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
            Authorization: `Bearer ${token}`, 
          },
          body: JSON.stringify(payload),
        }
      )

      if (response.ok) {
        setOpen(false)
        router.refresh()
        alert("Berhasil menambah bill!")
      } else {
        const errorData = await response.json()
        alert(`Gagal: ${errorData.message || "Terjadi kesalahan"}`)
      }
    } catch (error) {
      console.error(error)
      alert("Koneksi ke server gagal!")
    } finally {
      setLoading(false)
    }
  }

  const months = [
    "Jan","Feb","Mar","Apr","Mei","Jun",
    "Jul","Agu","Sep","Okt","Nov","Des"
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={openModal}>Add Bill</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Bill</DialogTitle>
            <DialogDescription>
              Isi data tagihan dengan lengkap
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto px-1">

            {/* CUSTOMER */}
            <div>
              <Label>Customer</Label>
              <select
                className="w-full border rounded-md p-2 text-sm"
                value={customerId}
                onChange={(e) => {
                  const id = Number(e.target.value)
                  setCustomerId(id)

                  const selected = customerData.find(c => c.id === id)
                  if (selected?.meter_number) {
                    setMeter(selected.meter_number)
                  }
                }}
                required
              >
                <option value="">Pilih Customer</option>
                {customerData.map((cust) => (
                  <option key={cust.id} value={cust.id}>
                    {cust.name}
                  </option>
                ))}
              </select>
            </div>

            {/* MONTH */}
            <div>
              <Label>Bulan</Label>
              <select
                className="w-full border rounded-md p-2 text-sm"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                required
              >
                <option value="">Pilih Bulan</option>
                {months.map((m, i) => (
                  <option key={i} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* YEAR */}
            <div>
              <Label>Tahun</Label>
              <Input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                required
              />
            </div>

            {/* METER */}
            <div>
              <Label>Meter</Label>
              <Input
                type="text"
                value={meter}
                onChange={(e) => setMeter(e.target.value)}
                required
              />
            </div>

            {/* USAGE */}
            <div>
              <Label>Usage (m³)</Label>
              <Input
                type="number"
                value={usageValue}
                onChange={(e) => setUsageValue(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="outline" type="button" disabled={loading}>
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddBill