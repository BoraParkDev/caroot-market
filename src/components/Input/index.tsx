import { NextPage } from "next";

type InputProps = {
  id?: string;
  [key: string]: any;
};

const Input = ({ id, ...rest }: InputProps) => {
  return (
    <input
      id={id}
      {...rest}
      className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
    />
  );
};

export default Input;
