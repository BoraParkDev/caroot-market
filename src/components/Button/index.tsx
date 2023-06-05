import { NextPage } from "next";

type Props = {
  children: React.ReactNode;
};

const Button: NextPage<Props> = ({ children }) => {
  return (
    <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border boreder-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-one">
      {children}
    </button>
  );
};

export default Button;
