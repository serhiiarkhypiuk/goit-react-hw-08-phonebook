import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from 'redux/contacts/phoneBookSlice';
import Input from '../../atoms/Input/Input'

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(event.currentTarget.value);
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
      <Input
        type="search"
        name="filter"
        onChange={handleChange}
        required={false}
        value={filter}
        autocomplete='off'
        placeholder='Search contacts...'
      />
  )
}

export default Filter;
