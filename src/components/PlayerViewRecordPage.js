import { React, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../Authentication/firebase";

export default function PlayerRecordPage() {

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




    async function readRecordData() {
        const targetData = query(recordCollection, where('email', '==', playerEmail));
        const querySnapshot = await getDocs(targetData);
        var innerQuery = [];
        querySnapshot.forEach((doc) => {
            {
                var eachQuery = [];
                eachQuery.push(doc.data().email);
                eachQuery.push(doc.data().dateTime);
                eachQuery.push(doc.id);
                eachQuery.push(doc.data().level);
                eachQuery.push(doc.data().score);
                eachQuery.push(doc.data().timeSpent);
                console.log(eachQuery);
                innerQuery.push(eachQuery);
            }
        });
        setQuerySnapshotArray(innerQuery);
    };





    return (
        <div>
            <button className='btn btn-primary' onClick={readRecordData}>Display records</button>
            {
                querySnapshotArray.map((item) => {
                    return <Card
                        bg="Primary"
                        key="1"
                        text={"dark"}
                        style={{ width: "18rem", margin: "auto", padding: "10px", }}
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