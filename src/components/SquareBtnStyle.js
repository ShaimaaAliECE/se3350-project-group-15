//From Ives Luo

export default function SquareBtnStyle(props) {
    return (
        <div className={props.opacity ? 'square-container-opacity' : 'square-container'}>
            {props.children}
        </div>
    );
};
