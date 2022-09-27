import React from 'react';
import ContactForm from "./ContactForm/ContactForm";
import {ContactList} from "./ContactLIst/ContactList";
import { Filter } from "./Filter/Filter";
import {Title} from "./Title/Title";
import styles from '../App.module.css'
import { nanoid } from 'nanoid';
import { INewContact } from '../interfaces';


interface IState{
  contacts: INewContact[];
  filter: string;
}



export default class App extends React.Component <unknown, IState> {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(getContacts as  string );
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(_:unknown, prevState: { contacts: Partial<INewContact[]> }):void {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact: Partial<INewContact>): void => {

  const contactsCheck = this.state.contacts.some(
    ({ name }) => name === newContact.name,
  );
  if (contactsCheck ) {
    alert(`${newContact.name} is already in contacts book`);
    return;
  }
    this.setState(prevState => ({
      contacts: [{ ...newContact, id:nanoid()}, ...prevState.contacts] as INewContact[],
  }));
};
  onChange = (event: React.ChangeEvent<HTMLElement>): void => {
  const { value } = event.target as unknown as EventTarget & { value: keyof IState };
    this.setState({ filter: value } as unknown as Readonly<IState>);
  };
onButtonDelete =  (id: string) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  this.reset();
};
  reset = () => {
    this.setState({ filter: '' });
  };

render(){
  const { filter, contacts } = this.state;
  const loweredContacts = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(loweredContacts),);
  return (
    <>
    <section className={styles.section}>
      <Title text="PhoneBook" />
      <ContactForm addContact={this.addContact}  />
      <Title text="Contacts" />
        <Filter value={this.state.filter} onChange={this.onChange} />
      <ContactList filtered={filteredContacts} onButtonDelete={this.onButtonDelete}/>
      </section>
    </>
  )
}

};