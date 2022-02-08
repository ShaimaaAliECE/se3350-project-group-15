import React, { Component } from "react";
import { SortingService } from "./SortingService";
import { Partition } from "./Partition";

export default class SortingComponent extends Component {
  //initialized the array state
  constructor(props) {
    super(props);
    //set the array to the one that is gonna be splited 
    this.state = {
      partitions: [],
      unsorted: props.Problem
    };
    this.sortingService = new SortingService();
  }

  componentDidMount() {
    console.log("componentDidMount: " + this.state.unsorted)
    this.setState({ unsorted: this.props.Problem });
  }

  componentDidUpdate() {
    this.state.unsorted = this.props.Problem;
    let partition = new Partition(0, this.state.unsorted);
    this.sortingService.mergeSort(partition);
    this.setState({ partitions: this.sortingService.partitions });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: " + this.state.unsorted + " next" + nextProps.Problem)
    console.log(this.state.unsorted !== nextProps.Problem)
    console.log(this.state.partitions !== nextState.partitions)
    return (this.state.unsorted !== nextProps.Problem || this.state.partitions !== nextState.partitions);
  }

  updateFragments() {
    var fragments = ""
    fragments = this.state.partitions.map((node, i1) => {
      return (
        <div key={i1} className="fragment-row">
          {node.fragments.map((numbers, i2) => (
            <span>
              <span className="group" key={i2}>
                {numbers.map((number, index) => {
                  return (
                    <span key={index} className="number">
                      [{number}]
                    </span>
                  );
                })}
              </span>
            </span>

          ))}
          <span>{node.descr}</span>
          <span>
            {(node.part1 || []).map((n, index) => {
              return (
                <span key={index} className="number">
                  [{n}]
                </span>
              );
            })}
          </span>

          <span className="group">
            {(node.part2 || []).map((n, index) => {
              return (
                <span key={index} className="number">
                  [{n}]
                </span>
              );
            })}
          </span>
        </div>
      );
    });

    return fragments;
  }

  render() {
    if (this.state.unsorted.length === 0) {
      return (
        <div>
          <h1>Press Start to continue</h1>
        </div>
      );
    }
    return (
      <div>
        <h4>Merge Sort</h4>
        <div className="fragment-row">
          {/* print the original array*/}
          <strong>Sample Numbers: {this.state.unsorted.join(', ')}</strong>
        </div>
        {/* start mergesort*/}
        {this.updateFragments()}
      </div>
    );
  }
}


