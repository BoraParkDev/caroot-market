import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useForm } from "./userForm";

export default function Forms() {
  const form = useForm();

  return (
    <form onSubmit={form.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={form.handleInput}
        // required
        // minLength={5}
      />
      {form.formErrors.username && (
        <p style={{ color: "red" }}>{form.formErrors.username}</p>
      )}
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={form.handleInput}
        // required
      />
      {form.formErrors.email && (
        <p style={{ color: "red" }}>{form.formErrors.email}</p>
      )}
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={form.handleInput}
        // required
      />
      {form.formErrors.password && (
        <p style={{ color: "red" }}>{form.formErrors.password}</p>
      )}
      <input type="submit" value="Create Account" />
    </form>
  );
}
