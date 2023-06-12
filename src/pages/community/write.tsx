import Button from "@/components/button";
import Layout from "@/layout/layout";
import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack={true}>
      <form className="px-4 pt-6">
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
          rows={8}
          placeholder="Ask this question!"
        />
        <Button classnames="w-full">작성하기</Button>
      </form>
    </Layout>
  );
};

export default Write;
