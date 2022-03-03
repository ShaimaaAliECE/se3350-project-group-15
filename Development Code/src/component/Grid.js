import './userInput.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

//

import PT from 'prop-types'; //check input
const grid_temp=[
    
    //first row
    //test 4321
    {
        id: 'A1',
        letter: '4',
        clues:['step one'],
        label:1.1 //show on the grid
},
{
    id: 'A2',
    letter: '3',
    clues:['step one'],
    label:1.2
},

{
    id: 'A3',
    letter: '2',
    clues:['step one'],
    label:1.3
},
{
    id: 'A4',
    letter: '1',
    clues:['step one'],
    label:1.4
},

//row two
{
    id: 'B1',
    letter: '4',
    clues:['step two'],
    label:2.1
},
{
    id: 'B2',
    letter: '3',
    clues:['step two'],
    label:2.2
},

{
    id: 'B3',
    letter: null, //empty space
    clues: null ,
    label: null 
},

{
    id: 'B4',
    letter: '2',
    clues:['step two'],
    label:2.3

},

{
    id: 'B5',
    letter: '1',
    clues:['step two'],
    label:2.4
},

]

const grid_clue={
    'step one':{
        clue:'clue for step one',
        answer:'4321', //exaple answer
        number: 1,
        boxes:['A1','A2','A3','A4']

    },
    'step two':{
        clue:'clue for step one',
        answer:'43 21', //exaple answer
        number: 1,
        boxes:['B1','B2','B3','B4','B5']

    }
}

class Grids extends React.Component{
    constructor(props){
        super(props);
            this.state={
                grid: grid_temp,
                clue: grid_clue,
                activeClueBox: grid_clue['step one'].boxes,
                activeClue: grid_clue['step one'].boxes[0]
            };

            this.setActiveClueBoxes=this.setActiveClueBoxes.bind(this); //provide the answer
            this.setActiveClue=this.setActiveClue.bind(this);
            this.setBox=this.setBox.bind(this);  
    }

    setActiveClueBoxes(boxes){
        this.setState({
            activeClueBox:boxes
        });
    }

    setActiveClue(clue){
        this.setState({
            activeClue:clue
        });

    }
    setBox(box){
        this.setState({
            boxInFocus: box
        });

    }

    render(){
        return(
        <div className="grid_G">
            <Clues clues={this.state.clues}
            setActiveClueBoxes={this.setActiveClueBoxes} 
            activeClue={this.state.activeClue}
            setActiveClue={this.setActiveClue} 
            setBox={this.setBox}/>
            <Board grid={this.state.grid}all Clues={
                this.state.clurs} clues={this.state.clues}
                setActiveClueBoxes={this.setActiveClueBoxes}
                isHighlightedBoxes={this.state.activeClueBox}
                setBox={this.setBox}
                boxInFocus={this.state.boxInFocus}/>
            
        </div>
        );
    }
}
class Clues extends React.Component{
    constructor(props){
        super(props);
        const cluesAcross=[];
        
        for(const key in this.props.clues){
            const clue= this.props.clues[key];
            clue.id=key;
            cluesAcross.push(clue);   
        }

        this.state={
            across:cluesAcross,
        }
    }

    render(){
        return(
            <div>show clues</div>
        )
    }
    
}

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='grid_board'>
                {this.props.gird.map((box)=>{
                    const{id, letter,clues, label}=box;
                    return <Box key={id}  id={id} letter={letter} boxClues= {clues} label={label}
                    allClues={this.props.allClues} 
                    isHighlighted={this.props.isHighlightedBoxes.indexOf(id)>-1}
                    setActiveClueBoxes={this.props.setActiveClueBoxes}
                    setActiveClue={this.props.setActiveClue}
                    setBox={this.props.setBox}
                    isInFocus={this.props.boxInFocus==id}
                    />

                })}
            </div>
        )
    }
}

class Box extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          highlight: props.isHighlighted,
          isInFocus: props.isInFocus
        };
     
        this.handleFocus = this.handleFocus.bind(this);
    } 
    componentWillReceiveProps(newProps) {
        this.setState({
          highlight: newProps.isHighlighted,
          isInFocus: newProps.isInFocus
        });
      }
      
      componentDidUpdate() {
        if (this.state.isInFocus) {
           this.textInput.focus();
        }
      }

      handleFocus(event) {
        this.props.setActiveClue(this.props.boxClues);
        
        let boxesToHighlight = [];
        
        for (const clue of this.props.boxClues) {
          boxesToHighlight = boxesToHighlight.concat(this.props.allClues[clue].boxes);
        }
        
        this.props.setActiveClueBoxes(boxesToHighlight);
        this.props.setBoxInFocus(event.target.id);
      }
      render() {
        let visibleLabel;
        let input;
        
        if (this.props.label) {
          visibleLabel = <span className="box-label">{ this.props.label }</span>
        }
        
        if (this.props.letter) {  
          input = <input type="text" maxLength="1" className={ `box-input ${this.state.highlight ? 'highlight' : ''}` } onFocus={ this.handleFocus } ref={(input) => { this.textInput = input }} />
        }
        return (
            <div className={ `box ${!this.props.letter ? ' blank' : ''}` }>
               { visibleLabel }
               { input }
            </div>
           );

}

}
//}

export default Grids;

ReactDOM.render(<grid/>, document.querySelector('#Grid'));
