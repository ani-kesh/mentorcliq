import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../constants/routes";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { header, logo, logOut } from "./Nav.module.css";

export default function Nav() {
  const { signout, user } = useAuth();
  const history = useHistory();

  const handleLogOut = () => {
    signout().then(() => history.push(Routes.login().path));
  };

  return (
    <header className={header}>
      <div className={logo}>
        <Logo />
      </div>
      {user && (
        <div className={logOut}>
          <Button label="Log Out" onClick={handleLogOut} />
        </div>
      )}
    </header>
  );
}
