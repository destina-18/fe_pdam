"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PaymentProofPreview } from "@/app/customer/bill/proof"
import { bills, Customer } from "@/app/types"
import EditBill from "./edit"
import DeleteBill from "./delete"
import VerifyBill from "./verify"
import { useRouter } from "next/navigation"
import { useRef } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export function BillCard({ bill, customers }: { bill: bills, customers: Customer[] }) {

  const router = useRouter()
  const pdfRef = useRef<HTMLDivElement>(null)

  const getStatus = () => {
    if (bill.payments == null) return "unpaid"
    if (!bill.payments?.verified) return "pending"
    return "paid"
  }

  const hasPayment = bill.payments != null
  const status = getStatus()

  const statusConfig = {
    unpaid: {
      label: "Belum Bayar",
      variant: "destructive",
    },
    pending: {
      label: "Menunggu Verifikasi",
      variant: "secondary",
    },
    paid: {
      label: "Lunas",
      variant: "default",
    },
  }

  const monthName = new Date(bill.year, bill.month - 1).toLocaleString("id-ID", {
    month: "long",
  })

  const downloadPDF = async () => {
    if (!pdfRef.current) return

    const canvas = await html2canvas(pdfRef.current)

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")

    const imgWidth = 210
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

    pdf.save(`bill-${bill.id}.pdf`)
  }

  return (
    <Card className="rounded-2xl shadow-sm mb-2">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>

          <h5 className="text-lg font-semibold">
            {bill.customer.name}
          </h5>

          <p className="text-sm text-slate-500">
            {bill.service.name}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Bill ID: #{bill.id}
          </p>

        </CardTitle>

        <Badge variant={statusConfig[status].variant as any}>
          {statusConfig[status].label}
        </Badge>

      </CardHeader>

      <CardContent className="space-y-4">

        {/* TOTAL */}
        <div>
          <p className="text-sm text-muted-foreground">Total Tagihan</p>
          <p className="text-3xl font-bold">
            Rp {bill.amount.toLocaleString("id-ID")}
          </p>
        </div>

        {/* INFO */}
        <div className="grid grid-cols-3 gap-4 text-sm">

          <div>
            <p className="text-muted-foreground">Periode</p>
            <p className="font-medium">{monthName} {bill.year}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Pemakaian</p>
            <p className="font-medium">{bill.usage_value} m³</p>
          </div>

          <div>
            <p className="text-muted-foreground">No Meter</p>
            <p className="font-medium">{bill.measurement_number}</p>
          </div>

        </div>

        {/* TANGGAL BAYAR */}
        {status !== "unpaid" && (
          <div className="text-xs text-muted-foreground">
            Dibayar:{" "}
            {new Date(bill.payments.payment_date).toLocaleDateString("id-ID")}
          </div>
        )}

        {/* ACTION */}
        <div className="flex justify-between items-center mt-4 flex-wrap gap-2">

          {/* LEFT */}
          <div className="flex gap-2">

            {/* DETAIL */}
            {hasPayment && (
              <Dialog>

                <DialogTrigger asChild>
                  <button className="text-sm px-3 py-1 rounded-md bg-primary text-white hover:opacity-90">
                    Detail
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-md">

                  <DialogHeader>
                    <DialogTitle>
                      Detail Pembayaran
                    </DialogTitle>
                  </DialogHeader>

                  {/* AREA PDF */}
                  <div ref={pdfRef} className="space-y-3 text-sm bg-white p-4">

                    <div className="flex justify-between">
                      <span>Nama Customer</span>
                      <span>{bill.customer.name}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>No Meter</span>
                      <span>{bill.measurement_number}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Layanan</span>
                      <span>{bill.service.name}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Periode</span>
                      <span>{monthName} {bill.year}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Pemakaian</span>
                      <span>{bill.usage_value} m³</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Harga / m³</span>
                      <span>Rp {bill.price.toLocaleString("id-ID")}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Status</span>
                      <span>{statusConfig[status].label}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Tanggal Bayar</span>
                      <span>
                        {bill.payments
                          ? new Date(bill.payments.payment_date).toLocaleDateString("id-ID")
                          : "-"}
                      </span>
                    </div>

                    <hr />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Tagihan</span>
                      <span>Rp {bill.amount.toLocaleString("id-ID")}</span>
                    </div>

                  </div>

                  {/* BUTTON */}
                  <div className="flex justify-end mt-4 gap-2">

                    <button
                      onClick={downloadPDF}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Download PDF
                    </button>

                  </div>

                </DialogContent>

              </Dialog>
            )}

            {/* BUKTI PEMBAYARAN */}
            {hasPayment && (
              <PaymentProofPreview
                filename={bill.payments.payment_proof}
              />
            )}

          </div>

          {/* RIGHT */}
          <div className="flex gap-2">

            {status === "pending" && (
              <VerifyBill selectedData={bill} />
            )}

            {status !== "paid" && (
              <>
                <EditBill selectedData={bill} />
                <DeleteBill selectedData={bill} />
              </>
            )}

          </div>

        </div>

      </CardContent>

    </Card>
  )
}