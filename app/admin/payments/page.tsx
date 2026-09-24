export default function PaymentsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-blue-500">

        <h1 className="text-xl font-bold mb-1">Payments Data</h1>
        <p className="text-sm text-gray-500 mb-4">
          Monitor and verify customer payments.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Keyword of search"
          className="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* CARD ITEM */}
        <div className="bg-gray-50 rounded-xl p-5 shadow-sm border">

          {/* TOP */}
          <div className="flex justify-between items-start mb-4">

            <div>
              <h2 className="font-semibold text-lg">
                Customer Name
              </h2>
              <p className="text-sm text-gray-500">
                Layanan Rumah Tangga / Niaga
              </p>
            </div>

            {/* STATUS */}
            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                Pending
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                Unpaid
              </span>
            </div>

          </div>

          {/* DETAIL GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">

            <div>
              <p className="text-gray-500">Payment Date</p>
              <p className="font-medium">-</p>
            </div>

            <div>
              <p className="text-gray-500">Period</p>
              <p className="font-medium">-</p>
            </div>

            <div>
              <p className="text-gray-500">Usage</p>
              <p className="font-medium">-</p>
            </div>

            <div>
              <p className="text-gray-500">Total</p>
              <p className="font-bold text-blue-600">
                Rp 0
              </p>
            </div>

          </div>

          {/* ACTION */}
          <div className="flex justify-between items-center">

            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-100">
                View Proof
              </button>

              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">
                Detail
              </button>
            </div>

            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Verify
            </button>

          </div>

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-6 text-sm">

          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
            Previous
          </button>

          <span className="px-3 py-1 border rounded-lg bg-gray-100">
            1
          </span>

          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
            Next
          </button>

        </div>

      </div>

    </div>
  )
}