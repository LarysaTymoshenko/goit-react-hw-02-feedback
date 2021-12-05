import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import './App.css';

export default class App extends Component() {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedbackName => {
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  render() {
    // const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback() > 0;

    return (
      <div className="App">
        <FeedbackOptions
          options={['good', ' neutral', 'bad']}
        ></FeedbackOptions>
      </div>
    );
  }
}
