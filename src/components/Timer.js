import React from 'react'
export default function Timer(props) {
    React.useEffect(() => {
        let interval = null;
        if (props.timerOn) {
            interval = setInterval(() => {
                props.setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    })

    return (
        <div className="Timer">
            <div>
                <span> {"" + Math.floor((props.time / 60000) % 60).toString().length == 2 ? Math.floor((props.time / 60000) % 60) : '0' + Math.floor((props.time / 60000) % 60)} : </span>
                <span> {"" + Math.floor((props.time / 1000) % 60).toString().length == 2 ? Math.floor((props.time / 1000) % 60) : '0' + Math.floor((props.time / 1000) % 60)} : </span>
                <span> {"" + ((props.time / 10) % 100).toString().length == 2 ? ((props.time / 10) % 100) : '0' + ((props.time / 10) % 100)} </span>
            </div>
        </div>
    );

}