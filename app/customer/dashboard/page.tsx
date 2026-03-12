import { getCookies } from "@/lib/server-cookie";
import { Customer } from "@/app/types"; 


type ResultData = {
    success: boolean,
    message: string,
    data: Customer,
}

async function getCustomerProfile()
    : Promise<Customer | null> {
    try {
        const token = await getCookies ('accessToken');
        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/customers/me`
        const response = await fetch(
            url,
            {
                method: `GET`,
                headers: {
                    "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
                    "Authorization": `bearer ${token}`,
                }
            }
        )

        const responseData: ResultData =
            await response.json()

        if (!response.ok) {
            console.log(responseData?.message)
            return null
        }

        return responseData.data

    } catch (error) {
        console.log(error)
        return null
    }
}

export default async function CustomerProfilePage() {
    const customerData = await getCustomerProfile()
    console.log(process.env.NEXT_PUBLIC_APP_KEY);
    if (customerData == null) {
        return (
            <div className="w-full p-5">
                Sorry, customer data does not exists
            </div>
        )
    }
    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-5">
        <div className="w-full max-w-lg p-8 bg-pink-50 rounded-2xl shadow-sm border border-pink-100">
            <h1 className="font-bold text-pink-600 text-2xl mb-6 text-center md:text-left">
                Customer Profile
            </h1>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                    <tbody>
                        <tr>
                            <td className="font-medium text-gray-600 w-1/3 py-1">Name</td>
                            <td className="text-gray-800 py-1">: {customerData.name}</td>
                        </tr>
                        <tr>
                            <td className="font-medium text-gray-600 py-1">Username</td>
                            <td className="text-gray-800 py-1">: {customerData.user.username}</td>
                        </tr>
                        <tr>
                            <td className="font-medium text-gray-600 py-1">Phone</td>
                            <td className="text-gray-800 py-1">: {customerData.phone}</td>
                        </tr>
                        <tr>
                            <td className="font-medium text-gray-600 py-1">Alamat</td>
                            <td className="text-gray-800 py-1">: {customerData.address}</td>
                        </tr>
                        <tr>
                            <td className="font-medium text-gray-600 py-1">Nomor Pelanggan</td>
                            <td className="text-gray-800 py-1">: {customerData.customer_number}</td>
                        </tr>
                        <tr>
                            <td className="font-medium text-gray-600 py-1">Tanggal Pendaftaran</td>
                            <td className="text-gray-800 py-1">
                                : {new Date(customerData.createdAt).toLocaleDateString('id-ID')}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

}
