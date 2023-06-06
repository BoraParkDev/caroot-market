import type { NextPage } from "next";
import File from "@/assets/pages/items/ico_file.svg";
import Button from "@/components/Button";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <div>
          <label className="w-full cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
            <File
              className="h-12 w-12"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="my-5">
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500">$</span>
          </div>
          <input
            id="price"
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <Button classnames="w-full">Upload product</Button>
    </div>
  );
};

export default Upload;
