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

  
  // countTotalFeedback = (addGoodFeedback, addNeutralFeedback, addBadFeedback) => { 
  //   let together = 0;
     
  //   together = addGoodFeedback + addNeutralFeedback + addBadFeedback
    
  // }

  // handltPositive = (state) => {
  //   let result = 0;
  //   result = Math.round(((this.state.good + this.state.neutral + this.state.bad) / this.state.good * 100))

  //   return result
  // }

  render() {
    const { good , neutral , bad} = this.state
  

    const total = (good * 100 / (good + neutral + bad)).toFixed(2)
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
            <p>Total: {good + neutral + bad}</p>
            <p>Positive feedback: {total}%</p>
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
