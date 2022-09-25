import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import {StyledButton} from "../../atoms/Button/Button.styled";
import {StyledInput} from "../../atoms/Input/Input.styled";
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child){
    margin-bottom: 10px;
  }
`;

const LogInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'inherit', justifyContent: 'center' }}>
        <StyledLabel htmlFor="login">
          E-mail
          <StyledInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </StyledLabel>

        <StyledLabel htmlFor="password">
          Password
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledButton type="submit">
          Log In
        </StyledButton>
      </form>
      <p>
        If you don`t have an account, please{' '}
        <Link to="/register">register</Link>!
      </p>
  </div>
  );
};

export default LogInForm;
