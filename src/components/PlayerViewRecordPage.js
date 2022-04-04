import { React, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getDocs, collection, query, where, doc, deleteDoc } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import CloseButton from "react-bootstrap/CloseButton";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


export default function PlayerRecordPage() {
  const alert = useAlert();
  const recordCollection = collection(db, 'gameRecords');
  const [querySnapshotArray, setQuerySnapshotArray] = useState([]);
  const [playerEmail, setPlayerEmail] = useState();

  // function readRecordData() {
  //     console.log(playerEmail);
  //     setPlayerEmail(localStorage.getItem("userEmail"));
  //     console.log(playerEmail);
  //     //setting the player email as the current player email.
  // }

  useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      setPlayerEmail(localStorage.getItem("userEmail"));
      console.log(playerEmail);
      console.log(querySnapshotArray);
    }
  }, [playerEmail]);


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


  async function readRecordData() {
    const targetData = query(recordCollection, where('email', '==', playerEmail));
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
  };





  return (
    <div>
      <div className="mt-4">
        <button className='btn btn-primary' onClick={readRecordData}>Display records</button>
      </div>
      <div className="m-4 d-flex flex-wrap justify-content-between">
        {
          querySnapshotArray.map((item) => {
            return <Card
              bg="Primary"
              key="1"
              text={"dark"}
              style={{ width: "25rem" }}
              className="m-2 rounded-lg"
            >
              <CloseButton onClick={handleDelete} name={item[2]} />
              <Card.Header >{item[0]}</Card.Header>
              <Card.Body>
                <Card.Title>{item[1]}</Card.Title>
                <Card.Text>Session ID: {item[2]}</Card.Text>
                <Card.Text>Selected Level: {item[3]}</Card.Text>
                <Card.Text>Score: {item[4]}</Card.Text>
                <Card.Text>Time Spent: {item[5]}</Card.Text>
              </Card.Body>
            </Card>
          }
          )
        }
      </div>

    </div>
  );
}