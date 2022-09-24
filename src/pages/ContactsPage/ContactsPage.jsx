import ContactEditModal from '../../components/PhoneBook/EditContactModal/EditContactModal';
import ContactsFilter from '../../components/PhoneBook/Filter/Filter';
import ContactsForm from '../../components/PhoneBook/AddContactForm/AddContactForm';
import ContactsList from '../../components/PhoneBook/ContactsList/ContactsList';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const showModal = useSelector(state => state.contacts.showModal);

  return (
    <div>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />

      {showModal && <ContactEditModal />}
    </div>
  );
};

export default ContactsPage;
