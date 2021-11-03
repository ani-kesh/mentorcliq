import React, { useState, useEffect } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { getUsers } from "../../services/user.services";
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
  header
} from "./SignUp.module.css";

export default function SignUpThird() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      const users = Object.values(res).map(
        ({
          city,
          country,
          department,
          email,
          firstName,
          gender,
          jobTitle,
          lastName,
        }) => {
          return {
            city,
            country,
            department,
            email,
            firstName,
            gender,
            jobTitle,
            lastName,
          };
        }
      );
      setUsers([...users]);
    });
  });

  return (
    <>
      <div className={mainContainer}>
        <div className={tableContainer}>
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
          {users.map(
            ({
              city,
              country,
              department,
              email,
              firstName,
              gender,
              jobTitle,
              lastName,
            }) => {
              return (
                <div className={tableRow} key={email}>
                  <div className={`${rowItem} ${checkbox}`}>
                    <Checkbox />
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
              <Button label="Register" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
