import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth';

const LogInForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
    // navigate('/contacts', { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="login">
          E-mail
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
          Log In
        </button>
      </form>
      <p>
        If you don`t have an account, please{' '}
        <Link to="/register">register</Link>!
      </p>
    </div>
  );
};

export default LogInForm;
