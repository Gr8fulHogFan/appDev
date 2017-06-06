import React, { Component,PropTypes } from 'react';
import ReactTable from 'react-table';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css';

class SelectBoxExpTxt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'select'};
  }
  onChangeExpTst(exptst) {
    this.setState(
      {
      value: exptst.target.value
    })
  }
  render(){
    return(
      <div className="App-select-list">
        <label htmlFor="Experiment/Test" >Experiment/Test :  </label>
        <select value={this.state.value} onChange={this.onChangeExpTst.bind(this)} className="form-control">
          <option value="select">Select an Exp/Test</option>
          <option value="70601">70601</option>
          <option value="71601">71601</option>
          <option value="73801">73801</option>
        </select>
      </div>
    )
  }
}

class SelectBoxPathologist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'select'};
  }
  onChangePathologist(pathologist) {
    this.setState(
      {
      value: pathologist.target.value
    })
  }

  render(){
    return(
      <div className="App-select-list">
      <label htmlFor="Pathologist" >Pathologist :  </label>
      <select value={this.state.value} onChange={this.onChangePathologist.bind(this)} className="form-control">
        <option value="select">Select a Pathologist</option>
        <option value="1111">Wingfield, Timothy</option>
        <option value="2222">Smith, John</option>
        <option value="3333">Williams, Ted</option>
      </select>
      </div>
    )
  }
}

class SelectBoxSex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'select'};
  }
  onChangeSex(sex) {
    this.setState(
      {
      value: sex.target.value
    })
  }
  render(){
    return(
      <div className="App-select-list">
      <label htmlFor="Sex" >Sex :  </label>
      <select value={this.state.value} onChange={this.onChangeSex.bind(this)} className="form-control">
        <option value="select">Select a sex</option>
        <option value="F">Female</option>
        <option value="M">Male</option>
        <option value="U">Unsexed</option>
      </select>
      </div>
    )
  }
}

class SelectBoxCID extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'select'};
  }
  onChangeCID(CID) {
    this.setState(
      {
      value: CID.target.value
    })
  }
  render(){
    return (
      <div className="App-select-list">
      <label htmlFor="CID" >CID :  </label>
      <select value={this.state.value} onChange={this.onChangeCID.bind(this)} className="form-control">
        <option value="select">Select a CID</option>
        <option value="00001">00001</option>
        <option value="00002">00002</option>
        <option value="00003">00003</option>
      </select>
      </div>
    )
  }
}

class App extends Component {
  render() {
    const columns = [{
      Header: 'Slides and Organs',
      columns: [{
        Header: 'Slide #',
        accessor: 'slide#',
        Cell: props => <span className='number'>{props.value}</span>
      }, {
        Header: 'Organ',
        id: 'organ',
        accessor: d => d.organ
      }]
    }, {
      Header: 'Observation',
      columns: [{
        Header: 'Site',
        accessor: 'site' },{
        Header:'Morphology',
        accessor:'morphology'},{
        Header:'Qualifier',
        accessor:'qualifier'
      }]
    }]

    return (
      <div className="App">

          <div className="App-header">
            <h1 className="App-header-h1-title"><img src={logo} className="App-logo" alt="logo" /> Micropath 2.0</h1>
            <h2 className="App-header-h2-title">Data Entry</h2>
          </div>

          <div className="App-data-entry">
             <SelectBoxExpTxt />
             <SelectBoxPathologist />
             <SelectBoxSex />
             <SelectBoxCID />
          </div>

         <br></br>
         <div className="TabForm">
            <h3 className="TabFormTitle">Slides and Organs</h3>
            <br></br>
            <ReactTable className="-striped"
            getTdProps={(state, rowInfo, column) => {
              if (typeof rowInfo != 'undefined') {
                return {
                  onClick: e => {
                    console.log('A Td Element was clicked!')
                    console.log('it produced this event:', e)
                    console.log('It was in this column:', column)
                    console.log('It was in this row:', rowInfo)
                  }
                }
              }
            }}
              data={makeData()}
              columns={columns}
           />
        </div>
      <div className="ButtonBlock">
      <button className="saveButton"
        onClick={saveData}>{this.props.label}Save</button>
      <button className="cancelButton"
       onClick={cancelData}>{this.props.label}Cancel</button>
      </div>
      </div>
);
  }
}

