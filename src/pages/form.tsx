import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
// import { useForm } from "./userForm";

interface FormValue {
  username: string;
  email: string;
  password: string;
}
export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormValue>({ mode: "onChange" });
  //register의 역할 : input을 state에 등록해준다.
  //객체의 [key]:value 가 할당되는 것.
  //따라서 input의 고유 속성인 onBlur, onChange, ref, value가 객체 형태로 등록된다.
  //watch의 역할 : state의 변화를 "관찰"한다.
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        {...register("username", {
          required: "Username is required.",
          minLength: {
            value: 4,
            message: "Username must be as least 4 characters.",
          },
          maxLength: {
            value: 50,
            message: "Username shorter than 50 characters.",
          },
          setValueAs: (value: string) => value.trim(),
        })}
        type="text"
        placeholder="Username"
        className={`${
          Boolean(errors.username?.message) ? "border-red-500" : ""
        }`}
      />
      <p className="text-red-500">{errors.username?.message}</p>
      <br />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            NotAllowedEmail: (value: string) => {
              const reg = new RegExp("[a-z0-9] +@[a-z]+.[a-z]{2,3}");
              return !reg.test(value) || "Please check your email type.";
            },
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
      />
      <p className="text-red-500">{errors.email?.message}</p>
      <br />
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long.",
          },
          maxLength: {
            value: 15,
            message: "Password cannot exceed 15 characters.",
          },
          validate: (value: string) => {
            // 특수문자 1개 이상 포함, 대문자 1개 이상 포함
            const str = `/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)(?=.*[A-Z]).+$/`;
            const reg = new RegExp(str);
            return (
              !reg.test(value) ||
              "Check your email type. It must contain at least one special character and at least one uppercase letter."
            );
          },
        })}
        type="password"
        placeholder="Password"
        className={`${
          Boolean(errors.password?.message) ? "border-red-500" : ""
        }`}
      />
      <p className="text-red-500">{errors.password?.message}</p>
      <br />
      <br />
      <input type="submit" value="Create Account" />
    </form>
  );
}
