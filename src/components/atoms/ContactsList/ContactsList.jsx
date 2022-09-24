import React from 'react';
import ListItem from '../ContactsListItem/ContactsListItem';
import { StyledList } from './ContactsList.styled';
import { useSelector } from "react-redux";
import {getFilter} from "../../../redux/phoneBookSelectors";
import {useDeleteContactMutation, useFetchContactsQuery} from "../../../redux/phoneBookSlice";
import { ThreeDots } from  'react-loader-spinner'

const ContactsList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts } = useFetchContactsQuery();
  const getFilteredContacts = (contacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactFilterList = contacts ? getFilteredContacts(contacts) : null;
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
    {contacts ? (
      <StyledList>
        {contactFilterList?.map(contact => (
          <ListItem key={contact.id} contact={contact} onClick={deleteContact} />
        ))}
      </StyledList>
    ) : (<ThreeDots
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center'}}
        visible={true}/>
    )}
    </>
  )
}

export default ContactsList;
