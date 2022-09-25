import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import {StyledButton} from "../../atoms/Button/Button.styled";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const allowedEmoji = [...'😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <span>
        Welcome, {name}{' '}
        <span role="img" aria-label="hello">
          {[...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]}
        </span>
      </span>
      <StyledButton
        style={{ padding: '5px 1.5rem', marginTop: '0', marginLeft: '10px' }}
        type="button"
        onClick={() => {
          dispatch(authOperations.logout());
        }}
      >
        Log out
      </StyledButton>
    </div>
  );
};

export default UserMenu;
