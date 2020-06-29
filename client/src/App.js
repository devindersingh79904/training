import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alert from './component/layout/Alert';
import { Provider, connect } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './component/routing/PrivateRoute';
import { loadUser, setLoading } from './actions/authAction';
import AddAttendence from './component/volunteer/AddAttendence';
import AddVolunteer from './component/volunteer/AddVolunteer';
import AddDrive from './component/drive/AddDrive';
import ViewVolunteers from './component/volunteer/ViewVolunteers';
import ViewDrives from './component/drive/ViewDrives';
import { getVolunteers } from './actions/volunteerAction';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(setLoading());
    store.dispatch(loadUser());
    store.dispatch(getVolunteers());
    // eslint-disable-next-line
  }, []);
  var storeData;
  store.subscribe(() => {
    storeData = store.getState();
  });

  console.log(storeData);
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
                <Route
                  exact
                  path='/view-volunteers'
                  component={() => (
                    <ViewVolunteers title={`Props through component`} />
                  )}
                />
                {/* <Route
                  exact
                  path='/view-volunteers'
                  component={ViewVolunteers}
                /> */}
                {/* <Route
                  path='/dashboard'
                  render={(props) => (
                    <ViewVolunteers {...props} isAuthed={true} />
                  )}
                /> */}
                <Route exact path='/view-drives' component={ViewDrives} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
