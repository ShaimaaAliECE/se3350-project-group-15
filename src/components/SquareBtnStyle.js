//From Ives Luo

export default function SquareBtnStyle(props) {
    
    return (
        <div>
        <div className={props.opacity ? 'square-container-opacity' : 'square-container'}>
            {props.children}
        </div>

    </div>
        
    );
};
