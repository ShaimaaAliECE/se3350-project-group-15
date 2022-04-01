import { React, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../Authentication/firebase";



export default function AdminPage() {
  // this place is used for add, remove and modify actions of player records.

  //Getting the information of each doc in the collection


  const recordCollection = collection(db, 'gameRecords');
  //const [timeSpent, setTimeSpent] = useState('');

  const [querySnapshotArray, setQuerySnapshotArray] = useState([]);

  // const variant = ["Primary",
  //   "Secondary",
  //   "Success",
  //   "Danger",
  //   "Warning",
  //   "Info",
  //   "Light",
  //   "Dark"]

  // const gameRecords = {
  //   id: '',
  //   dateTime: new Date,
  //   email: '',
  //   score: 0,
  //   timeSpent: ''
  // };


  const [playerEmail, setPlayerEmail] = useState();

  async function readRecordData() { // worked
    console.log(playerEmail);
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
    //setGameRecords(idArray, dateTimeArray, emailArray, scoreArray, timeSpentArray);
  };

  const getPlayerEmail = () => {
    var email = document.getElementById('email').value;
    setPlayerEmail(email);
  };

  // function setGameRecords(id, dateTime, email, score, timeSpent) {
  //   setId(id)
  //   setDateTime(dateTime);
  //   setEmail(email);
  //   setScore(score);
  //   setTimeSpent(timeSpent);

  //   //console.log(gameRecords.id)
  // }


  // make sure only admin can view this page!
  useEffect(() => {
    if (localStorage.userEmail !== "admin@123.com") {
      //nav to home page
      window.location = "/";
    }
  });

  return (
    <div>
      <h1>AdminPage</h1>
      <h2>(:maybe come up with a better design:)</h2>
      <h2>maybe display player data in 3 cols</h2>
      <div>
        <input type='text' id='email' onChange={getPlayerEmail} />
        <button className="btn btn-primary" onClick={readRecordData}>
          Search
        </button>
      </div>
      {
        querySnapshotArray.map((item) => {
          return <Card
            bg="Primary"
            key="1"
            text={"dark"}
            style={ {width: "18rem", margin: "auto", padding: "10px",} }
            className="mb-2"
                       
          >
              <Card.Header >{item[0]}</Card.Header>
              <Card.Body>
                <Card.Title>{item[1]}</Card.Title>
                <Card.Text>{item[2]}</Card.Text>
                <Card.Text>{item[3]}</Card.Text>
                <Card.Text>{item[4]}</Card.Text>
                <Card.Text>{item[5]}</Card.Text>
              </Card.Body>
          </Card>
        }
        )
      }
    </div>
  );
}

