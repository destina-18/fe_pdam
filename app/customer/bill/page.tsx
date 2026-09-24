"use client";

import { useEffect, useState } from "react";
import { getCookie } from "@/lib/client-cookies";
import PaymentModal from "./paymentModal";
import { PaymentProofPreview } from "./proof";

type Bill = {
  id: number;
  month: number;
  year: number;
  usage_value: number;
  amount: number;
  paid: boolean;
  payments?: {
    payment_proof: string;
    verified: boolean;
  };
};

export default function CustomerBillPage() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchBills = async () => {
    const token = getCookie("accessToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/bills/me`,
      {
        headers: {
          "app-key": `${process.env.NEXT_PUBLIC_APP_KEY}`,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    console.log("BILLS:", data); // debug
    setBills(data.data || []);
  };

  useEffect(() => {
    fetchBills();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Tagihan Saya</h1>

      {bills.map((bill) => {
        // 🔥 FIX STATUS
        const status = bill.paid
          ? "paid"
          : bill.payments
          ? "pending"
          : "unpaid";

        return (
          <div
            key={bill.id}
            className="bg-white rounded-xl p-5 mb-4 flex justify-between"
          >
            <div>
              <p className="font-semibold">
                {bill.month}/{bill.year}
              </p>
              <p>{bill.usage_value} m³</p>
            </div>

            <div>
              <p className="font-bold text-blue-600">
                Rp {bill.amount.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  status === "paid"
                    ? "bg-green-100 text-green-600"
                    : status === "pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {status.toUpperCase()}
              </span>

              {status === "unpaid" && (
                <button
                  onClick={() => {
                    setSelectedBill(bill);
                    setShowModal(true);
                  }}
                  className="block mt-3 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Bayar
                </button>
              )}

              {status === "pending" && bill.payments?.payment_proof && (
                <div className="mt-3">
                  <PaymentProofPreview
                    filename={bill.payments.payment_proof}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {showModal && selectedBill && (
        <PaymentModal
          bill={selectedBill}
          onClose={() => setShowModal(false)}
          onSuccess={fetchBills}
        />
      )}
    </div>
  );
}