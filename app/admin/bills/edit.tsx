"use client"

import { getCookie } from "@/lib/client-cookies"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Bill = {
  id: number
  month: number
  year: number
  measurement_number: string
  usage_value: number
  price: number
}

const EditBill = ({
  selectedData
}: {
  selectedData: Bill
}) => {

  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [meter, setMeter] = useState<string>("")
  const [usageValue, setUsageValue] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)

  const openModal = () => {
    setOpen(true)
    setMonth(selectedData.month)
    setYear(selectedData.year)
    setMeter(selectedData.measurement_number)
    setUsageValue(selectedData.usage_value)
    setPrice(selectedData.price)
  }

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()

      const token = await getCookie("accessToken")

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/bills/${selectedData.id}`

      const payload = JSON.stringify({
        month,
        year,
        measurement_number: meter,
        usage_value: usageValue,
        price
      })

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
          "Authorization": `Bearer ${token}`,
        },
        body: payload
      })

      const result = await response.json()

      if (result?.success) {
        toast.success(result.message)
        setOpen(false)
        setTimeout(() => router.refresh(), 1000)
      } else {
        toast.warning(result.message)
      }

    } catch (error) {
      toast.error(`Something wrong, ${error}`)
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogTrigger asChild>
          <Button onClick={openModal} variant="outline">
            Edit
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">

          <form onSubmit={handleSubmit}>

            <DialogHeader>
              <DialogTitle>Edit Bill</DialogTitle>
              <DialogDescription>
                Update data bill di bawah ini
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>

              {/* MONTH */}
              <Field>
                <Label>Bulan</Label>
                <Input
                  type="number"
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                />
              </Field>

              {/* YEAR */}
              <Field>
                <Label>Tahun</Label>
                <Input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                />
              </Field>

              {/* METER */}
              <Field>
                <Label>No Meter</Label>
                <Input
                  type="text"
                  value={meter}
                  onChange={(e) => setMeter(e.target.value)}
                />
              </Field>

              {/* USAGE */}
              <Field>
                <Label>Usage</Label>
                <Input
                  type="number"
                  value={usageValue}
                  onChange={(e) => setUsageValue(Number(e.target.value))}
                />
              </Field>        
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>

              <Button type="submit">
                Save changes
              </Button>
            </DialogFooter>

          </form>

        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditBill