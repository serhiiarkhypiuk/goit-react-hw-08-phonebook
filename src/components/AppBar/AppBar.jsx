import { useSelector } from 'react-redux';
import Navigation from './GeneralNavigation/GeneralNavigation';
import UserMenu from './Menu/Menu';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div>
      {isLoggedIn && <Navigation />}
    </div>
  );
};

export default AppBar;
