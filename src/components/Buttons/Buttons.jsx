import React from 'react';
import PropTypes from 'prop-types';
import s from './Buttons.css';

const Buttons = ({ onIncrementFeetback, feedbackName }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => onIncrementFeetback(feedbackName)}
        className={s.button}
      >
        {feedbackName}
      </button>
    </>
  );
};

Buttons.propTypes = {
  feedbackName: PropTypes.string.isRequired,
  onIncrementFeetback: PropTypes.func.isRequired,
};

export default Buttons;
