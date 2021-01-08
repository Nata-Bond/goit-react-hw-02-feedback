import React, { Component } from "react";
import Section from "./section/Section";
import Test from "./section/test/Test";

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

  countPositiveFeedbackPercentage = (a, b) => {
    return Math.round((b / a) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      totalFeedback,
      this.state.good
    );

    return (
      <>
        <Section title={"Please leave feedback"} children>
          <Test />
        </Section>

        <button type="button" onClick={() => this.addValue("good")}>
          Good
        </button>
        <button type="button" onClick={() => this.addValue("neutral")}>
          Neutral
        </button>
        <button type="button" onClick={() => this.addValue("bad")}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedback}%</p>
      </>
    );
  }
}
