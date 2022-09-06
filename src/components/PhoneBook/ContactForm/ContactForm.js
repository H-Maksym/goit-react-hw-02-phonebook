import s from './ContactForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <form className={s.list}>
        {title && <h2>{title}</h2>}
        {children}
      </form>
    );
  }
}

ContactForm.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.element),
};
