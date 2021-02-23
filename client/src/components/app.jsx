import React from 'react';
import ReactDOM from 'react-dom';
import Cows from './cows.jsx'
import ImpCow from './impcow.jsx'
import Addcow from './addcow.jsx'
import AddcowForm from './addcowform.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cowClicked: false,
      cowData: [],
      clickedCow: [],
      newCowClicked: false,
      newCowName: '',
      newCowDisc: ''
    }
    this.cowClick = this.cowClick.bind(this)
    this.newCow = this.newCow.bind(this)
    this.newCowHandler = this.newCowHandler.bind(this)
    this.submitCowHandler = this.submitCowHandler.bind(this)
    this.getCows = this.getCows.bind(this)
  }

  getCows() {
    fetch('http://127.0.0.1:3000/api/cows')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          cowsLoaded: true,
          cowData: result
        });
      },
      (error) => {
        this.setState({
          cowsLoaded: false,
          error: error
        });
      }
      )
  }
  componentDidMount() {
    this.getCows()
  }

  // componentDidMount() {
  //   fetch('http://127.0.0.1:3000/api/cows')
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       this.setState({
  //         cowsLoaded: true,
  //         cowData: result
  //       });
  //     },
  //     (error) => {
  //       this.setState({
  //         cowsLoaded: false,
  //         error: error
  //       });
  //     }
  //   )
  // }
  cowClick(data) {
    this.setState({
      cowClicked: true,
      clickedCow: data
    })
  }

  newCowHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    })
  }

  submitCowHandler(e) {
    let postObj = {
      cowname: this.state.newCowName,
      disc: this.state.newCowDisc
    }

    let postOptions = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(postObj)
    }

    fetch('http://localhost:3000/api/cows', postOptions)
      .then(
        this.setState({
          newCowClicked: false,
          newCowName: '',
          newCowDisc: ''
      }))
    this.getCows()
  }

  newCow() {
    this.setState({
      newCowClicked: true
    })
  }

  render() {
    let cowPrompt;
    if (this.state.newCowClicked) {
      cowPrompt = <AddcowForm nameValue={this.state.newCowName} discValue={this.state.newCowDisc} newCowHandler={this.newCowHandler} submitCowHandler={this.submitCowHandler}/>
    } else {
      cowPrompt = <Addcow newCow={this.newCow}/>
    }
    let importantCow;
    if (this.state.cowClicked) {
      importantCow = <ImpCow clickedCow={this.state.clickedCow}/>
    } else {
      importantCow = <div className='impname-false-text'>Click a Cow for Cow details!</div>
    }
    return (
      <div>
        <h1>Happy Cows!</h1>
        {cowPrompt}
        {importantCow}
        <Cows cowData={this.state.cowData} cowClick={this.cowClick}/>
      </div>
    )
  }

}

export default App;


/*
<Cows name={insertNameHere} disc={insertDiscHere}/>
<ImpCow name={insertNameHere} disc={insertDiscHere}/>
*/