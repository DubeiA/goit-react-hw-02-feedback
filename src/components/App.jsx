import React, { Component } from 'react'
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics'
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import {Notification} from "./Notification/Notification"

class App extends Component { 

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleIncrementReview = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }))
  };
  
  countTotalFeedback = () => { 
  return this.state.good + this.state.neutral + this.state.bad
    
  }

  handltPositive = () => {
    
    return (this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)).toFixed(2)
  }

  render() {
    const { good , neutral , bad} = this.state
  
      return <div
       style={{
        textAlign: 'center',
        fontSize: 24,
        color: '#010101'
      }}>
       

        <Section title = "Please leave your feedback">
           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrementReview}></FeedbackOptions>
       </Section>
     

         
        <Section title='Statistick'>
          {this.countTotalFeedback() > 0
          ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.handltPositive()}>
          </Statistics>
          : <Notification message='There is no feedback' />}
           </Section>
         
        </div>
       
     
   }
}

export default App;
