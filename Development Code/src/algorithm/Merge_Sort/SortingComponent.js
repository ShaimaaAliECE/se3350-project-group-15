import React, { Component } from 'react';
import { SortingService } from './sortingService';
import { Partition } from './Partition';
import './SortingComponent.css'

export class SortingComponent extends Component {

  unsorted = [55, 1, 2, 4, 9, 77, 3, 65, -1, 999,100,3];

  constructor(props) {
    super();
    this.unsorted=props.unsorted;
    this.state = {partitions:  []};
    this.sortingService = new SortingService();
  }

  componentDidMount() {
    let partition = new Partition(0, this.unsorted);
    this.sortingService.mergeSort(partition);
    this.setState({partitions: this.sortingService.partitions});   
  }

  render() {
    let fragments = this.state.partitions.map((node, i1) => {
        return <div key={i1} className="fragment-row" >
                {
                  node.fragments.map((numbers, i2) =>
                  <span>
                    <span className="groups" key={i2}>
                    {
                      numbers.map((number, index) => {
                        return <span key={index} className="number">{number}</span>
                      })
                    }
                    </span>
                  </span>
                  )
                }
                <span>{node.descr}</span>
              </div>
    });
    return (
      <div>
        <h4>Merge Sort</h4>
        <div className="fragment-row">
          <strong>Sample Numbers: { this.unsorted.join(', ') }</strong>
        </div>
        {fragments}
      </div>
    );
  }
}