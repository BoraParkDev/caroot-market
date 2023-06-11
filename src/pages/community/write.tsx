import Button from "@/components/button";
import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={4}
        placeholder="Ask this question!"
      />
      <Button classnames="w-full">Submit</Button>{" "}
    </form>
  );
};

export default Write;
