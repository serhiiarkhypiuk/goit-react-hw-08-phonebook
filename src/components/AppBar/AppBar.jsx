import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation/AuthNav';
import Navigation from './GeneralNavigation/GeneralNavigation';
import UserMenu from './Menu/Menu';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </div>
  );
};

export default AppBar;
