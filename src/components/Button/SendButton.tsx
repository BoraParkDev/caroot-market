import { NextPage } from "next";

export type SubmitButtonProps = {
  children: React.ReactNode;
};

const SendButton: NextPage<SubmitButtonProps> = ({ children }) => {
  return (
    <div className="flex relative items-center">
      <input
        type="text"
        className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
      />
      <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
        <button className="flex items-center bg-orange-400 rounded-full px-3 hover:bg-orange-500 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-sm text-white">
          {children}
        </button>
      </div>
    </div>
  );
};

export default SendButton;
