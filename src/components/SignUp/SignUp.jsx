import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "./../../constants/routes";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import SignUpFirst from "./SignUpFirst";
import SignUpSecond from "./SignUpSecond";
import SignUpThird from "./SignUpThird";
import { haveAccount, href } from "./SignUp.module.css";

export default function SignUp() {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  return (
    <>
      <div className={haveAccount}>
        Already have an account?
        <Link to={Routes.login().path} className={href}>
          {" "}
          {Routes.login().text}
        </Link>
      </div>
      <LayoutPurple>
        {page === 2 ? (
          <SignUpSecond setPage={setPage} info={info} setInfo={setInfo} />
        ) : page === 3 ? (
          <SignUpThird info={info} />
        ) : (
          <SignUpFirst setPage={setPage} setInfo={setInfo} />
        )}
      </LayoutPurple>
    </>
  );
}
