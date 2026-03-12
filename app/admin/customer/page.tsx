import { getCookies } from "@/lib/server-cookie";
import { Customer, Services } from "@/app/types";
import AddCustomer from "./add";
import EditCustomer from "./edit";
import DeleteCustomer from "./delete";
import Search from "@/components/search";
import Pagination from "@/components/pagination";
import ResetPassword from "./reset";

type ResultData = {
    success: boolean
    message: string
    data: Customer[]
    count: number
}

type ServiceData = {
    success: boolean
    message: string
    data: Services[]
    count: number
}

async function getCustomers(
    page: number,
    quantity: number,
    search: string
): Promise<ResultData> {

    try {

        const token = await getCookies("accessToken")

        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/customers?page=${page}&quantity=${quantity}&search=${search}`

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
            message: "Failed to fetch customers",
            data: [],
            count: 0
        }

    }

}

async function getServices(): Promise<Services[]> {

    try {

        const token = await getCookies("accessToken")

        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/services?quantity=1000`

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
                Authorization: `Bearer ${token}`
            },
            cache: "no-store",
        })

        const responseData: ServiceData = await response.json()

        if (!response.ok) return []

        return responseData.data

    } catch (error) {

        console.error(error)
        return []

    }

}

type Props = {
    searchParams: Promise<{
        page?: number
        quantity?: number
        search?: string
    }>
}

export default async function CustomersPage(props: Props) {

    const page = (await props.searchParams)?.page || 1
    const quantity = (await props.searchParams)?.quantity || 5
    const search = (await props.searchParams)?.search || ""

    const { count: counts, data: customers } =
        await getCustomers(page, quantity, search)

    const services = await getServices()

    return (

        <div className="p-6 max-w-6xl mx-auto">

            {/* TITLE */}
            <h1 className="text-2xl font-bold mb-6">
                Customer
            </h1>

            {/* SEARCH + ADD */}
            <div className="flex justify-between items-center mb-6">

                <div className="w-full max-w-md">
                    <Search search={search} />
                </div>

                <AddCustomer serviceData={services} />

            </div>

            {/* TABLE */}
            <div className="overflow-x-auto bg-white rounded-xl shadow">

                <table className="w-full table-fixed text-left">

                    {/* HEADER */}
                    <thead className="bg-slate-100 text-slate-700">

                        <tr>

                            <th className="px-6 py-4 w-16">No</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Phone</th>
                            <th className="px-6 py-4">Address</th>
                            <th className="px-6 py-4 w-40 text-center">Action</th>

                        </tr>

                    </thead>

                    {/* BODY */}
                    <tbody>

                        {customers.map((customer, index) => (

                            <tr
                                key={customer.id}
                                className="border-t hover:bg-slate-50 transition"
                            >

                                <td className="px-6 py-4">
                                    {(page - 1) * quantity + index + 1}
                                </td>

                                <td className="px-6 py-4 font-medium">
                                    {customer.name}
                                </td>

                                <td className="px-6 py-4">
                                    {customer.phone}
                                </td>

                                <td className="px-6 py-4">
                                    {customer.address}
                                </td>

                                {/* ACTION */}
                                <td className="px-6 py-4">

                                    <div className="flex gap-2 justify-center">

                                        <EditCustomer selectedData={customer} />

                                        <DeleteCustomer selectedData={customer} />

                                        <ResetPassword selectedData={customer} />

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