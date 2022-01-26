import React, { Component } from 'react'
 
import ReactStoreIndicator from 'react-score-indicator'
 
class ScoreIndicator extends Component {
  render () {
      
      const score = 60;

    return (
      <ReactStoreIndicator
        value={score}
        maxValue={100}
      />
    )
  }
}

export default ScoreIndicator;