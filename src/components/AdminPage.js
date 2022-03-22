import { React, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import {doc, getDoc, collection, getCollection} from "firebase/firestore";
import firebase, { db } from "../Authentication/firebase";

export default function AdminPage() {
  // this place is used for add, remove and modify actions of player records.

  //Getting the information of each doc in the collection

  const gameRecords= collection(db,'gameRecords').doc('32zL5MbteVo5lY4mFRQI');
  const [gameData, setGameData] = useState();
  async function readRecordData(){
    const mySnapshot = await getDoc(gameRecords);
    if(mySnapshot.exists()){
      setGameData(mySnapshot);
    }

  };



  
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
      {[
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Warning",
        "Info",
        "Light",
        "Dark",
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Ouda</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              {gameData}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
