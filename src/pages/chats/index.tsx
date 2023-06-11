import Layout from "@/layout/layout";
import { NextPage } from "next";

const Chats: NextPage = () => {
  const users = new Array(7).fill(1);
  return (
    <Layout title="Chats" hasTabs={true}>
      <div className="py-10 divide-y-[1px]">
        {users.map((user, i) => (
          <div
            key={i}
            className="flex px-4 cursor-pointer first:py-0 first:pb-3 py-3 items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
