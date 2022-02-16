//for level2 & level3
import React from 'react'
import { makeStyles } from "@material-ui/core";

//a fancy way to style your component
const useStyles = makeStyles((theme) => ({
    // contacts: {
    //   paddingLeft: 10,
    //   paddingRight: 10,
    //   "&:hover": {
    //     width: 100,
    //     height: 100,
    //   },
    // },
    goodFeedbackText:{
        backgroundColor:'#ffd100',
        color:'black',
        padding: 10,
        borderRadius:10,
        fontSize:'large'
    },
    badFeedbackText:{
        backgroundColor:'#ff5e5b',
        color:'white',
        padding: 10,
        borderRadius:10,
        fontSize:'large'
    }
  }));

function BottomFeedback(props) {
    const classes = useStyles(); //here useStyles classes is defined

  return (
      //if the answer is all correct -> use goodFeedbackText styling
    <div className={props.goodFeedback? classes.goodFeedbackText : classes.badFeedbackText } >{props.feedbackText}</div>
  )
}

export default BottomFeedback