import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ onEdit }) => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.item}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
