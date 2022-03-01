import { useState, useEffect } from "react";
import { db } from "./authentification/firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function ViewUsers() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, email: newEmail});
    window.location.reload(false);
  };

  const updateUser = async (id, email) => {
    const userDoc = doc(db, "users", id);
    const newFields = { email: email };
    await updateDoc(userDoc, newFields);
    window.location.reload(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload(false);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div >
      <h1>Admin view all users: </h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {" "}
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <button
              onClick={() => {
                updateUser(user.id, user.email);
              }}
            >
              {" "}
              Change Email
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ViewUsers;
