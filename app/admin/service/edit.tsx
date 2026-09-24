"use client"

import { getCookie } from "@/lib/client-cookies"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { Services } from "@/app/types"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const EditService = ({
  selectedData,
}: {
  selectedData: Services
}) => {
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [min_usage, setMinUsage] = useState<number>(0)
  const [max_usage, setMaxUsage] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)

  const openModal = () => {
    setName(selectedData.name)
    setMinUsage(selectedData.min_usage)
    setMaxUsage(selectedData.max_usage)
    setPrice(selectedData.price)
    setOpen(true)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const token = await getCookie("accessToken")

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/services/${selectedData.id}`

      const payload = {
        name: name,
        min_usage: Number(min_usage),
        max_usage: Number(max_usage),
        price: Number(price),
      }

      console.log("URL PATCH:", url)
      console.log("PAYLOAD:", payload)

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      console.log("RESULT EDIT:", result)

      if (response.ok && result?.success) {
        toast.success(result.message || "Service berhasil diupdate")
        setOpen(false)
        router.refresh()
      } else {
        toast.warning(result.message || "Gagal update service")
      }
    } catch (error) {
      console.error(error)
      toast.error("Something wrong")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={openModal} variant="outline">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Ubah data service di sini, lalu klik save.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>

            <Field>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </Field>

            <Field>
              <Label htmlFor="min_usage">Min Usage</Label>
              <Input
                id="min_usage"
                name="min_usage"
                type="number"
                value={min_usage}
                onChange={(e) => setMinUsage(Number(e.target.value))}
              />
            </Field>

            <Field>
              <Label htmlFor="max_usage">Max Usage</Label>
              <Input
                id="max_usage"
                name="max_usage"
                type="number"
                value={max_usage}
                onChange={(e) => setMaxUsage(Number(e.target.value))}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditService