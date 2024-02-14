import React from 'react';
import { Component } from 'react';
import FeedbackApp from './Feedback/FeedbackApp';
import Statistics from './Statistic/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div style={{ padding: '20px' }}>
        <h1>Please leave feedback</h1>
        <FeedbackApp onLeaveFeedback={this.handleLeaveFeedback} />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="">
            <Statistics good={good} neutral={neutral} bad={bad} />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
