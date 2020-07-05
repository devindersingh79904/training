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
import DoneDriveVol from './component/drive/DoneDriveVol';
import AttendedDriveStudents from './component/drive/AttendedDriveStudents';
import ShortlistedDriveStudent from './component/drive/ShortlistedDriveStudent';
import StudentProfile from './component/student/StudentProfile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(setLoading());
    store.dispatch(loadUser());
  }, []);
  var storeData;
  store.subscribe(() => {
    storeData = store.getState();
  });
  return (
    <Provider store={store}>
      <Router>
        <div className='wrapper'>
          <Navbar />
          <div className='page-wrapper'>
            <div className='container-fluid'>
              <Alert />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/add-volunteer' component={AddVolunteer} />
                <PrivateRoute exact path='/add-student' component={AddStudent} />
                <PrivateRoute exact path='/add-drive' component={AddDrive} />
                <PrivateRoute exact path='/add-company' component={AddCompany} />
                <PrivateRoute
                  exact
                  path='/assign-drive-vol'
                  component={AssignDriveVol}
                />

                <PrivateRoute exact path='/mark-accepted' component={AcceptDriveVol} />
                <PrivateRoute exact path='/mark-present' component={DoneDriveVol} />

                <PrivateRoute
                  exact
                  path='/view-volunteers'
                  component={() => (
                    <ViewVolunteers/>
                  )}
                />
                <PrivateRoute exact path='/view-drives' component={ViewDrives} />
                <PrivateRoute exact path='/view-students' component={ViewStudents} />
                <PrivateRoute exact path='/view-companys' component={ViewCompanys} />
                <PrivateRoute exact path='/edit-drives' component={EditDrives} />
                <PrivateRoute exact path='/edit-students' component={EditStudent} />
                <PrivateRoute
                  exact
                  path='/attend-drive-students'
                  component={AttendedDriveStudents}
                />
                <PrivateRoute
                  exact
                  path='/shorlisted-drive-students'
                  component={ShortlistedDriveStudent}
                />
                <PrivateRoute
                  exact
                  path='/edit-volunteers'
                  component={EditVolunteers}
                />
                <PrivateRoute
                  exact
                  path='/drive-profile/:id'
                  component={DriveProfile}
                />
                <PrivateRoute
                  exact
                  path='/volunteer-profile/:id'
                  component={VolunteerProfile}
                />
                 <PrivateRoute
                  exact
                  path='/student-profile/:id'
                  component={StudentProfile}
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
