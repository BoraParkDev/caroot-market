import type { NextPage } from "next";
import RoundButton from "@/components/button/RoundButton";
import Heart from "@/assets/common/ico_heart.svg";
import Bubble from "@/assets/common/ico_bubble.svg";
import Plus from "@/assets/common/ico_plus.svg";
import Layout from "@/layout/layout";

const Home: NextPage = () => {
  const arr = new Array(10).fill(1);
  return (
    <Layout title="🥕" hasTabs={true}>
      <div className="flex flex-col space-y-5 py-10">
        {arr.map((_, i) => (
          <div
            key={i}
            className="flex px-4 border-b pb-4 cursor-pointer justify-between"
          >
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-400 rounded-md" />
              <div className="pt-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  New iPhone 14
                </h3>
                <span className="text-xs text-gray-500">Black</span>
                <span className="font-medium mt-1 text-gray-900">$95</span>
              </div>
            </div>
            <div className="flex space-x-1.5 items-end justify-end">
              <div className="flex space-x-0.5 items-center text-sm text-gray-600">
                <Heart className="w-4 h-4" />
                <span>1</span>
              </div>
              <div className="flex space-x-0.5 items-center text-sm text-gray-600">
                <Bubble className="w-4 h-4" />
                <span>1</span>
              </div>
            </div>
          </div>
        ))}
        <RoundButton>
          <Plus className="w-6 h-6" />
        </RoundButton>
      </div>
    </Layout>
  );
};

export default Home;
