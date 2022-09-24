import React from 'react';
import { StyledList, StyledLI } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { openModal } from 'redux/contacts/phoneBookSlice';
import Button from '../../atoms/Button/Button';

const ContactsList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
    {filteredContacts.length ? (
      <p>We can't find this contacts in your book!</p>
    ) : (
      <StyledList>
        {filteredContacts.map(contact => (
          <StyledLI key={contact.id}>
            <span>{contact.name}: {contact.number}{' '}</span>
            <Button type="submit"
                    onClick={() => dispatch(openModal(contact.id))}
                    btnText='Edit'/>
            <Button type="button"
                    onClick={() => dispatch(contactsOperations.deleteContact(contact.id))}
                    btnText='Delete'/>
          </StyledLI>
        ))}
      </StyledList>
    )}
    </>
  )
}

export default ContactsList;
