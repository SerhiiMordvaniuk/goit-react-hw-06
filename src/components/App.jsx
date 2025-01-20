import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearschBox from "./SearchBox/SearschBox";
import InitialContacts from "./InitialContacts.json";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const [contactList, setContactList] = useState(() => {
    const localContacts = JSON.parse(localStorage.getItem("contactlist"));
    if (localContacts !== null) {
      return localContacts;
    }
    return InitialContacts;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContactList((prev) => {
      return [newContact, ...prev];
    });
  };
  const deleteContact = (id) => {
    setContactList((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("contactlist", JSON.stringify(contactList));
  }, [contactList]);

  const visibleContacts = contactList.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <>
      <Provider store={store}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        {/* <SearschBox filter={filter} onSearch={setFilter} /> */}
        <ContactList contactList={visibleContacts} onDelete={deleteContact} />
      </Provider>
    </>
  );
}

export default App;
