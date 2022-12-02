import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux';
import { Contacts } from './Contacts';
import css from './App.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);

  function getFiltredContacts() {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getFiltredContacts();
  console.log(visibleContacts);

  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <li className={css.contact__item} key={contact.id}>
          <Contacts contact={contact} />
        </li>
      ))}
    </ul>
  );
};
