import { getCookies } from "@/lib/server-cookie"
import Search from "@/components/search"
import Pagination from "@/components/pagination"
import AddBill from "./add"
import StatusFilter from "./filter"
import { bills, Customer } from "@/app/types"
import { BillCard } from "./card"

export const dynamic = "force-dynamic"

type ResultData = {
  success: boolean
  message: string
  data: bills[]
  count: number
}

async function getBills(
  page: number,
  quantity: number,
  search: string
): Promise<ResultData> {

  try {

    const token = await getCookies("accessToken")

    const url =
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/bills?page=${page}&quantity=${quantity}&search=${search}`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
        Authorization: `Bearer ${token}`
      },
      cache: "no-store"
    })

    const responseData: ResultData = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: responseData.message,
        data: [],
        count: 0
      }
    }

    return responseData

  } catch (error) {

    console.error(error)

    return {
      success: false,
      message: "Failed to fetch bills",
      data: [],
      count: 0
    }

  }
}

async function getCustomers(): Promise<Customer[]> {

  try {

    const token = await getCookies("accessToken")

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/customers`,
      {
        headers: {
          "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
          Authorization: `Bearer ${token}`
        },
        cache: "no-store"
      }
    )

    const result = await res.json()

    return result.data || []

  } catch (error) {

    console.error(error)
    return []

  }
}

function formatRupiah(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number)
}

type Props = {
  searchParams: Promise<{
    page?: number
    quantity?: number
    search?: string
    status?: string
  }>
}

export default async function BillPage(props: Props) {

  const searchParams = await props.searchParams

  const page = Number(searchParams?.page) || 1
  const quantity = Number(searchParams?.quantity) || 5
  const search = searchParams?.search || ""
  const statusFilter = searchParams?.status || "all"

  const { count, data: bills } =
    await getBills(page, quantity, search)

  const customers = await getCustomers()

  const filteredBills = bills.filter((bill) => {

    const status =
      bill.paid
        ? "paid"
        : bill.payments
        ? "pending"
        : "unpaid"

    if (statusFilter === "all") return true

    return status === statusFilter
  })

  const totalBills = bills.reduce(
    (acc, bill) => acc + (bill.usage_value * bill.price),
    0
  )

  const totalPaid = bills
    .filter(bill => bill.paid)
    .reduce(
      (acc, bill) => acc + (bill.usage_value * bill.price),
      0
    )

  const totalUnpaid = bills
    .filter(bill => !bill.paid)
    .reduce(
      (acc, bill) => acc + (bill.usage_value * bill.price),
      0
    )

  return (

    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Bill Dashboard
      </h1>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-blue-500 text-white p-5 rounded-xl">
          <p>Total Tagihan</p>
          <h2 className="text-xl font-bold">
            {formatRupiah(totalBills)}
          </h2>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-xl">
          <p>Sudah Dibayar</p>
          <h2 className="text-xl font-bold">
            {formatRupiah(totalPaid)}
          </h2>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl">
          <p>Belum Dibayar</p>
          <h2 className="text-xl font-bold">
            {formatRupiah(totalUnpaid)}
          </h2>
        </div>

      </div>

      {/* SEARCH + FILTER + ADD */}
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">

        <div className="w-full md:w-1/2">
          <Search search={search} />
        </div>

        <div className="flex items-center gap-3">

          <div className="border rounded-lg px-3 py-2 bg-white shadow-sm">
            <StatusFilter />
          </div>

          <AddBill
            serviceData={[]}
            customerData={customers}
          />

        </div>

      </div>

      {/* LIST BILL */}
      <div className="space-y-4">

        {filteredBills.length > 0 ? (

          filteredBills.map((bill) => (

            <BillCard
              key={bill.id}
              bill={bill}
              customers={customers}
            />

          ))

        ) : (

          <div className="text-center text-gray-500 py-10">
            Tidak ada data
          </div>

        )}

      </div>

    

      {/* PAGINATION */}
      <div className="my-6 flex justify-center">

        <Pagination
          count={count}
          currentPage={page}
          perPage={quantity}
        />

      </div>

    </div>

  )
}