import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledNavLInk = styled(NavLink)`
  border-radius: 15px;
  margin-top: 0.5rem;
  border: 3px solid white;
  background-color: rgba(201, 240, 273, 0.7);
  cursor: pointer;
  font-size: 16px;
  padding: 5px 3rem;
  &:first-child {
    margin-right: 10px;
  }
`;

const AuthNavigation = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <li>
          <StyledNavLInk to="/logIn">Log in</StyledNavLInk>
        </li>
        <li>
          <StyledNavLInk to="/register">Register</StyledNavLInk>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavigation;
