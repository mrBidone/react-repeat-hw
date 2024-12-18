import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts && JSON.parse(savedContacts).length > 0
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });
  const [filteredValue, setFilteredValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const handleFilter = (e) => {
    const value = e.target.value;

    setFilteredValue(value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filteredValue.toLowerCase());
  });

  const onAddContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid() };

    setContacts([finalContact, ...contacts]);
  };

  console.log(contacts);

  const onDeleteContact = (contactId) => {
    setContacts((finalContact) => {
      return finalContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox filteredValue={filteredValue} handleFilter={handleFilter} />
      <ContactForm onAddContact={onAddContact} />
      <ContactList
        onDeleteContact={onDeleteContact}
        filteredContacts={filteredContacts}
      ></ContactList>
    </div>
  );
};

export default App;
