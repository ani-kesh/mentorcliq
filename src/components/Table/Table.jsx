import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  heading,
  rowItem,
  tableRow,
  genderCol,
  fullName,
  location,
  checkbox,
  header,
  title,
  minusIcon,
  plusIcon,
} from "./Table.module.css";

export default function Table({
  rowInfo,
  tableTitle,
  handleMinus,
  handlePlus,
  type,
}) {
  return (
    <>
      <div className={`${tableRow} ${title}`}>{tableTitle}</div>
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
            <div className={tableRow} key={email}>
              <div className={`${rowItem} ${checkbox}`}>
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
    </>
  );
}
