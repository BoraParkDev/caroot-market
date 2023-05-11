import type { NextPage } from "next";
import { BsArrowLeft } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-5 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <div className="flex justify-between my-3">
          <span className="text-grey-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-3">
          <span className="text-grey-500">Red Sopha</span>
          <span className="font-semibold">$81</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$100</span>
        </div>
        <button className="mt-8 bg-blue-400 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-blue-900 hover:text-gray-200 active:bg-orange-400 focus:bg-red-300">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-400 p-6 pb-20">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-10">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-10 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Stark</span>
            <span className="text-sm text-gray-500">New YorkUSA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>
            <BsArrowLeft />
          </span>
          <div className="space-x-3">
            <span>★ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">🩵</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500" />
              <button className="w-5 h-5 rounded-full bg-indigo-500" />
              <button className="w-5 h-5 rounded-full bg-teal-500" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8  rounded-lg text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8  rounded-lg text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-400 text-center text-xs text-white rounded-lg py-2 px-5">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
