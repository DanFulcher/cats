import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { colours } from '../../styles';
import home from '../../assets/home.svg';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Nav = ({ links }) => (
  <Navigation>
    {links.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        style={{
          fontSize: 21,
          color: '#000',
          fontWeight: 'bold',
        }}
        activeStyle={{
          color: colours.primary,
        }}
      >
        {link.label}
      </NavLink>
    ))}
    <NavLink to="/">
      <img src={home} alt="home icon" />
    </NavLink>
  </Navigation>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Nav;
