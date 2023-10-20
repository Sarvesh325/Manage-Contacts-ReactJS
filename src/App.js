import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });
  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };

  const remove = (id) => {
    const updatedlist = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedlist);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} remove={remove} />
    </>
  );
}

export default App;
