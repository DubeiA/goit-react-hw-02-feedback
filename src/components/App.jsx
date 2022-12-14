import React, { Component } from 'react'

class App extends Component { 

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,

    }))
  }
  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }
  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      
    }))
  }
  
  countTotalFeedback = () => { 
  return this.state.good + this.state.neutral + this.state.bad
    
  }

  handltPositive = () => {
    
    return (this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)).toFixed(2)
  }

  render() {
    const { good , neutral , bad} = this.state
  

    // const total = (good * 100 / (good + neutral + bad)).toFixed(2)
      return <div
       style={{
        textAlign: 'center',
        fontSize: 24,
        color: '#010101'
      }}>
            <h1>Please leave feedabck</h1>
        
            <button type="button" onClick={this.addGoodFeedback}>Good</button>
            <button type="button" onClick={this.addNeutralFeedback}>Neutral</button>
            <button type="button" onClick={this.addBadFeedback}>Bad</button>

            <h2>Statistick</h2>

            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad:{bad} </p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.handltPositive()}%</p>
        </div>
       
     
   }
}

export default App;



// import Feedback from "./Feedback/Feedback";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Feedback />
//     </div>
//   );
// };
