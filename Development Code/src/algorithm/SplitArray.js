import React from "react";
import Level1 from "../component/Level1";
// function MergsortFebThird(){
// //const[number,setNumber]=useState(0)
// const mergeSort=(props) => {
//     const arr=props.arr;
//     const l=props.l;
//     const r=props.r;
//   //find the midpoint
//   var m = l + parseInt((r - l) / 2);
//     //arr, l, r
//     // for (var i = l; i <= r; i++) {
//     //   console.log(arr[i]);
//     // }
//     if (l >= r) {
//       return;
//       //returns recursively
//     }

// }

const SplitArray = (props) => (
  <div>
    <h1>{props.arr}</h1>
    <h1>{props.arr.slice(props.l, props.m)}</h1>
    <h1>{props.arr.slice(props.m, props.r)}</h1>
    {/* {arr.map((number)=>{
            return<h1>{number}</h1>
        })} */}
  </div>
);
export default SplitArray;
