import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from 'redux/contacts/phoneBookSlice';
import Input from '../../atoms/Input/Input'

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
      <Input
        type="search"
        name="filter"
        onChange={handleChange}
        required={false}
        autocomplete='off'
      />
  )
}

export default Filter;
