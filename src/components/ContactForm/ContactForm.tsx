import { Component } from 'react'
import styles from '../ContactForm/ContactForm.module.css';
import React from 'react';
import {INewContact} from '../../interfaces'
interface IState{
  name: string,
  number:string
}
interface IProps{
  addContact: (obj: Partial<INewContact>) => void


 }

export default class ContactForm extends Component<IProps, IState> {

  state = {
    name: '',
    number: '',
  };
  handleChanger = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as EventTarget & { name: keyof IState ,value: string};
    this.setState({ [name]: value } as Readonly <IState>);
  };

  formSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      
    const newContact = {
        name: '',
    number: '',
      } as  Partial<INewContact>
     this.props.addContact(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render():JSX.Element {
    return (
      <>
        <form className={styles.form} onSubmit={this.formSubmit}>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
                        onChange={this.handleChanger}
                        placeholder="Name"
            />
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
                        onChange={this.handleChanger}
                        placeholder="Phone"
            />
                </label>
                <button type='submit' className={styles.button}>Add contacts</button>
        </form>
      </>
    )
  }
}
// ContactForm.propTypes = {
//     addContact:PropTypes.func.isRequired,
// }