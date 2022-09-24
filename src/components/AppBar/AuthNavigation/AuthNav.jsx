import { NavLink } from 'react-router-dom';

const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/logIn">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavigation;
