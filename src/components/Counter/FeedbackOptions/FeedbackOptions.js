import s from './FeedbackOptions.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={s.list}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                className={s.btn}
                option={option}
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
