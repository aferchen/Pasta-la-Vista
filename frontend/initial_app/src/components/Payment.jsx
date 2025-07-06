import React, { useState, useEffect } from "react";

const Payment = ({ cart, setStep, setSummaryData, user }) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + +item.price * item.count,
    0
  );
  
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  useEffect(() => {
    if (user) {
      setPaymentInfo((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || ""
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentInfo);
    for (let key in paymentInfo) {
      if (paymentInfo[key].trim() === "") {
        alert(`Please fill out ${key}`);
        return;
      }
    }

    alert("Thank you for your purchase");
    setSummaryData({ ...paymentInfo, cart});
    setStep("summary");
  };

  const Divider = () => (
    <div className="flex items-center justify-center my-8">
      <hr className="w-1/4 border-t border-[#b48d5f]" />
      <span className="px-4 text-2xl" style={{ color: "#740005" }}>
        ☽✦☾
      </span>
      <hr className="w-1/4 border-t border-[#b48d5f]" />
    </div>
  );

  return (
    <div
      className="min-h-screen flex p-[4rem]"
      style={{
        backgroundColor: "#740005",
        fontFamily: "Courier New",
      }}
    >
      <div
        className="w-1/2 mx-auto my-10 space-y-6 text-center flex flex-col justify-center items-center p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "#eadac0" }}
      >
        <h2 className="text-4xl font-extrabold text-green-700 p-4">
          Payment Details
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-green-700">
            Your Order: <br></br>
          </h3>
          <br></br>

          <div>
            {cart.map((item) => (
              <div key={item.cart_id}>
                <ul>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name} ~ ${item.price} ~ {item.count}
                  </h3>
                </ul>
              </div>
            ))}
          </div>

          <Divider />

          <div>
            <h1 className="text-4xl font-extrabold text-green-700 p-4">
              Total: ${(totalPrice + totalPrice * 0.07).toFixed(2)}
            </h1>
          </div>
        </div>
        <Divider />

        {/* Payment Form Inputs */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-green-700">
            Please enter the following information:
          </h2>
          <div className="grid place-items-center">
            <div className="w-1/2">
              <label className="mb-4">Name: </label>
              {/* Input block for card number */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={paymentInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label className="mb-4">Email: </label>
              {/* Input block for card number */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={paymentInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label className="mb-4">Card Number: </label>
              {/* Input block for card number */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardNumber"
                name="cardNumber"
                type="text"
                placeholder="Card Number"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label>Expiry Date: </label>
              {/* Input block for expiry date */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiryDate"
                name="expiryDate"
                type="text"
                placeholder="Expiry Date"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label>CVC: </label>
              {/* Input block for cvc */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvc"
                name="cvc"
                type="text"
                placeholder="CVC"
                onChange={handleChange}
              />
            </div>
          </div>
          <Divider />
          {/* Submit Payment Button */}
          <div className="p-2">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
