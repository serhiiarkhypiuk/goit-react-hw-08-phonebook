import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
                              children,
                              redirectPath = '/',
                              restricted = false,
                            }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PublicRoute;
