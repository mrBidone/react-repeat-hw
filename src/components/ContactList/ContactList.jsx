import Contact from "../Contact/Contact";

const ContactList = ({ filteredContacts, onDeleteContact }) => {
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
