// import Counter from 'components/Counter/Counter';
import React, { Component } from 'react';
import Section from 'components/PhoneBook/Section';

import ContactForm from 'components/PhoneBook/ContactForm';
import Input from 'components/PhoneBook/Input';

import ContactList from 'components/PhoneBook/ContactList';
// import Notification from 'components/PhoneBook/Notification';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onDelContact = e => {
    const key = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== key),
    }));
  };

  //   onAddContact = (e) => {
  //   const key = e.target.id;
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(({id})=>id!==key)
  //   }));
  // };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <div
        style={{
          width: '450px',
          height: 'auto',
          // padding: '20px',
          // minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 30,
          // color: '#010101',
        }}
      >
        <h1>React homework</h1>
        <Section title="Phonebook">
          <ContactForm title="">
            <Input
              type="text"
              titleInput="name"
              name="name"
              value={name}
              handleInputChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <Input
              type="tel"
              titleInput="number"
              name="number"
              value={number}
              handleInputChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </ContactForm>
        </Section>

        <Section title="Contacts">
          {/* {this.countTotalFeedback() ? () : (
            <Notification message="No feedback given" />
          ) */}
          <Input
            type="text"
            titleInput="search"
            name="filter"
            value={filter}
            handleInputChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ContactList contacts={contacts} onDelContact={this.onDelContact} />
        </Section>
      </div>
    );
  }
}
