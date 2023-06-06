import classNames from "classnames";
import { NextPage } from "next";

type Props = {
  children: React.ReactNode;
  classnames?: string;
};

const Button: NextPage<Props> = ({ children, classnames }) => {
  return (
    <button
      className={classNames(
        "mt-5 bg-orange-400 hover:bg-orange-400 text-white py-2 px-4 border boreder-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-one",
        `${classnames}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
