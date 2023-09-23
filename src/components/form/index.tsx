import { NextPage } from "next";
import Button from "@/components/Button";

export type FormProps = {
  children?: React.ReactNode;
};

const Form: NextPage<FormProps> = ({ children }) => {
  return (
    <form className="px-4 py-10 space-y-5">
      <div>{children}</div>
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="rounded-md shadow-sm relative">
          <input
            id="name"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
          />
        </div>
      </div>
      <div>
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
          className="mt-1 shadow-sm w-full rounded-md border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <Button classnames="w-full">Upload product</Button>
    </form>
  );
};

export default Form;
