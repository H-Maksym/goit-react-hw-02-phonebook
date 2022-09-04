// import Counter from 'components/Counter/Counter';
import React, { Component } from 'react';
import FeedbackOptions from 'components/Counter/FeedbackOptions';
import Statistics from 'components/Counter/Statistics';
import Section from 'components/Counter/Section';
import Notification from 'components/Counter/Notification';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const key = e.target.attributes.option.value;
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    const posFeedback = Number(
      (100 * (this.state.good / this.countTotalFeedback())).toFixed(2)
    );
    return posFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          width: '450px',
          height: 'auto',
          // padding: '20px',
          // minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 30,
          // color: '#010101',
        }}
      >
        <h1>React homework</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
