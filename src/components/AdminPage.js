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
import { Alert } from "react-bootstrap";

// this page is for reading or removing a player's records.

export default function AdminPage() {
  //Getting the information of each doc in the collection
  const alert = useAlert(); //Henry: fancy alert
  const recordCollection = collection(db, "gameRecords");
  const [querySnapshotArray, setQuerySnapshotArray] = useState([]);
  const [playerEmail, setPlayerEmail] = useState();
  const [noRecords, setNoRecords] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (localStorage.userEmail !== "admin@123.com") {
      //nav to home page
      window.location = "/";
    }
  });

  async function readRecordData() {
    if (playerEmail !== undefined && playerEmail !== "") {
      setEmailError("");
      setNoRecords(true);
      const targetData = query(
        recordCollection,
        where("email", "==", playerEmail)
      );
      const querySnapshot = await getDocs(targetData);
      var innerQuery = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        var eachQuery = [];
        eachQuery.push(doc.data().email);
        eachQuery.push(doc.data().dateTime);
        eachQuery.push(doc.id);
        eachQuery.push(doc.data().level);
        eachQuery.push(doc.data().score);
        eachQuery.push(doc.data().timeSpent);
        innerQuery.push(eachQuery);
        if (doc.data().email !== "") {
          setNoRecords(false);
        }
      });
      setQuerySnapshotArray(innerQuery);
    } else {
      setEmailError("please enter a valid email!");
    }
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
      readRecordData(); //refresh record display after deleting
    });
  }

  return (
    <div className="mt-4">
      <h1>AdminPage</h1>
      <h2>Enter a player's email to look up records</h2>
      <div className="search-item">
        <input type="text" id="email" onChange={getPlayerEmail} />
        <button className=" btn btn-primary" onClick={readRecordData}>
          Search
        </button>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {emailError && (
          <Alert variant="danger">
            <div style={{ padding: "1px 87px" }}>{emailError}</div>
          </Alert>
        )}
      </div>

      {noRecords ? (
        <h1 className="submit-loading">No Records to See</h1>
      ) : (
        <div className="m-4 d-flex flex-wrap justify-content-center">
          {querySnapshotArray.map((item) => {
            return (
              <Card
                bg="Primary"
                key={item[2]}
                text={"dark"}
                style={{ width: "25rem" }}
                className="m-2 rounded-lg"
              >
                <CloseButton onClick={handleDelete} name={item[2]} />
                <Card.Header>{item[0]}</Card.Header>
                <Card.Body>
                  <Card.Title>{item[1]}</Card.Title>
                  <Card.Text>Session ID: {item[2]}</Card.Text>
                  <Card.Text>Selected Level: {item[3]}</Card.Text>
                  <Card.Text>Score: {item[4]}</Card.Text>
                  <Card.Text>Time Spent: {item[5]}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
