import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons.jsx';
import s from './Feedback.module.css';

export default function FeedbackOptions({ options, onIncrementFeetback }) {
  return (
    <ul className={s.list}>
      {options.map(([key]) => (
        <li key={key} className={s.item}>
          <Buttons
            feedbackName={key}
            onIncrementFeetback={onIncrementFeetback}
          />
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  onIncrementFeetback: PropTypes.func.isRequired,
};
