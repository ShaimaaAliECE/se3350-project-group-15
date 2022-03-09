//From Ives Luo

export default function SquareBtnStyleWithInput(props) {

    const checkAns = (event) => {
        if (event.target.value === event.target.id) {
            props.setCurrentPoint(props.currentPoint + 1);
            event.target.disabled = true;
        } else if (event.target.value === '') {
        } else {
            event.target.value = '';
            alert('Wrong!');
        }
    }

    return (
        <input className={props.opacity ? 'square-container-opacity text-box' : 'square-container text-box'} type="text" id={props.id} name="ansBox" onBlur={checkAns} />

    );
};
