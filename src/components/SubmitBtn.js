//From Henry Zhang
import React from 'react';
import ReactLoading from 'react-loading';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Authentication/firebase';
import { useAlert } from 'react-alert';

export default function SubmitBtn(props) {
    const [isLoading, setIsLoading] = React.useState(false);
    const alert = useAlert(); //Henry: fancy alert

    //handle submit answer
    async function handleSubmit(e) {
        e.preventDefault();
        props.setTimeOn(false);
        if (localStorage.getItem("userEmail") !== null) {
            setIsLoading(true);
        }
        let timeSpent = `${Math.floor((props.time / 60000) % 60)} minutes ${Math.floor((props.time / 1000) % 60)} seconds`;
        let userEmail = localStorage.getItem("userEmail");
        let currentDate = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000));
        let dateTime = `${currentDate.toString().split(' ').slice(0, 5).join(' ')}`;
        //check if user is signed in
        if (userEmail != null) {
            const usersCollectionRef = collection(db, "gameRecords");
            await addDoc(usersCollectionRef, {
                email: userEmail,
                score: props.score,
                timeSpent: timeSpent,
                dateTime: dateTime,
                level: props.level
            }).then(() => {
                setIsLoading(false);
            });
            alert.show("Submitted record successfully", { timeout: 2500 });
        } else {
            alert.error("Please log in first!", { timeout: 1500 });
        }
    }

    return (
        <div>
            <button className='submitBtn' onClick={handleSubmit}>Submit Answer</button>
            <ReactLoading type={"spin"} color="#e85d04" className="submit-loading" hidden={!isLoading} />
        </div>
    )
}

