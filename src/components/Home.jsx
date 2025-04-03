import React from "react";
import hero_img from "../assets/hero_image.jpg";
const Home = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 items-center pt-5">
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <h1 className="text-6xl font-bold text-blue-700 mb-4">
              Monsoon{" "}
              <span className="text-zinc-600 animate-pulse">Special</span> Offer
            </h1>
            <p className="text-gray-600 mb-4">
              Shop worry-free this monsoon! Enjoy{" "}
              <span className="font-semibold">waterproof packaging</span>,
              <span className="font-semibold"> guaranteed delivery</span>, and{" "}
              <span className="font-semibold">easy returns</span>.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex flex-wrap justify-between gap-2 items-center">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500">
                    <i class="fa-solid fa-check"></i>
                  </span>
                </span>
                <strong>Waterproof Packaging</strong>
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm flex flex-wrap justify-between gap-2 items-center">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="relative inline-flex rounded-full bg-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>
                </span>
                <strong>Guaranteed Delivery</strong>
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex flex-wrap justify-between gap-2 items-center">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500">
                    <i class="fa-solid fa-check"></i>
                  </span>
                </span>
                <strong>Easy Returns</strong>
              </span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition flex flex-wrap justify-between items-center gap-3 cursor-pointer hover:translate-x-4 hover:ease-in-out hover:duration-300">
              Shop Now
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              100% rainproof guarantee for your jewelry.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src={hero_img}
              alt="hero-image"
              className="w-[400px] rounded-lg bg-blue-100 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg px-3 py-2 flex items-center gap-2 animate-bounce">
              <div className="text-yellow-400 flex">
                {/* Star Ratings */}
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-sm text-gray-700 font-semibold">
                4.9/5 (1.2K Reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
