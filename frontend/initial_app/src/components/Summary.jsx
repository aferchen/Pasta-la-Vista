import React, { useState, useEffect } from "react";

const Summary = ({cart, setCart, setStep, name, email, cardNumber, expiryDate, cvc, user,}) => {
  const totalPricePT = cart.reduce(
    (sum, item) => sum + +item.price * item.count,
    0
  );
  const totalPriceAT = (totalPricePT + totalPricePT * 0.07).toFixed(2)
  const pointsEarned = Math.floor(totalPriceAT);
  const [updatedPoints, setUpdatedPoints] = useState(null);

  useEffect(() => {
    const updatePoints = async () => {
      try {
        const newPoints = user.points + pointsEarned;
        console.log("Updating user points:", user.points, "+", pointsEarned);
        await fetch(`http://localhost:8080/users/${user.id}/points`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ points: newPoints }),
        });
        setUpdatedPoints(newPoints);
      } catch (error) {
        console.error("Failed to update points:", error);
      }
    };

    if (user) {
      updatePoints();
    }
  }, [user, pointsEarned]);

  const transactionID = Math.round(100000 + Math.random() * 999999);

  const handleToBrowse = () => {
    setCart([]);
    setStep("browse");
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
        {/* Show courses, total price */}
        <div>
          <h2 className="text-3xl font-extrabold text-green-700 p-4">
            User Summary
          </h2>
          {/* User Details */}
          <div className="text-lg font-semibold text-gray-700">
            <p>
              {" "}
              <strong>Name:</strong> {name}{" "}
            </p>
            <p>
              {" "}
              <strong>Email:</strong> {email}
            </p>
            <p>
              {" "}
              <strong>Card Number:</strong> {cardNumber}
            </p>
            <p>
              {" "}
              <strong>Expiry Date:</strong> {expiryDate}{" "}
            </p>
            <p>
              {" "}
              <strong>CVC:</strong> {cvc}{" "}
            </p>
          </div>
          <Divider />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-green-700 p-4">
            Order Summary
          </h2>
          {cart.map((item) => (
            <div key={item.cart_id}>
              <ul>
                <p className="text-lg font-semibold text-gray-700">
                  Item: {item.name} ~ Price: ${item.price} ~ Count: {item.count}
                </p>
              </ul>
            </div>
          ))}
          <Divider />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-green-700 p-4">
            Total: ${totalPriceAT}
          </h1>
          <Divider />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-green-700 p-4">
            Payment Confirmation
          </h2>
          <p className="text-lg font-semibold text-gray-700">
            {" "}
            Payment successful!
          </p>
          <p className="text-lg font-semibold text-gray-700">
            Transaction ID: <strong>{transactionID}</strong>
          </p>
        </div>
          {user && (
            <p className="text-lg font-semibold text-gray-700">
              You earned <strong>{pointsEarned}</strong> points!
              <br />
              You now have <strong>{updatedPoints ?? user.points}</strong> total
              points.
            </p>
          )}

        <Divider />

        <button
          className="bg-green-500 text-white py-2 px-6 rounded"
          onClick={handleToBrowse}
        >
          Back to Browse
        </button>
      </div>
    </div>
  );
};

export default Summary;
