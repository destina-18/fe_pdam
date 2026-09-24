"use client"

import { bills } from "@/app/types"
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
import { verifyPayment } from "@/services/bills_admin"
import { Vote } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"

const VerifyBill = ({
   selectedData
}: {
   selectedData: bills
}) => {

   const router = useRouter()
   const [open, setOpen] = useState(false)

   const openModal = () => {
      setOpen(true)
   }

   const handleSubmit = async (e: FormEvent) => {

      e.preventDefault()

      try {

         if (!selectedData?.id) {
            toast.error("Bill ID tidak ditemukan")
            return
         }

         const result = await verifyPayment(selectedData.payments.id)

         if (result?.success) {

            toast.success(result.message)

            setOpen(false)

            setTimeout(() => {
               router.refresh()
            }, 800)

         } else {

            toast.warning(result.message)

         }

      } catch (error) {

         toast.error(`Something wrong: ${error}`)

      }
   }

   return (

      <AlertDialog open={open} onOpenChange={setOpen}>

         <AlertDialogTrigger asChild>

            <Button
               variant="outline"
               className="text-sm px-3 py-1 rounded-md bg-green-600 text-white hover:opacity-90"
               onClick={openModal}
            >
               <Vote size={16} />
               Verify
            </Button>

         </AlertDialogTrigger>

         <AlertDialogContent>

            <form onSubmit={handleSubmit}>

               <AlertDialogHeader>

                  <AlertDialogTitle>
                     Are you sure verify this payment?
                  </AlertDialogTitle>

                  <AlertDialogDescription>
                     This will permanently verify the payment for{" "}
                     <b>{selectedData.customer?.name}</b>
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

export default VerifyBill