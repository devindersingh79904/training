import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Register from './component/auth/Register';
import Alert from './component/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='page-wrapper'>
            <div className='container-fluid'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
