import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './Title.styled';

const Title = ({ headerTitle }) => {
  return <StyledLabel htmlFor={headerTitle}>{headerTitle}</StyledLabel>;
};

Title.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
export default Title;
