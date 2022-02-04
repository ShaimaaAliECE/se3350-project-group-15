import React, { Component } from "react";
import { SortingService } from "./SortingService";
import { Partition } from "./Partition";

export default class SortingComponent extends Component {
  //this is the unsorted array
  unsorted = [6,5,4,3,2,1];

  //initialized the array state
  constructor() {
    super();
    //set the array to the one that is gonna be splited 
    this.state = { partitions: [] };
    this.sortingService = new SortingService();
  }

  componentDidMount() {
    let partition = new Partition(0, this.unsorted);
    this.sortingService.mergeSort(partition);
    this.setState({ partitions: this.sortingService.partitions });
  }

  render() {
 
    let fragments = this.state.partitions.map((node, i1) => {
      return (
        <div key={i1} className="fragment-row">
          {node.fragments.map((numbers, i2) => (

            <span>
              <span className="group" key={i2}>
                {numbers.map((number, index) => {
                  return (
                    <span key={index} className="number">
                      {number}
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
                  {n}
                </span>
              );
            })}
          </span>

          <span className="group">
            {(node.part2 || []).map((n, index) => {
              return (
                <span key={index} className="number">
                  {n}
                </span>
              );
            })}
          </span>
        </div>
      );
    });

    
    return (
      <div>
        <h4>Merge Sort</h4>
        <div className="fragment-row">
          {/* print the original array*/}
          <strong>Sample Numbers: {this.unsorted}</strong>
        </div>
  {/* start mergesort*/}
        {fragments}
      </div>
    );
  }
}
