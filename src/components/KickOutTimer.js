import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import { logOut } from '../Authentication/firebase';

export default function KickOutTimer() {
    const [ModalIsOpen, setModalIsOpen] = useState(false)
    const idleTimeRef = useRef(null)
    const sessionTimeoutRef = useRef(null)

    const onIdle = () => {
        console.log("Is idle now ")
        setModalIsOpen(true)
        //alert("it is timeout")
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
        if (window.confirm('5 minutes time out')) {
            window.location.href = 'http://localhost:3000'
            console.log('window confirm')
        }
    };

    return (
        <div>
            <IdleTimer
                ref={idleTimeRef}
                timeout={5 * 1000 * 60}
                onIdle={onIdle}
            ></IdleTimer>
        </div>
    )
}