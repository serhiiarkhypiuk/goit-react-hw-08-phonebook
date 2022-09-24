import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  '/contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      // const { status } = await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const updateContact = createAsyncThunk(
  '/contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const operations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
};

export default operations;
