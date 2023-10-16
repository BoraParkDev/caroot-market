import { useCallback, useState } from "react";
import classNames from "classnames";
import Input from "@/components/Input";
import Button from "@/components/button";
import Twitter from "@/assets/pages/enter/ico_twitter.svg";
import Github from "@/assets/pages/enter/ico_github.svg";
import { useForm } from "react-hook-form";

interface IEnterFormValue {
  email?: string;
  phone?: string;
}

const Enter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEnterFormValue>();

  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };

  const onValid = useCallback((data: IEnterFormValue) => {
    console.log(data, "data");
  }, []);

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
          <form className="flex flex-col mt-8" onSubmit={handleSubmit(onValid)}>
            {method === "email" ? (
              <Input
                id="input"
                label="Email Address"
                kind="text"
                type="email"
                register={register("email", {
                  required: "이메일은 필수입니다.",
                })}
              />
            ) : null}
            {method === "phone" ? (
              <Input
                id="input"
                label="Phone Number"
                kind="phone"
                type="number"
                register={register("phone", {
                  required: "핸드폰 번호는 필수입니다.",
                  minLength: {
                    value: 10,
                    message: "핸드폰 번호는 최소 10자 입니다.",
                  },
                  maxLength: {
                    value: 13,
                    message: "핸드폰 번호는 최대 13자 입니다.",
                  },
                })}
              />
            ) : null}
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
