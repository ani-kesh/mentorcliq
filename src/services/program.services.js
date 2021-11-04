import { db } from "../libs/firebase.libs";

export const addProgram = ({ uid, userIds }) => {
  return db.ref(`/programs/${uid}`).set({
    uid,
    userIds,
  });
};


export async function getProgramUsers(userId) {
  try {
    return db
      .ref(`programs`)
      .orderByChild("uid")
      .equalTo(userId)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      }).then((res)=>{
        const {userIds} =res[userId] 
        console.log(userIds)
      });
  } catch (err) {
    console.log(err);
  }
}