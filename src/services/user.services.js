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

export async function getUsers() {
  return db
    .ref(`/users/`)
    .once("value")
    .then((snapshot) => {
      return snapshot.val();
    });
}

export async function getUser(id) {
  try {
    return db
      .ref(`users/${id}`)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  } catch (err) {
    console.log(err);
  }
}
