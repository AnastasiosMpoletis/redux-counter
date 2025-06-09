import { Fragment } from 'react';
import Header from './components/Header.js'
import Auth from './components/Auth.js'
import Counter from './components/Counter.js';


function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
