import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
// import { nanoid } from 'nanoid';
import css from './App.module.css';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('myContacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('myContacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function getFiltredContacts() {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }

  return (
    <section className={css.phonebook}>
      <div className={css.phonebook__wrap}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={css.contacts__wrap}>
        <h2 className={css.phonebook__title}>Contacts</h2>
        <Filter />
      </div>

      <ContactList />
    </section>
  );
}
