import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('myContacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const normalizedFilter = name.toLowerCase();
    const checkByName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (checkByName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  }

  function deleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  function changeFilter(event) {
    setFilter(event.currentTarget.value);
  }

  function getFiltredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <section className={css.phonebook}>
      <div className={css.phonebook__wrap}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>

      <div className={css.contacts__wrap}>
        <h2 className={css.phonebook__title}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
      </div>

      <ContactList
        contacts={getFiltredContacts()}
        onDeleteContact={deleteContact}
      />
    </section>
  );
}
