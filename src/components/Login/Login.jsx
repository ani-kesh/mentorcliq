import Input from "../Input/Input";
import Button from "../Button/Button";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import { form, h2, inputBx, password, signUp } from "./Login.module.css";

export default function Login() {
  return (
    <>
      <LayoutPurple>
        <div className={form}>
          <h2 className={h2}>LOGIN </h2>
          <div className={inputBx}>
            <Input type="text" label="Login" required="required" />
          </div>
          <div className={`${inputBx} ${password}`}>
            <Input type="password" label="Password" required="required" />
          </div>
          <div className={inputBx}>
            <Button label="Log in" />
          </div>
          <p className={signUp}>
            Don't have an account <a href="#">Sign up</a>
          </p>
        </div>
      </LayoutPurple>
    </>
  );
}
