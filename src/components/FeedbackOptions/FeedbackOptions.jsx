import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons.jsx';
import s from './Feedback.module.css';

export default function FeedbackOptions({ options, onIncreamentFbAmount }) {
  return (
    <div className={s.feedback}>
      <ul className={s.list}>
        {options.map(([key]) => (
          <li key={key} className={s.item}>
            <Buttons
              feedbackName={key}
              onIncreamentFbAmount={onIncreamentFbAmount}
            ></Buttons>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  onIncrementFeetback: PropTypes.func.isRequired,
};
