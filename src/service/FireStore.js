import { db } from "../../src/firebaseConfig";

export const setUser = (user) => {
  db.collection("users").doc(user.gitHubUser).set(user, { merge: true });
};

export const getUsers = async () => {
  const querySnapshot = await db.collection("users").get();
  const users = {};

  querySnapshot.forEach((doc) => {
    users[doc.id] = doc.data();
  });
  return users;
};
