import React from "react";

const example = () => {
  return (
    <div className="flex flex-col space-y-2 p-5 border-color-yellow w-96">
      <input
        type="file"
        className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-color-purple-400 file:transition-colors file:border-0 file:rounded-md file:px-5 file:bg-purple-300"
      />
    </div>
  );
};

export default example;
