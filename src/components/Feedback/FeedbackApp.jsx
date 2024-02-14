import React from 'react';

import { StyledButton, StyledWrapper } from './FeedbackApp.styled.js';

const FeedbackApp = ({ onLeaveFeedback }) => (
  <StyledWrapper>
    <StyledButton type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </StyledButton>
    <StyledButton type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </StyledButton>
    <StyledButton type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </StyledButton>
  </StyledWrapper>
);
export default FeedbackApp;

// import React, { Component } from 'react';

// class FeedbackApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <div>
//           <button onClick={() => this.handleFeedback('good')}>Good</button>
//           <button onClick={() => this.handleFeedback('neutral')}>
//             Neutral
//           </button>
//           <button onClick={() => this.handleFeedback('bad')}>Bad</button>
//         </div>
//         <h2>Statistics</h2>
//         <div>
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default FeedbackApp;
