import React from "react";
import './Navigate.css'

const Navigate = ({ handleLength, handleSpeed, handleAlgo, generateRandomArray, handleSort, sorting, completed, len, speed, algo }) =>{

    return (
        <nav>
            <div className='nav-brand'>Merge Sort Algorithm</div>

            <div className='toolbox'>
                <div>

                    <div className='group length'>
                        <label>Length</label>
                        <input type='range' onChange={handleLength} min='5' max={100} step='1' disabled={sorting} value={len}></input>
                    </div>
                    
                    <select onChange={handleAlgo} disabled={sorting} value={algo}>

                        <option value='mergeSort'>Merge Sort</option>
                        
                    </select>
                </div>
                
                <div>
                    <button onClick={generateRandomArray} disabled={sorting}>Randomize</button>
                    <button onClick={handleSort} disabled={sorting || completed}>Sort</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigate