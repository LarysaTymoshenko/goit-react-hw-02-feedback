import React from 'react';
import PropTypes from 'prop-types';
import s from './Buttons.css';

const Buttons = ({ feedbackName, onIncreamentFbAmount }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => onIncreamentFbAmount(feedbackName)}
        className={s.button}
      ></button>
    </>
  );
};
export default Buttons;
Buttons.propTypes = {
  feedbackName: PropTypes.string.isRequired,
  onIncreamentFbAmount: PropTypes.func.isRequired,
};
