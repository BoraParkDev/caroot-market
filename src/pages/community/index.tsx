import { NextPage } from "next";
import RoundButton from "@/components/button/RoundButton";

import Checkbox from "@/assets/pages/community/ico_checkbox.svg";
import Bubble from "@/assets/common/ico_bubble.svg";
import Write from "@/assets/pages/community/ico_write.svg";

const Community: NextPage = () => {
  const questions = new Array(6).fill(null).map((_, i) => i + 1);

  return (
    <div className="py-16 px-4 space-y-8">
      {questions.map((_, i) => (
        <div key={i} className="flex flex-col items-start cursor-pointer">
          <span className="flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            동네질문
          </span>
          <div className="mt-2 text-gray-700">
            <span className="text-orange-400 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="mt-5 flex items-center justify-between text-gray-500 font-medium text-xs w-full">
            <span>rachel</span>
            <span>6시간 전</span>
          </div>
          <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.2px] w-full">
            <span className="flex space-x-2 items-center text-sm">
              <Checkbox
                className="w-4 h-4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <span>궁금해요 1</span>
            </span>
            <span className="flex space-x-2 items-center text-sm">
              <Bubble
                className="w-4 h-4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <span>답변 1</span>
            </span>
          </div>
        </div>
      ))}
      <RoundButton>
        <Write
          className="w-6 h-6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </RoundButton>
    </div>
  );
};

export default Community;
