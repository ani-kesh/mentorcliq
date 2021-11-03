import {
  header,
  logo,
} from "./Nav.module.css";
import Logo from "../Logo/Logo";

export default function Nav() {

  return (
    <header className={header}>
      <div className={logo}>
        <Logo/>
      </div>
    </header>
  );
}
