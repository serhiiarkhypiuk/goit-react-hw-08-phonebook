import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    // navigate('/contacts', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>

      <label htmlFor="login">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        Sign up
      </button>
    </form>
  );
};

export default RegisterForm;
