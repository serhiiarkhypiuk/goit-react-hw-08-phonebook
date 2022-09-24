import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const allowedEmoji = [...'😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉'];

  return (
    <div>
      <span>
        Welcome, {name}{' '}
        <span role="img" aria-label="hello">
          {[...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]}
        </span>
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logout());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
