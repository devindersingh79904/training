import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alert from './component/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './component/routing/PrivateRoute';
import { loadUser, setLoading } from './actions/authAction';
import { getDrives } from './actions/driveAction';
import { getVolunteers } from './actions/volunteerAction';
import AddAttendence from './component/volunteer/AddAttendence';
import AddVolunteer from './component/volunteer/AddVolunteer';
import AddDrive from './component/drive/AddDrive';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(setLoading());
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className='wrapper'>
          <Navbar />
          <div className='page-wrapper'>
            <div className='container-fluid'>
              <Alert />
              {/* <Spinner /> */}
              <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/add-volunteer' component={AddVolunteer} />
                <Route exact path='/add-drive' component={AddDrive} />
                <Route exact path='/add-attendence' component={AddAttendence} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
