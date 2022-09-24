import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './phoneBookActions';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
  showModal: false,
  editContact: {},
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    openModal: (state, action) => {
      state.showModal = true;
      state.editContact = state.items.filter(
        contact => contact.id === action.payload,
      );
    },
    closeModal: (state, _) => {
      state.showModal = false;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
    [contactsOperations.updateContact.fulfilled](state, action) {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});

export const { updateFilter, openModal, closeModal } = contactsSlice.actions;

export default contactsSlice.reducer;
