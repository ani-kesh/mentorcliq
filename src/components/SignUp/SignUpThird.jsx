import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../services/user.services";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../constants/routes";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import Table from "../Table/Table";
import {
  mainContainer,
  tableContainer,
  buttonContainer,
  footer,
  tableRow,
  error,
} from "./SignUp.module.css";

export default function SignUpThird({ info }) {
  const { signup } = useAuth();
  const history = useHistory();
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [notSuggestedUsers, setNotSuggestedUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let countMatch = 0;
    getUsers().then((res) => {
      const users = Object.keys(res).reduce((acc, el) => {
        const { country, department } = { ...res[el] };
        const user = { ...res[el], uid: el };
        if (info["department"] === department) {
          countMatch++;
          return [user, ...acc];
        } else if (info["country"] === country) {
          let startAcc = acc.slice(0, countMatch);
          let endAcc = acc.slice(countMatch);
          countMatch++;
          return [...startAcc, user, ...endAcc];
        }
        return [...acc, user];
      }, []);

      const suggestedUsers = users.slice(0, 5);
      setSuggestedUsers(suggestedUsers);

      const notSuggestedUsers = users.slice(5);
      setNotSuggestedUsers(notSuggestedUsers);
    });
  }, [info]);

  const Register = async () => {
    if (suggestedUsers.length !== 5) {
      setErrorMessage("You can have only 5 users.");
    } else {
      setErrorMessage("");
      const suggestedUserIds = suggestedUsers.map(({ uid }) => uid);
      const program = {
        ...info,
        userIds: [...suggestedUserIds],
      };

      let userVal = await signup(program);
      return history.push(Routes.account(userVal.uid).path);
    }
  };

  const handleMinus = (id) => (ev) => {
    const newSuggestedUsers = suggestedUsers.filter(({ uid }) => uid !== id);
    const deletedFromSuggested = suggestedUsers.filter(({ uid }) => uid === id);

    setSuggestedUsers([...newSuggestedUsers]);
    setNotSuggestedUsers([...notSuggestedUsers, ...deletedFromSuggested]);
  };

  const handlePlus = (id) => (ev) => {
    const notSuggested = notSuggestedUsers.filter(({ uid }) => uid !== id);
    const newSuggested = notSuggestedUsers.filter(({ uid }) => uid === id);

    setSuggestedUsers([...suggestedUsers, ...newSuggested]);
    setNotSuggestedUsers([...notSuggested]);
  };

  if (suggestedUsers.length + notSuggestedUsers.length === 0)
    return <Loading />;

  return (
    <>
      <div className={mainContainer}>
        <div className={tableContainer}>
          {errorMessage !== "" && <span className={error}>{errorMessage}</span>}
          <Table
            rowInfo={suggestedUsers}
            tableTitle={"Suggested Users"}
            handleMinus={handleMinus}
            type={"-"}
          />
          <Table
            rowInfo={notSuggestedUsers}
            tableTitle={"Other Users"}
            handlePlus={handlePlus}
            type={"+"}
          />

          <div className={`${tableRow} ${footer}`}>
            <div className={buttonContainer}>
              <Button label="Register" onClick={Register} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
