import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilter} from "../../../redux/phoneBookSelectors";
import Input from '../Input/Input'
import filterContact from "../../../redux/phoneBookActions";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Input
      type="text"
      name="search"
      value={value}
      onChange={(event) => {
        dispatch(filterContact(event.target.value))}}
      required={false}
    />
  )
}

export default Filter
