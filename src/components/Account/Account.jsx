import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { getUser } from "../../services/user.services";
import { Routes } from "./../../constants/routes";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import { href, text } from "./Account.module.css";

export default function Account() {
  const history = useHistory();
  const [fullName, setFullName] = useState("");

  const path = history.location.pathname;
  const userId = path.replace("/account/", "");

  useEffect(() => {
    getUser(userId).then((res) => {
      const { firstName, lastName } = res;
      setFullName(firstName + " " + lastName);
    });
  }, [userId]);

  return (
    <LayoutPurple>
      <div className={text}>
        <div>{`Hello dear ${fullName}!`}</div>
        <div>{`To change the users you select, go to the link below.`}</div>
        <div>
          <Link to={Routes.program(userId).path} className={href}>
            {" "}
            {Routes.program(userId).text}
          </Link>
        </div>
      </div>
    </LayoutPurple>
  );
}
