import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

const Input = ({
                 type,
                 name,
                 value = '',
                 onChange,
                 title,
                 required,
                 pattern,
                 placeholder
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required={required}
      value={value}
      onChange={onChange}
      autoComplete="off"
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
