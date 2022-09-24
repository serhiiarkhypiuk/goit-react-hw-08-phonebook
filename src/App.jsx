import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {Provider, useDispatch} from 'react-redux';
import { Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { authOperations } from 'redux/auth';
import PrivateRoute from './components/Routes/PrivateRoutes';
import PublicRoute from './components/Routes/PublicRoutes';
import { store } from './redux/store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route
            path="logIn"
            element={
              <PublicRoute redirectPath="/contacts" restricted>
                <LogInPage/>
              </PublicRoute>
            }
            />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage/>
              </PublicRoute>
            }
            />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectPath="/login">
                <ContactsPage/>
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppWrapper;
