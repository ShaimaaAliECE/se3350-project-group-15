export default function Button(props) {
    return (
        <div
            className={`rc-button ${props.disabled ? 'disabled' : ''}`}
            onClick={props.disabled ? () => { } : props.onClick}
        >
            <span>{props.children}</span>
        </div>
    );
};