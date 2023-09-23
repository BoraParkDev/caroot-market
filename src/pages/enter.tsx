import { useState } from "react";
import classNames from "classnames";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Twitter from "@/assets/pages/enter/ico_twitter.svg";
import Github from "@/assets/pages/enter/ico_github.svg";

const Enter = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");

  return (
    <div>
      <div className="mt-16 px-4">
        <h3 className="text-3xl font-bold text-center">Enter to Carrot</h3>
        <div className="mt-8">
          <div className="flex flex-col items-center">
            <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
            <div className="grid border-b w-full mt-8 grid-cols-2">
              <button
                className={classNames("pb-4 font-medium text-gray-500", {
                  "border-b-2 text-orange-400 border-orange-500":
                    method === "email",
                })}
                onClick={onEmailClick}
              >
                Email
              </button>
              <button
                className={classNames("pb-4 font-medium text-gray-500", {
                  "border-b-2 text-orange-400 border-orange-500":
                    method === "phone",
                })}
                onClick={onPhoneClick}
              >
                Phone
              </button>
            </div>
          </div>
          <form className="flex flex-col mt-8">
            <label
              htmlFor="input"
              className="text-sm font-medium text-gray-700"
            >
              {method === "email" ? "Email address" : ""}
              {method === "phone" ? "Phone number" : ""}
            </label>
            <div className="mt-1">
              {method === "email" ? <Input id="input" type="email" /> : ""}
              {method === "phone" ? (
                <div className="flex rounded-md shadow-sm">
                  <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
                    +82
                  </span>
                  <Input id="input" type="number" required />
                </div>
              ) : null}
            </div>
            <Button>
              {method === "email" ? "Get login link" : ""}
              {method === "phone" ? "Get one-time password" : ""}
            </Button>
          </form>
          <div className="mt-8">
            <div className="relative">
              <div className="absolute w-full border-t border-gray-300" />
              <div className="relative -top-3 text-center">
                <span className="bg-white px-2 text-sm text-gray-500">
                  Or enter with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-3">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