function saveData(){

}
function cancelData(){

}

  function makeData () {
    return [
      {
        "slide#": "1",
        "organ": "Brain",
        "site": "Frontal Lobe",
        "morphology":"Tumor",
        "qualifier":"Large"
      },
      {
        "slide#": "2",
        "organ": "Speen",
        "site": "Lobe",
        "morphology":"Ruptured",
        "qualifier":"1"
      },
      {
        "slide#": "division",
        "organ": "society",
        "site": 3
      },
      {
        "slide#": "lamp",
        "organ": "point",
        "site": 2
      },
      {
        "slide#": "argument",
        "organ": "insurance",
        "site": 13
      },
      {
        "slide#": "pets",
        "organ": "fan",
        "site": 27
      },
      {
        "slide#": "learning",
        "organ": "board",
        "site": 9
      },
      {
        "slide#": "observation",
        "organ": "drink",
        "site": 28
      },
      {
        "slide#": "burst",
        "organ": "glove",
        "site": 1
      },
      {
        "slide#": "acoustics",
        "organ": "animal",
        "site": 19
      },
      {
        "slide#": "beetle",
        "organ": "branch",
        "site": 25
      },
      {
        "slide#": "invention",
        "organ": "servant",
        "site": 14
      },
      {
        "slide#": "letters",
        "organ": "driving",
        "site": 12
      },
      {
        "slide#": "seashore",
        "organ": "metal",
        "site": 18
      },
      {
        "slide#": "cat",
        "organ": "stranger",
        "site": 26
      },
      {
        "slide#": "group",
        "organ": "dinner",
        "site": 20
      },
      {
        "slide#": "mom",
        "organ": "pipe",
        "site": 27
      },
      {
        "slide#": "desk",
        "organ": "pail",
        "site": 6
      },
      {
        "slide#": "oranges",
        "organ": "interest",
        "site": 22
      },
      {
        "slide#": "umbrella",
        "organ": "legs",
        "site": 9
      },
      {
        "slide#": "carpenter",
        "organ": "apparel",
        "site": 19
      },
      {
        "slide#": "seat",
        "organ": "wrench",
        "site": 14
      },
      {
        "slide#": "carpenter",
        "organ": "steam",
        "site": 27
      },
      {
        "slide#": "chess",
        "organ": "bread",
        "site": 21
      },
      {
        "slide#": "men",
        "organ": "pie",
        "site": 5
      },
      {
        "slide#": "group",
        "organ": "action",
        "site": 21
      },
      {
        "slide#": "coil",
        "organ": "mine",
        "site": 11
      },
      {
        "slide#": "care",
        "organ": "partner",
        "site": 17
      },
      {
        "slide#": "queen",
        "organ": "cows",
        "site": 20
      },
      {
        "slide#": "wilderness",
        "organ": "cracker",
        "site": 24
      },
      {
        "slide#": "chair",
        "organ": "scarecrow",
        "site": 5
      },
      {
        "slide#": "cast",
        "organ": "nation",
        "site": 16
      },
      {
        "slide#": "fear",
        "organ": "wave",
        "site": 28
      },
      {
        "slide#": "cook",
        "organ": "drug",
        "site": 2
      },
      {
        "slide#": "thrill",
        "organ": "marble",
        "site": 25
      },
      {
        "slide#": "ship",
        "organ": "muscle",
        "site": 29
      },
      {
        "slide#": "drug",
        "organ": "suit",
        "site": 13
      },
      {
        "slide#": "edge",
        "organ": "statement",
        "site": 19
      },
      {
        "slide#": "chickens",
        "organ": "start",
        "site": 20
      },
      {
        "slide#": "donkey",
        "organ": "laugh",
        "site": 14
      },
      {
        "slide#": "tiger",
        "organ": "tendency",
        "site": 27
      },
      {
        "slide#": "steam",
        "organ": "argument",
        "site": 17
      },
      {
        "slide#": "riddle",
        "organ": "adjustment",
        "site": 15
      },
      {
        "slide#": "silver",
        "organ": "women",
        "site": 2
      },
      {
        "slide#": "month",
        "organ": "babies",
        "site": 13
      },
      {
        "slide#": "van",
        "organ": "flowers",
        "site": 29
      },
      {
        "slide#": "yak",
        "organ": "book",
        "site": 5
      },
      {
        "slide#": "quicksand",
        "organ": "fall",
        "site": 11
      },
      {
        "slide#": "beggar",
        "organ": "dinner",
        "site": 4
      },
      {
        "slide#": "money",
        "organ": "mind",
        "site": 0
      }
    ]
  }

export default App;
