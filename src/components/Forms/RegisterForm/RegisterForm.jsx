import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {StyledButton} from "../../atoms/Button/Button.styled";
import {StyledInput} from "../../atoms/Input/Input.styled";
import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child){
    margin-bottom: 10px;
  }
`

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ width: '70%' }}>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'inherit', justifyContent: 'center' }}
      >
        <StyledLabel htmlFor="name">
          Name
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </StyledLabel>

        <StyledLabel htmlFor="login">
          Email
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
          Sign up
        </StyledButton>
      </form>
    </div>
  );
};

export default RegisterForm;
