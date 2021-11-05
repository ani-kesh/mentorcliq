import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getOrderedUsersByUserId } from "../../services/program.services";
import { addProgram } from "../../services/program.services";
import LayoutPurple from "../LayoutPurple/LayoutPurple";
import Table from "../Table/Table";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import {
  mainContainer,
  tableContainer,
  buttonContainer,
  footer,
  tableRow,
  error
} from "./Program.module.css";

export default function Program() {
  const history = useHistory();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [notSelectedUsers, setNotSelectedUsers] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [program, setProgram] = useState("");

  const path = history.location.pathname;
  const userId = path.replace("/program/", "");

  useEffect(() => {
    getOrderedUsersByUserId(userId).then(
      ({ selectedUsers, notSelectedUsers, programId }) => {
        setSelectedUsers(selectedUsers);
        setNotSelectedUsers(notSelectedUsers);
        setProgram(programId);
        setIsLoad(true);
      }
    );
  }, [userId]);

  const Save = async () => {
    if (selectedUsers.length !== 5) {
      setErrorMessage("You can have only 5 users.");
    } else {
      setErrorMessage("");
      const selectedUserIds = selectedUsers.map(({ uid }) => uid);

      const programInfo = {
        uid: userId,
        userIds: [...selectedUserIds],
        id: program,
      };

      await addProgram(programInfo);
    }
  };

  const handleMinus = (id) => (ev) => {
    const newSelectedUsers = selectedUsers.filter(({ uid }) => uid !== id);
    const deletedFromSelected = selectedUsers.filter(({ uid }) => uid === id);

    setSelectedUsers([...newSelectedUsers]);
    setNotSelectedUsers([...notSelectedUsers, ...deletedFromSelected]);
  };

  const handlePlus = (id) => (ev) => {
    const notSelected = notSelectedUsers.filter(({ uid }) => uid !== id);
    const newSelected = notSelectedUsers.filter(({ uid }) => uid === id);

    setSelectedUsers([...selectedUsers, ...newSelected]);
    setNotSelectedUsers([...notSelected]);
  };

  if (!isLoad)
    return (
      <LayoutPurple>
        <Loading />
      </LayoutPurple>
    );

  return (
    <LayoutPurple>
      <>
        {isLoad && notSelectedUsers.length + selectedUsers.length > 0 ? (
          <div className={mainContainer}>
            <div className={tableContainer}>
            {errorMessage !== "" && <span className={error}>{errorMessage}</span>}
              <Table
                rowInfo={selectedUsers}
                tableTitle={"Selected Users"}
                handleMinus={handleMinus}
                type={"-"}
              />
              <Table
                rowInfo={notSelectedUsers}
                tableTitle={"Not Selected Users"}
                handlePlus={handlePlus}
                type={"+"}
              />

              <div className={`${tableRow} ${footer}`}>
                <div className={buttonContainer}>
                  <Button label="Save" onClick={Save} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>Users not found</>
        )}
      </>
    </LayoutPurple>
  );
}
