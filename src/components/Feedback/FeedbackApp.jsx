import React from 'react';
import styled from 'styled-components';

const FeedbackApp = ({ onLeaveFeedback }) => (
  <div style={{ display: 'inline-flex', gap: '5px' }}>
    <button type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </div>
);

export default FeedbackApp;

export const StyledWrapper = styled;
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
