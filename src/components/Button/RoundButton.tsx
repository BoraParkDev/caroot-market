import classNames from "classnames";
import { NextPage } from "next";

type RoundButtonProps = {
  children: React.ReactNode;
  classname?: string;
};

const RoundButton: NextPage<RoundButtonProps> = ({ children, classname }) => {
  return (
    <button
      className={classNames(
        "fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-3 text-white",
        `${classname}`
      )}
    >
      {children}
    </button>
  );
};

export default RoundButton;
