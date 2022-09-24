import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { closeModal } from 'redux/contacts/phoneBookSlice';

const modalRoot = document.querySelector('#modal-root');

const ContactEditModal = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const editContact = useSelector(state => state.contacts.editContact);

  useEffect(() => {
    setId(editContact[0].id);
    setName(editContact[0].name);
    setNumber(editContact[0].number);
  }, [editContact]);

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(contactsOperations.updateContact({ id, name, number }));
    dispatch(closeModal());
  };

  return createPortal(
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            {' '}
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            {' '}
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Save edit contact
          </button>
          <button type="submit" onClick={() => dispatch(closeModal())}>
            Exit
          </button>
        </form>
      </div>
    </div>,
    modalRoot,
  );
};

export default ContactEditModal;
