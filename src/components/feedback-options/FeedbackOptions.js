import React from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {/* <button type="button" onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button> */}

      {options.map((item) => {
        return (
          <button
            key={uuidv4()}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
