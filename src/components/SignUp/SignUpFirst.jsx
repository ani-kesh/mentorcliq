import React, { useState } from "react";
import { Genders } from "../../constants/gender";
import {
  isValidEmail,
  isValidPassword,
  isEmptyString,
} from "../../helpers/validation.helpers";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { form, h2, inputBx, password } from "./SignUp.module.css";

export default function SignUpFirst({ setPage, setInfo }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(Genders[1].name);
  const [email, setEmail] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

  const handleNext = () => {
    const isValidFirstNm = isEmptyString(firstName);
    const isValidLastNm = isEmptyString(lastName);
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(passwordVal);

    if (isValidFirstNm && isValidLastNm && isEmailValid && isPasswordValid) {
      setInfo({
        firstName,
        lastName,
        gender,
        email,
        passwordVal,
      });
      setPage(2);
    }
  };

  const handleFirstName = (ev) => {
    setFirstName(ev.target.value);
  };

  const handleLastName = (ev) => {
    setLastName(ev.target.value);
  };

  const handleUsername = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPasswordVal(ev.target.value);
  };

  return (
    <div className={form}>
      <h2 className={h2}>Registration </h2>
      <div className={inputBx}>
        <Input
          type="text"
          label="First Name"
          required="required"
          onChange={handleFirstName}
        />
      </div>
      <div className={inputBx}>
        <Input
          type="text"
          label="Last Name"
          required="required"
          onChange={handleLastName}
        />
      </div>
      <div className={inputBx}>
        <Dropdown
          options={Genders}
          selected={Genders[1].name}
          onSelect={setGender}
        />
      </div>
      <div className={`${inputBx}`}>
        <Input type="text" label="Gender" />
      </div>
      <div className={inputBx}>
        <Input
          type="text"
          label="Username"
          required="required"
          onChange={handleUsername}
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
        <Button label="Next >>" onClick={handleNext} />
      </div>
    </div>
  );
}
