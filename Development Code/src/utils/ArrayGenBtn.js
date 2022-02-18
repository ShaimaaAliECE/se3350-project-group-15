import React from 'react';

export default class ArrayGenBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrayLength: props.ArrayLength,
            ArrayRange: props.ArrayRange,
        }
    }

    generateNumberArray() {
        let random = new Set();
        while (random.size < this.state.ArrayLength) {
            random.add(Math.floor(Math.random() * this.state.ArrayRange) + 1);
        }
        console.log([...random]);
        this.props.parentCallback([...random]);
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => { this.generateNumberArray() }} class="btn btn-success">Start</button>
                </div>
            </div>
        )
    }

}