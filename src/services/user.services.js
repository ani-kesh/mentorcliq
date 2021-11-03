import { db } from "../libs/firebase.libs";

export const addUser = ({
  firstName,
  lastName,
  email,
  gender,
  department,
  jobTitle,
  country,
  city,
  passwordVal,
  uid,
}) => {
  return db.ref(`/users/${uid}`).set({
    uid,
    email,
    password: passwordVal,
    firstName,
    gender,
    lastName,
    department,
    jobTitle,
    country,
    city,
  });
};


export const getUsers = () => {
    return db.ref(`/users/`).once("value")
    .then((snapshot) => {
      return snapshot.val();
    });
  };
  
