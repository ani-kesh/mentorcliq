import { Link } from "react-router-dom";
import { Routes } from "../../constants/routes";
import { error } from "./Error.module.css";

export default function Error() {
  return (
    <div className={error}>
      <h2>ERROR!!!!!!!</h2>
      <h4>
        Go to <Link to={Routes.login().path}>{Routes.login().text}</Link> page
      </h4>
    </div>
  );
}
