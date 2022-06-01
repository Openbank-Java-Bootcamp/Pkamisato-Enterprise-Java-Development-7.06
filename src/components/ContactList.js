import React, { useState } from "react";
import ContactCard from "./ContactCard";
import data from "../contacts.json";

export default function ContactList() {
  const [contacts, setContacts] = useState(data.slice(0, 5));
  const [fullData, setFullData] = useState(data.slice(6, data.length - 1));

  const getRandomContact = () => {
    const randomContact = fullData[Math.floor(Math.random() * fullData.length)];
    const filteredContacts = fullData.filter((contact) => {
      return contact !== randomContact;
    });
    setFullData(filteredContacts);
    setContacts([...contacts, randomContact]);
  };

  const sortByName = () => {
    contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts([...contacts]);
  };

  const sortByPopularity = () => {
    contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts([...contacts]);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div>
      <button onClick={getRandomContact}>Add Random Contact </button>
      <button onClick={sortByName}>Sort by name </button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table className="table-contacts">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>
              Won
              <br /> Oscar
            </th>
            <th>
              Won
              <br /> Emmy
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                contact={contact}
                clickToDelete={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
