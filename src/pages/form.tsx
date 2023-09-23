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
  } = useForm<FormValue>();
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
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <br />
      <input
        {...(register("email"), { required: true })}
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <br />
      <br />
      <input type="submit" value="Create Account" />
    </form>
  );
}
