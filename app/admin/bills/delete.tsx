"use client"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { getCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"


type Bill = {
    id: number
    month: number
    year: number
    measurement_number: string
    customer?: {
        name: string
    }
}

const DeleteBill = ({ selectedData }: { selectedData: Bill }) => {

    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent) => {

        try {
            e.preventDefault()

            const token = await getCookie("accessToken")

            const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/bills/${selectedData.id}`

            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
                    "Authorization": `Bearer ${token}`,
                },
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

    
    const months = [
        "Jan","Feb","Mar","Apr","Mei","Jun",
        "Jul","Agu","Sep","Okt","Nov","Des"
    ]

    return (

        <AlertDialog open={open} onOpenChange={setOpen}>

            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    onClick={() => setOpen(true)}
                >
                    Delete
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>

                <form onSubmit={handleSubmit}>

                    <AlertDialogHeader>

                        <AlertDialogTitle>
                            Are you sure?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete
                            bill <b>
                                {selectedData.customer?.name || "-"} -{" "}
                                {months[selectedData.month - 1]} {selectedData.year}
                            </b>.
                        </AlertDialogDescription>

                    </AlertDialogHeader>

                    <AlertDialogFooter>

                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <Button type="submit">
                            Continue
                        </Button>

                    </AlertDialogFooter>

                </form>

            </AlertDialogContent>

        </AlertDialog>

    )
}

export default DeleteBill