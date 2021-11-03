import React, { useState } from "react";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import SignUpFirst from "./SignUpFirst";
import SignUpSecond from "./SignUpSecond";
import SignUpThird from "./SignUpThird";
//import { signUpSection, box, container } from "./SignUp.module.css";

export default function SignUp() {
  const [page, setPage] = useState(1);

  return (
    <>
      <LayoutPurple>
        {page === 2 ? (
          <SignUpSecond  setPage={setPage}/>
        ) : page === 3 ? (
          <SignUpThird />
        ) : (
          <SignUpFirst setPage={setPage}/>
        )}
      </LayoutPurple>
    </>
  );
}
