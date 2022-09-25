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

  const editModal = (id) => dispatch(openModal(id));
  const deleteContact = (id) => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
    {filteredContacts.length === 0 ? (
      <p>We can't find this contacts in your book!</p>
    ) : (
      <StyledList>
        {filteredContacts.map(contact => (
          <StyledLI key={contact.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'space-between'}}>
            <span>
              {contact.name}: {contact.number}{' '}
            </span>
            <div>
              <Button type="submit"
                      onClick={() => editModal(contact.id)}
                      btnText='Edit'
                      style={{ marginRight: '10px', paddingTop: '5px', paddingBottom: '5px' }}/>
              <Button type="button"
                      onClick={() => deleteContact(contact.id)}
                      btnText='Delete'
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}/>
            </div>
          </StyledLI>
        ))}
      </StyledList>
    )}
    </>
  )
}

export default ContactsList;
