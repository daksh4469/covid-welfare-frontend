import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetStarted from './GetStarted'
import IntroPage from './IntroPage'
import MyProfile from './MyProfile'
import Notifications from './Notifications'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit,faToggleOff,faToggleOn,faMapMarkedAlt  } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Navbar from './Navbar';
import Seek from './Seek'
import { Smap } from './Smap';
import Provide from './Provide';
import { UserProvider } from './UserContext';
import EditProfile from './EditProfile';
library.add(faUserEdit,faToggleOff,faToggleOn,faMapMarkedAlt)
class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return ( 
      <div>
        <UserProvider value={this.state}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <IntroPage />
            </Route>          
            <Route exact path="/GetStarted" >
              <GetStarted />
            </Route>          
            <Route path="/MyProfile/:username/">
              <MyProfile />
            </Route>          
            <Route exact path="/Navbar/:username/">
              <Navbar />
            </Route>
            <Route exact path="/Seek/:username/">
              <Seek />
            </Route>
            <Route exact path="/Provide/:username/">
              <Provide />
            </Route>
            <Route exact path="/Smap/:username/">
              <Smap />
            </Route>
            <Route exact path="/EditProfile/:username/">
              <EditProfile />                                       
            </Route>
            <Route exact path="/Notifications/:username/">
              <Notifications />
            </Route>
          </Switch>
        </Router>
        </UserProvider>
      </div>
    );
  }
}
 
export default App;
