import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header.js'
import Auth from './components/Auth.js'
import UserProfile from './components/UserProfile.js'
import Counter from './components/Counter.js';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
