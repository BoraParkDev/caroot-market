import { ChangeEvent, FormEvent, useCallback, useState } from "react";

interface IUser {
  username: string;
  email: string;
  password: string;
}

export const useForm = () => {
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const resetUser = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  const resetFormErrors = () => {
    setFormErrors({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    resetFormErrors();
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  const checkValidation = useCallback((user: IUser) => {
    return (
      usernameValidation(user.username) &&
      emailValidation(user.email) &&
      passwordValidation(user.password)
    );
  }, []);

  const usernameValidation = (username: string) => {
    if (!username) {
      setFormErrors((prev) => ({ ...prev, username: "Username is required" }));
      return false;
    }

    if (username.length < 5) {
      setFormErrors((prev) => ({
        ...prev,
        username: "The user's name must be at least 5 characters.",
      }));
      return false;
    }

    return true;
  };

  const emailValidation = (email: string) => {
    if (!email) {
      setFormErrors((prev) => ({ ...prev, email: "Email is required" }));
      return false;
    }

    const regex = new RegExp(
      " /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;"
    );

    if (!regex.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Invalid Email. Check Your Email Type.",
      }));
      return false;
    }
    return true;
  };

  const passwordValidation = (password: string) => {
    if (!password) {
      setFormErrors((prev) => ({ ...prev, password: "Password is required" }));
      return false;
    }

    //비밀번호 8자리 이상, 대문자 포함, 특수문자 1개 포함
    if (password.length < 8) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Password's length must be as least 8 characters",
      }));
      return false;
    } else {
      const regex = new RegExp(
        `^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$`
      );
      !regex.test(password) &&
        setFormErrors((prev) => ({
          ...prev,
          password:
            "Invalid Password. Check Your Password Type.\nMust contain at least one uppercase letter and at least one special character.",
        }));
      return false;
    }
    return true;
  };

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("submit", user);
      checkValidation(user) ? console.log("성공") : resetUser();
    },
    [checkValidation, user]
  );

  return {
    user,
    handleInput,
    handleSubmit,
    formErrors,
  };
};
