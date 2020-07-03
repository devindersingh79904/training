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
import AssignDriveVol from './component/drive/AssignDriveVol';
import AcceptDriveVol from './component/drive/AcceptDriveVol';
import AddVolunteer from './component/volunteer/AddVolunteer';
import AddDrive from './component/drive/AddDrive';
import AddCompany from './component/Company/AddCompany';
import ViewVolunteers from './component/volunteer/ViewVolunteers';
import ViewDrives from './component/drive/ViewDrives';
import ViewCompanys from './component/Company/ViewCompanys';
import DriveProfile from './component/drive/DriveProfile';
import VolunteerProfile from './component/volunteer/VolunteerProfile';
import EditVolunteers from './component/volunteer/EditVolunteer';
import EditDrives from './component/drive/EditDrives';
import AddStudent from './component/student/AddStudent';
import ViewStudents from './component/student/ViewStudents';
import EditStudent from './component/student/EditStudent';
import Error404 from './component/pages/Eror404';
import MarkAccepted from './component/drive/MarkAccepted';
import MarkPresent from './component/drive/MarkPresent';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(setLoading());
    store.dispatch(loadUser());

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
                <Route exact path='/add-student' component={AddStudent} />
                <Route exact path='/add-drive' component={AddDrive} />
                <Route exact path='/add-company' component={AddCompany} />
                <Route
                  exact
                  path='/assign-drive-vol'
                  component={AssignDriveVol}
                />

                <Route exact path='/mark-accepted' component={AcceptDriveVol} />
                <Route exact path='/mark-present' component={MarkPresent} />
                {/* <Route exact path='/add-attendence' component={AddAttendence} /> */}

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
                <Route exact path='/view-students' component={ViewStudents} />
                <Route exact path='/view-companys' component={ViewCompanys} />
                <Route exact path='/edit-drives' component={EditDrives} />
                <Route exact path='/edit-students' component={EditStudent} />
                <Route
                  exact
                  path='/edit-volunteers'
                  component={EditVolunteers}
                />
                <Route
                  exact
                  path='/drive-profile/:id'
                  component={DriveProfile}
                />
                <Route
                  exact
                  path='/volunteer-profile/:id'
                  component={VolunteerProfile}
                />
                <Route component={Error404} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
