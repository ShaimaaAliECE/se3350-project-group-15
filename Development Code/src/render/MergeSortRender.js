import React from "react";

export default class MergeSortRender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            partitions: props.Partitions,
            unsorted: props.Unsorted,
            displayContent: props.DisplayContent
        };
    }

    componentDidUpdate() {
        debugger;
        this.state.unsorted = this.props.Unsorted

    }
    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.unsorted !== nextProps.Unsorted);
    }

    render() {
        return (
            <div>
                <h4>Merge Sort</h4>
                <div class="row">
                    {this.state.unsorted.map((num, index) => {
                        return (<div class="border col" key={index}>{num}</div>)
                    })}
                </div>
                <div className="fragment-row">
                    {/* print the original array*/}
                    {console.log(this.state.unsorted)}
                    <strong>Sample Numbers: {this.state.unsorted.join(', ')}</strong>
                    <div>
                        {this.state.displayContent}
                    </div>
                </div>
            </div>
        );
    }
}