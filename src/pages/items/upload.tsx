import type { NextPage } from "next";
import File from "@/assets/pages/items/ico_file.svg";
import Button from "@/components/button";
import Form from "@/components/form";

const PhotoBox = () => {
  return (
    <div>
      <div>
        <label className="w-full cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
          <File
            className="h-12 w-12"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

const Upload: NextPage = () => {
  return (
    <Form>
      <PhotoBox />
    </Form>
  );
};

export default Upload;
