import { React, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import {
  doc,
  getDocs,
  deleteDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Authentication/firebase";
import CloseButton from "react-bootstrap/CloseButton";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

// this place is used for add, remove and modify actions of player records.

export default function AdminPage() {
  //Getting the information of each doc in the collection
  const alert = useAlert(); //Henry: fancy alert
  const recordCollection = collection(db, "gameRecords");
  const [querySnapshotArray, setQuerySnapshotArray] = useState([]);
  const [playerEmail, setPlayerEmail] = useState();

  useEffect(() => {
    if (localStorage.userEmail !== "admin@123.com") {
      //nav to home page
      window.location = "/";
    }
  });

  async function readRecordData() {
    // worked
    const targetData = query(
      recordCollection,
      where("email", "==", playerEmail)
    );
    const querySnapshot = await getDocs(targetData);
    var innerQuery = [];
    querySnapshot.forEach((doc) => {
      var eachQuery = [];
      eachQuery.push(doc.data().email);
      eachQuery.push(doc.data().dateTime);
      eachQuery.push(doc.id);
      eachQuery.push(doc.data().level);
      eachQuery.push(doc.data().score);
      eachQuery.push(doc.data().timeSpent);
      console.log(eachQuery);
      innerQuery.push(eachQuery);
    });
    setQuerySnapshotArray(innerQuery);
  }

  const getPlayerEmail = () => {
    var email = document.getElementById("email").value;
    setPlayerEmail(email);
  };

  const handleDelete = (e) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            handleDeleteAsync(e);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  async function handleDeleteAsync(e) {
    await deleteDoc(doc(db, "gameRecords", e.target.name)).then(() => {
      alert.show(`deleted ${e.target.name} record successfully`, {
        timeout: 2000,
      });
      readRecordData();//refresh record display after deleting
    });
  }

  return (
    <div>
      <h1>AdminPage</h1>
      <h2>(:maybe come up with a better design:)</h2>
      <h2>maybe display player data in 3 cols</h2>
      <div>
        <input type="text" id="email" onChange={getPlayerEmail} />
        <button className="btn btn-primary" onClick={readRecordData}>
          Search
        </button>
      </div>
      {querySnapshotArray.map((item) => {
        return (
          <Card
            bg="Primary"
            key={item[2]}
            text={"dark"}
            style={{ width: "18rem", margin: "auto", padding: "10px", }}
            className="mb-2"
          >
            <CloseButton onClick={handleDelete} name={item[2]} />
            <Card.Header>{item[0]}</Card.Header>
            <Card.Body>
              <Card.Title>{item[1]}</Card.Title>
              <Card.Text>{item[2]}</Card.Text>
              <Card.Text>{item[3]}</Card.Text>
              <Card.Text>{item[4]}</Card.Text>
              <Card.Text>{item[5]}</Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  );
}
