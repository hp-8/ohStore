import React from "react";
import { Link } from "react-router-dom";
import { readymadeCardProducts } from "../Constants/constants";
import Card from "../Components/Card";
import Countdown from "../Components/Countdown";
// import Alert from "../Helper/Alert";

function Hero({ alertShow }) {
  return (
    <div>
      <div className="w-full pt-20 md:border-b-2 md:pb-20 pb-10 bg-gray-100 dark:bg-gray-900">
        <div className="w-full h-full flex justify-center items-center">
          <div className="md:w-[90%] w-[95%] md:px-3 px-0">
            
            <div className="h-1/3 text-center flex flex-col dark:text-teal-50">
              <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-teal-50">Products</h1>
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-green-800 to-yellow-400">
                Offer Closes in
              </span>
              <div className="mt-2 text-3xl md:text-4xl font-medium font-poppins border-b-2 dark:border-gray-800 pb-5">
                <Countdown />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="grid md:grid-cols-3 md:gap-x-24 sm:gap-x-16 md:gap-y-10 xs:grid-cols-2 grid-cols-1">
                {readymadeCardProducts.map((product, key) => (
                  <Card key={key} product={product} alertShow={alertShow} />
                ))}
              </div>
            </div>

            <Link to={"/products"}>
              <div className="text-center">
                <button
                  type="button"
                  className="md:mt-10 mt-4 px-2 py-1.5 md:px-10 md:text-l text-md font-semibold font-sen uppercase hover:text-white  border-orange-700 border-2 md:border-4 hover:bg-orange-700 bg-transparent text-orange-700 focus:ring-4 focus:ring-orange-300 md:py-2.5 mb-2 dark:bg-transparent dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                >
                  View All Products
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
