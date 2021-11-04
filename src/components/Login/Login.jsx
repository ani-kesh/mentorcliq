import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  isValidEmail,
  isValidPassword,
} from "../../helpers/validation.helpers";
import { Routes } from "../../constants/routes";
import Input from "../Input/Input";
import Button from "../Button/Button";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import { form, h2, inputBx, password, signUp } from "./Login.module.css";

export default function Login() {
  const { signin } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [isValidEmailVal, setIsValidEmailVal] = useState(true);
  const [isValidPasswordVal, setIsValidPasswordVal] = useState(true);

  const handleLogin = () => {
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(passwordVal);

    if (isEmailValid && isPasswordValid) {
      signin(email, passwordVal).then((res) => {
        return history.push(Routes.account(res.uid).path);
      });
    }
    setIsValidEmailVal(isEmailValid);
    setIsValidPasswordVal(isPasswordValid);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPasswordVal(ev.target.value);
  };

  return (
    <>
      <LayoutPurple>
        <div className={form}>
          <h2 className={h2}>LOGIN </h2>
          <div className={inputBx}>
            <Input
              type="text"
              label="Email"
              required="required"
              onChange={handleEmail}
            />
          </div>
          <div className={`${inputBx} ${password}`}>
            <Input
              type="password"
              label="Password"
              required="required"
              onChange={handlePassword}
            />
          </div>
          <div className={inputBx}>
            <Button label="Log in" onClick={handleLogin} />
          </div>
          <p className={signUp}>
            Don't have an account{" "}
            <Link to={Routes.signup().path}>{Routes.signup().text}</Link>
          </p>
        </div>
      </LayoutPurple>
    </>
  );
}
