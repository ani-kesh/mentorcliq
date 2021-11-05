import { nanoid } from "nanoid";
import { db } from "../libs/firebase.libs";
import { getUsers } from "./user.services";

export const addProgram = ({ uid, userIds, id }) => {
  if (id === undefined) id = nanoid();
  return db.ref(`/programs/${id}`).set({
    userId: uid,
    userIds,
  });
};

export async function getProgramUsers(userId) {
  try {
    return db
      .ref(`programs`)
      .orderByChild("userId")
      .equalTo(userId)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  } catch (err) {
    console.log(err);
  }
}

export async function getOrderedUsersByUserId(userId) {
  const responseAllUsers = await getUsers();
  const responseSelectedUsers = await getProgramUsers(userId);

  const { userIds } = Object.values(responseSelectedUsers)[0];
  const programId = Object.keys(responseSelectedUsers)[0];

  const selectedUsers = userIds.map((el) => {
    const user = responseAllUsers[el];
    delete responseAllUsers[el];
    return { ...user, uid: el };
  });

  delete responseAllUsers[userId];

  let notSelectedUsers = Object.entries(responseAllUsers).map((el) => {
    return { uid: el[0], ...el[1] };
  });
  return { selectedUsers, notSelectedUsers, programId };
}
