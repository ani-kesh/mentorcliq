import React, { useState } from "react";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import SignUpFirst from "./SignUpFirst";
import SignUpSecond from "./SignUpSecond";
import SignUpThird from "./SignUpThird";


export default function SignUp() {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  return (
      <LayoutPurple>
        {page === 2 ? (
          <SignUpSecond
            setPage={setPage}
            info={info}
            setInfo={setInfo}
          />
        ) : page === 3 ? (
          <SignUpThird info={info}/>
        ) : (
          <SignUpFirst setPage={setPage} setInfo={setInfo}/>
        )}
      </LayoutPurple>
  );
}
