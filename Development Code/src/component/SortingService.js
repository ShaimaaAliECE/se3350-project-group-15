import { Partition } from './Partition';

export class SortingService {
  partitions = [];
  mergeSort(currentPartition) {
    //check if there is only one left in the current partition
    if (currentPartition.isSingleItemList()) {
      return currentPartition;
    }

    //if there are more than one, split the partition to left and right
    let left = currentPartition.getLeftHalf();
    let right = currentPartition.getRightHalf();

    //build the left part of the split
    this.buildModel(left, {left: [...currentPartition.items]});

    //build the right part of the split
    this.buildModel(right, {left: [...currentPartition.items]}); 

    //return left and right together
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  //compare left half and the right half
  merge(left, right){
    let result = [];
    let parts = {left: [...left.items], right: [...right.items]};

    while (!left.isEmpty() && !right.isEmpty()) {
      if (left.first() < right.first()){
        result.push(left.items.shift());
      } 
      else {
        result.push(right.items.shift());
      }
    }

    result = result.concat(left.items).concat(right.items);

    let newPartition = new Partition(`${left.id}-${right.id}`, result);
    
    this.buildModel(newPartition, parts);
    
    return newPartition;
  }

  //build the left/right part on the webpage
  buildModel(res, part) {
    let nodeIndex = this.partitions.findIndex(p => p.parentId === res.parentId);
   
    if(nodeIndex >= 0) {
      this.partitions[nodeIndex].fragments.push(res.items.slice());
      this.partitions[nodeIndex].part1 = [];
      
    //print the split result
      this.partitions[nodeIndex].part2 = part.left;
      this.partitions[nodeIndex].descr = '   split result  ------>  ';
    }  
    else {
      let node = {parentId: res.parentId, fragments: []};
      
       //print the merged result
      node.part1 = part.left;
      node.descr = '   ------>merged   ';
      node.part2 = part.right;
      
      node.fragments.push(res.items.slice());
      this.partitions.push(node);
    }
  }
}