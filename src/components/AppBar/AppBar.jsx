import { useSelector } from 'react-redux';
import Navigation from './GeneralNavigation/GeneralNavigation';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return (
    <div>
      {isLoggedIn && <Navigation />}
    </div>
  );
};

export default AppBar;
