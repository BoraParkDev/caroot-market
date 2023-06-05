import { NextPage } from "next";

type RoundButtonProps = {
  children: React.ReactNode;
};

const RoundButton: NextPage<RoundButtonProps> = ({ children }) => {
  return (
    <button className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-3 text-white">
      {children}
    </button>
  );
};

export default RoundButton;
