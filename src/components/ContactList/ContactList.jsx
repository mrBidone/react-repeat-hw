import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filteredValue = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filteredValue.toLowerCase());
  });

  const onDeleteContact = (contactId) => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
