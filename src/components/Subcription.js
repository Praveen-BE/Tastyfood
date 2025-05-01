import React, { useEffect, useState } from "react";
import { vercelURL } from "../utils/constant";

const Subcription = () => {
  const [membershipType, setMemberShipType] = useState(null);
  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    const res = await fetch(vercelURL + "premium/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = res.json();
    setMemberShipType(data.membershipType);
  };

  const handleBuyClick = async (type) => {
    const order = await fetch(vercelURL + "payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        membershipType: type,
      }),
      credentials: "include",
    });
    const data = await order.json();
    const { amount, keyId, currency, notes, OrderId } = data;
    const options = {
      key: keyId,
      amount,
      currency,
      name: "TastyFood",
      description: "Order the Tasty Food",
      order_id: OrderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "6379500360",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="justify-around">
      <h1>You Are Already {membershipType} Member </h1>
      <div className="m-2 p-10 grid gap-4 border-4 bg-violet-100 border-[#c0c0c0]">
        <h3 className="font-bold text-[3rem] text-[#c0c0c0]">Silver Plan</h3>
        <ul className="list-disc">
          <li className="font-normal text-[2rem]">normal Color Cup</li>
          <li className="font-normal text-[2rem]">Unlimited Food Order</li>
        </ul>
        {membershipType == "gold" || membershipType == "silver" ? (
          ""
        ) : (
          <button
            onClick={() => handleBuyClick("silver")}
            className="m-10 font-bold text-[2.5rem] bg-[#C0C0C0] p-4"
          >
            Buy Silver
          </button>
        )}
      </div>
      <div className="m-2 p-10 grid gap-4 border-4 bg-violet-400 border-[#FFD700]">
        <h3 className="font-bold text-[3rem] text-[#FFD700]">Gold Plan</h3>
        <ul className="list-disc">
          <li className="font-normal text-[2rem]">Gold Color Cup</li>
          <li className="font-normal text-[2rem]">Unlimited Food Order</li>
        </ul>
        {membershipType == "gold" ? (
          ""
        ) : (
          <button
            onClick={() => handleBuyClick("gold")}
            className="m-10 font-bold text-[2.5rem] bg-[#FFD700] p-4"
          >
            Buy Gold
          </button>
        )}
      </div>
    </div>
  );
};

export default Subcription;
