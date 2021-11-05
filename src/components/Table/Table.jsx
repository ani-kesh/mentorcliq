import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  header,
  minusIcon,
  plusIcon,
  container1,
  title,
} from "./Table.module.css";
import React from "react";

export default function Table({
  rowInfo,
  tableTitle,
  handleMinus,
  handlePlus,
  type,
}) {
  return (
    <>
      <div className={title}>{tableTitle}</div>
      <div className={container1}>
        <span className={header}></span>
        <span className={header}>First Name</span>
        <span className={header}>Last Name</span>
        <span className={header}>Email</span>
        <span className={header}>Gender</span>
        <span className={header}>Department</span>
        <span className={header}>Job Title</span>
        <span className={header}>Country</span>
        <span className={header}>City</span>
        {rowInfo.map(
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
              <React.Fragment key={uid}>
                <span>
                  {type === "-" ? (
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className={minusIcon}
                      onClick={handleMinus(uid)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className={plusIcon}
                      onClick={handlePlus(uid)}
                    />
                  )}
                </span>
                <span>{firstName}</span>
                <span>{lastName}</span>
                <span>{email}</span>
                <span>{gender}</span>
                <span>{department}</span>
                <span>{jobTitle}</span>
                <span>{country}</span>
                <span>{city}</span>
              </React.Fragment>
            );
          }
        )}
      </div>
    </>
  );
}
