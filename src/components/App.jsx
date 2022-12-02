import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('myContacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('myContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <main className={css.phonebook}>
      <section className={css.phonebook__wrap}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm />
      </section>

      <section className={css.contacts__wrap}>
        <h2 className={css.phonebook__title}>Contacts</h2>
        <Filter />
      </section>

      <ContactList />
    </main>
  );
}
