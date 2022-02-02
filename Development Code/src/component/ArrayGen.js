import React from 'react';

export default class ArrayGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrayLength: 0,
            NumberArray: []
        }
    }

    generateNumberArray() {
        // setNumberArray(
        //   Array.from({ length: {ArrayLength} }, () => Math.floor(Math.random() * 40))
        // );
        this.state.NumberArray = Array.from({ length: this.state.ArrayLength }, () =>
            Math.floor(Math.random() * 40)
        );
        console.log(this.state.NumberArray);
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <input onChange={(e) => { this.state.ArrayLength = e.target.value; }}></input>
                <div>
                    <button onClick={(e) => { this.generateNumberArray() }}>start</button>
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