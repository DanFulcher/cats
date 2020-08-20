import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colours } from '../../styles';

const Button = ({ text, onClick }) => (
  <But onClick={onClick}>
    {text}
  </But>
);

const But = styled.button`
  background: ${colours.primary};
  padding: 15px 20px;
  color: #fff;
  border: 1px solid ${colours.primary};
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  width: 100%;
  &:hover {
    background: none;
    color: ${colours.primary};
  }
  &:focus {
    outline: none;
  }
`;
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
