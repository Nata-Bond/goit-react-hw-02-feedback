import React, { Component } from "react";
import Section from "./section/Section";
import FeedbackOptions from "./feedback-options/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import { feedbackData } from "../data/feedbackData";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addValue = (mark) => {
    this.setState((prevState) => {
      return {
        [mark]: prevState[mark] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={"Please leave feedback"} children>
          <FeedbackOptions
            options={feedbackData}
            onLeaveFeedback={this.addValue}
          />
        </Section>
        <Section title={"Statistics"} children>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}
