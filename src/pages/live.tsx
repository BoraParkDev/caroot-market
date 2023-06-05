import { NextPage } from "next";
import RoundButton from "@/components/Button/RoundButton";
import Plus from "@/assets/common/ico_plus.svg";

const Live: NextPage = () => {
  const arr = new Array(5).fill(1);
  return (
    <div className="py-10 px-4 divide-y-2 space-y-4">
      {arr.map((_, i) => (
        <div className="pt-4" key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="text-gray-700 text-lg mt-2">Video Title</h3>
        </div>
      ))}
      <RoundButton classname="border-transparent">
        <Plus className="w-6 h-6" />
      </RoundButton>
    </div>
  );
};

export default Live;
