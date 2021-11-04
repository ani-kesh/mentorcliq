import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { getUsers } from "../../services/user.services";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import {
  mainContainer,
  tableContainer,
  heading,
  rowItem,
  tableRow,
  genderCol,
  fullName,
  location,
  checkbox,
  buttonContainer,
  footer,
  header,
  title,
  minusIcon,
  plusIcon,
} from "./SignUp.module.css";

export default function SignUpThird({ info }) {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [notSuggestedUsers, setNotSuggestedUsers] = useState([]);

  useEffect(() => {
    let countMatch = 0;
    getUsers().then((res) => {
      const users = Object.values(res).reduce((acc, el) => {
        const { country, department } = el;

        if (info["department"] === department) {
          countMatch++;
          return [el, ...acc];
        } else if (info["country"] === country) {
          let startAcc = acc.slice(0, countMatch);
          let endAcc = acc.slice(countMatch);
          countMatch++;
          return [...startAcc, el, ...endAcc];
        }
        return [...acc, el];
      }, []);

      const suggestedUsers = users.slice(0, 5);
      setSuggestedUsers(suggestedUsers);

      const notSuggestedUsers = users.slice(5);
      setNotSuggestedUsers(notSuggestedUsers);
    });
  }, []);

  const Register = () => {
    console.log(info);
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

    setSuggestedUsers([...suggestedUsers,...newSuggested]);
    setNotSuggestedUsers([...notSuggested]);
  };

  if (suggestedUsers.length + notSuggestedUsers.length === 0)
    return <Loading />;

  return (
    <>
      <div className={mainContainer}>
        <div className={tableContainer}>
          <div className={`${tableRow} ${title}`}>Suggested Users</div>
          <div className={`${tableRow} ${heading}`}>
            <div className={`${rowItem} ${checkbox} ${header}`}></div>
            <div className={`${rowItem} ${fullName} ${header}`}>First Name</div>
            <div className={`${rowItem} ${fullName} ${header}`}>Last Name</div>
            <div className={`${rowItem} ${header}`}>Email</div>
            <div className={`${rowItem} ${genderCol} ${header}`}>Gender</div>
            <div className={`${rowItem} ${header}`}>Department</div>
            <div className={`${rowItem} ${header}`}>Job Title</div>
            <div className={`${rowItem} ${location} ${header}`}>Country</div>
            <div className={`${rowItem} ${location} ${header}`}>City</div>
          </div>
          {suggestedUsers.map(
            ({
              city,
              country,
              department,
              email,
              firstName,
              gender,
              jobTitle,
              lastName,
              uid,
            }) => {
              return (
                <div className={tableRow} key={uid}>
                  <div className={`${rowItem} ${checkbox}`}>
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className={minusIcon}
                      onClick={handleMinus(uid)}
                    />
                  </div>
                  <div className={`${rowItem} ${fullName}`}>{firstName}</div>
                  <div className={`${rowItem} ${fullName}`}>{lastName}</div>
                  <div className={rowItem}>{email}</div>
                  <div className={`${rowItem} ${genderCol}`}>{gender}</div>
                  <div className={rowItem}>{department}</div>
                  <div className={rowItem}>{jobTitle}</div>
                  <div className={`${rowItem} ${location}`}>{country}</div>
                  <div className={`${rowItem} ${location}`}>{city}</div>
                </div>
              );
            }
          )}
          <div className={`${tableRow} ${title}`}>Other Users</div>
          <div className={`${tableRow} ${heading}`}>
            <div className={`${rowItem} ${checkbox} ${header}`}></div>
            <div className={`${rowItem} ${fullName} ${header}`}>First Name</div>
            <div className={`${rowItem} ${fullName} ${header}`}>Last Name</div>
            <div className={`${rowItem} ${header}`}>Email</div>
            <div className={`${rowItem} ${genderCol} ${header}`}>Gender</div>
            <div className={`${rowItem} ${header}`}>Department</div>
            <div className={`${rowItem} ${header}`}>Job Title</div>
            <div className={`${rowItem} ${location} ${header}`}>Country</div>
            <div className={`${rowItem} ${location} ${header}`}>City</div>
          </div>

          {notSuggestedUsers.map(
            ({
              city,
              country,
              department,
              email,
              firstName,
              gender,
              jobTitle,
              lastName,
              uid,
            }) => {
              return (
                <div className={tableRow} key={uid}>
                  <div className={`${rowItem} ${checkbox}`}>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className={plusIcon}
                      onClick={handlePlus(uid)}
                    />
                  </div>
                  <div className={`${rowItem} ${fullName}`}>{firstName}</div>
                  <div className={`${rowItem} ${fullName}`}>{lastName}</div>
                  <div className={rowItem}>{email}</div>
                  <div className={`${rowItem} ${genderCol}`}>{gender}</div>
                  <div className={rowItem}>{department}</div>
                  <div className={rowItem}>{jobTitle}</div>
                  <div className={`${rowItem} ${location}`}>{country}</div>
                  <div className={`${rowItem} ${location}`}>{city}</div>
                </div>
              );
            }
          )}
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
