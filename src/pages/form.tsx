import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "./userForm";

export default function Forms() {
  const { register, watch, handleSubmit } = useForm();
  //register의 역할 : input을 state에 등록해준다.
  //객체의 [key]:value 가 할당되는 것.
  //따라서 input의 고유 속성인 onBlur, onChange, ref, value가 객체 형태로 등록된다.
  //watch의 역할 : state의 변화를 "관찰"한다.

  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="text" placeholder="Email" required />
      <input
        {...register("password")}
        type="text"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
