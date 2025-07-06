import React from 'react';

const Cart = ({ cart, setCart, setStep }) => {
  const totalPrice = cart.reduce((sum, item) => sum + +item.price *item.count, 0);

  return (
    <div className="bg-stone-300">
      <h2 className="text-4xl font-extrabold text-black p-6 text-center justify-center items-center">Your Cart</h2>
      <div className="flex justify-evenly px-4 py-4">
      <button className="space-evenly px-4 py-1 rounded-full bg-amber-500 gap-3 p-3 hover:bg-green-700 hover:text-white" onClick={() => setStep("payment")}>Proceed to Payment</button>
      <button className="space-evenly px-4 py-1 rounded-full bg-amber-500 gap-3 p-3 hover:bg-green-700 hover:text-white" onClick={() => setStep("browse")}>Continue Shopping</button>
      </div>
          <div className="bg-red-300">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
              {cart.map((item) => 
                <div
                key={item.cart_id}
                  className="bg-white rounded-lg shadow-md p-4 text-2xl items-center justify-center"
                >
                  <div className="flex justify-between mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h3>
                    <h3 className="text-green-700 font-extrabold text-lg">
                      ${item.price}
                    </h3>
                  </div>
                  <div>
                  <h3 className="text-lg font-semibold text-black-700">
                      Blank
                    </h3>
                  </div>
                  <div>
                  <h3 className="text-lg font-semibold text-black-700">
                      Count: {item.count}
                    </h3>
                  </div>
                  <div className="flex justify-between mt-4">
                  <p className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-green-700 gap-3 p-3 hover:bg-grey-700 hover:text-white">
                  <button onClick={() => setCart(cart.map(i => i.cart_id === item.cart_id ? { ...i, count: i.count + 1 } : i))}>
                    Add
                  </button></p>
                  <p className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-red-700 gap-3 p-3 hover:bg-grey-700 hover:text-white">
                  <button onClick={() => setCart(cart.map(i => i.cart_id === item.cart_id ? { ...i, count: i.count - 1 }  : i).filter(i => i.count > 0)
                  )}>
                    Delete
                  </button></p>
                  </div>
                  
                
                </div>
              )}
            </div>
            <div>
            <h1 className="text-4xl font-extrabold text-black p-6 text-center justify-center items-center">Total: ${(totalPrice + totalPrice *0.07).toFixed(2)}</h1>
            </div>
          </div>

    </div>
  );
};

export default Cart;
