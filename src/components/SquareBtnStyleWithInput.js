//From Ives Luo

export default function SquareBtnStyleWithInput(props) {
    let currentPoint = 0;

    const checkAns = (event) => {
        if (event.target.value === event.target.id) {
            currentPoint++;
            event.target.disabled = true;
        } else if (event.target.value === '') {
        } else {
            alert('Wrong!');
        }
    }

    return (
        <input className={props.opacity ? 'square-container-opacity text-box' : 'square-container text-box'} type="text" id={props.id} name="ansBox" onBlur={checkAns} />

    );
};
