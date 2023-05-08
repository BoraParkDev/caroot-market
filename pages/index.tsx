import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-5">
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
        <div className="mt-8 bg-blue-400 text-white p-3 text-center rounded-xl w-3/4 mx-auto">
          Checkout
        </div>
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
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
