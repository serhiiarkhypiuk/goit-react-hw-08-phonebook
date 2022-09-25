import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { closeModal } from 'redux/contacts/phoneBookSlice';
import {
  LabelModal,
  Overlay,
  Modal,
} from './EditContactModal.styled';
import Input from '../../atoms/Input/Input'
import Button from "../../atoms/Button/Button";

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

  const exitModal = () => dispatch(closeModal());

  return createPortal(
    <Overlay>
      <Modal>
        <form style={{ width: '400px', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <LabelModal htmlFor="name">
            {' '}
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </LabelModal>
          <LabelModal htmlFor="number">
            {' '}
            Number
            <Input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </LabelModal>
          <Button type="submit" onClick={handleSubmit} btnText='Save edit contact' />
          <Button type="submit" onClick={() => exitModal} btnText='Exit' />
        </form>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default ContactEditModal;
