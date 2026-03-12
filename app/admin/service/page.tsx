//menampilkan data
import { Services } from "@/app/types";
import { getCookies } from "@/lib/server-cookie";
import AddService from "./add";
import DeleteService from "./delete";
import EditService from "./edit";
import Search from "@/components/search";
import Pagination from "@/components/pagination";

type ResultData = {
  success: boolean
  message: string
  data: Services[]
  count: number
}

async function getServices(
  page: number,
  quantity: number,
  search: string
): Promise<ResultData> {

  try {

    const token = await getCookies("accessToken")

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/services?page=${page}&quantity=${quantity}&search=${search}`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
        Authorization: `Bearer ${token}`
      },
      cache: "no-store",
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
      message: "Failed to fetch services",
      data: [],
      count: 0
    }

  }

}

type Props = {
  searchParams: Promise<{
    page?: number
    quantity?: number
    search?: string
  }>
}

export default async function ServicesPage(props: Props) {

  const page = (await props.searchParams)?.page || 1
  const quantity = (await props.searchParams)?.quantity || 5
  const search = (await props.searchParams)?.search || ""

  const { count: counts, data: services } =
    await getServices(page, quantity, search)

  return (

    <div className="p-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">
        Service
      </h1>

      {/* SEARCH + ADD */}
      <div className="flex justify-between items-center mb-6">

        <div className="w-full max-w-md">
          <Search search={search} />
        </div>

        <AddService />

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full table-fixed text-left">

          {/* HEADER */}
          <thead className="bg-slate-100 text-slate-700">

            <tr>

              <th className="px-6 py-4 w-16">No</th>
              <th className="px-6 py-4">Service Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Min Usage</th>
              <th className="px-6 py-4">Max Usage</th>
              <th className="px-6 py-4 w-40 text-center">Action</th>

            </tr>

          </thead>

          {/* BODY */}
          <tbody>

            {services.map((service, index) => (

              <tr
                key={service.id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="px-6 py-4">
                  {(page - 1) * quantity + index + 1}
                </td>

                <td className="px-6 py-4 font-medium">
                  {service.name}
                </td>

                <td className="px-6 py-4">
                  {service.price}
                </td>

                <td className="px-6 py-4">
                  {service.min_usage}
                </td>

                <td className="px-6 py-4">
                  {service.max_usage}
                </td>

                {/* ACTION */}
                <td className="px-6 py-4">

                  <div className="flex gap-2 justify-center">

                    <EditService selectedData={service} />

                    <DeleteService selectedData={service} />

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}
      <div className="my-6 flex justify-center">

        <Pagination
          count={counts}
          currentPage={page}
          perPage={quantity}
        />

      </div>

    </div>

  )

}