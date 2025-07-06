import React, { useState } from "react";
import { Menu_Items } from "../data/Menu_Items";

const Browse = ({ cart, setCart, setStep }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");

  const filteredMenu = Menu_Items.filter(
    (item) => selectedCourse === "all" || item.course === selectedCourse
  ).filter((item) => item.name.includes(searchInput));

  return (
    <div className="bg-amber-100">
      <h1 className="text-4xl font-extrabold text-black p-6 text-center justify-center items-center">
        Browse menu
      </h1>
      <div className="flex justify-evenly px-4 py-4">
        <button
          onClick={() => setStep("cart")}
          className="rounded-full bg-amber-500 gap-6 p-6 hover:bg-green-700 hover:text-white transition-all"
        >
          Go to Cart
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 p-5">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchInput}
          onChange={(i) => setSearchInput(i.target.value)}
          className="px-4 py-2 w-1/2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-black text-white"
        />

        <div className="rounded-full bg-amber-500 gap-6 p-3 hover:bg-pink-800 hover:text-white">
          <button onClick={() => setSelectedCourse("all")}>All</button>
        </div>
        <div className="rounded-full bg-amber-500 gap-6 p-3 hover:bg-pink-800 hover:text-white">
          <button onClick={() => setSelectedCourse("Appetizer")}>
            Appetizer
          </button>
        </div>
        <div className="rounded-full bg-amber-500 gap-6 p-3 hover:bg-pink-800 hover:text-white">
          <button onClick={() => setSelectedCourse("Main")}>Main</button>
        </div>
        <div className="rounded-full bg-amber-500 gap-6 p-3 hover:bg-pink-800 hover:text-white">
          <button onClick={() => setSelectedCourse("Dessert")}>Dessert</button>
        </div>
      </div>

      <div className="bg-lime-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-5">
          {filteredMenu.map((item) => (
            <div
              key={item.item_id}
              className="bg-white rounded-lg shadow-md p-4 text-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-48 w-48 object-cover rounded"
              />
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h3>
                <h3 className="text-green-700 font-extrabold text-lg">
                  ${item.price}
                </h3>
              </div>
              <div className="text-black mt-2">Calories: {item.calories}</div>
              <div className="text-black mt-2">
                {item.description?.charAt(0).toUpperCase() +
                  item.description?.slice(1)}
              </div>
              <div className="mt-4">
                <button
                  className="bg-lime-800 hover:bg-lime-500 text-white px-4 py-2 rounded-full"
                  onClick={() => {
                    setCart([
                      ...cart,
                      {
                        cart_id: cart.length + 1,
                        name: item.name,
                        price: item.price,
                        count: 1,
                      },
                    ]);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
