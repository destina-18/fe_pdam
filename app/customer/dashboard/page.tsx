import { getBillsByCustomer } from "@/services/bills_customer"; 
import { BillChart } from "./chart"


export default async function Dashboard() {
 const { counts, bills } = await getBillsByCustomer({ page: 1, quantity: 1000, search: "" });
 return (
   <div className="m-2 bg-white rounded-xl p-4 border-t-4 border-t-primary shadow-md">
     {/* Chart */}
     <BillChart data={bills} />


     {/* List */}
     {/* ...existing bill UI */}
   </div>
 )
}
export const dynamic = "force-dynamic";