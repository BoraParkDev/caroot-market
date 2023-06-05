import { NextPage } from "next";

type InputProps = {
  id?: string;
  type?: string;
  required?: boolean;
};

const Input: NextPage<InputProps> = ({ ...props }) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
      required={props.required}
    />
  );
};

export default Input;
