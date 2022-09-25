import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ btnText, style, onClick }) => {
  return <StyledButton
    onClick={onClick}
    style={style}
    type="submit">{btnText}
  </StyledButton>;
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
