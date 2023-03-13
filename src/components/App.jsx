import { useState, useEffect } from 'react';
import Form from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledTitle, Box } from './App.styled';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ).length
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filtredContacts = getFiltredContacts();
  return (
    <Box>
      <StyledTitle>Phonebook</StyledTitle>
      <Form onSubmit={addNewContact} />
      <StyledTitle>Contacts</StyledTitle>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={filtredContacts} onDeleteContact={deleteContact} />
    </Box>
  );
}
