import React from 'react';

export default class ArrayGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrayLength: props.ArrayLength,
            ArrayRange: props.ArrayRange,
            NumberArray: [] //this is where the numbers are contained - 
        }
    }

    generateNumberArray() {
        let random = new Set;
        while (random.size < this.state.ArrayLength) {
            random.add(Math.floor(Math.random() * this.state.ArrayRange) + 1);
        }
        this.state.NumberArray = [...random];
        console.log(this.state.NumberArray);
        //pass the generated number array to HeaderLevel component
        this.props.parentCallback(this.state.NumberArray);
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => { this.generateNumberArray() }} class="btn btn-success">Start</button>
                </div>
                <div><div class="row">
                    {this.state.NumberArray.map((num, index) => {
                        return (<div class="border col" key={index}>{num}</div>)
                    })}
                </div>
                </div>
            </div >
        )
    }

}