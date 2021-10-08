// Imports
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import Signup from './components/authenticate/Signup';
import Login from './components/authenticate/Login';
import About from './components/pages/About'
import HomeContainer from './components/pages/HomeContainer';
import ProfileContainer from './components/pages/ProfileContainer';
import EditContainer from './components/pages/EditContainer';
import NewsFeed from './components/pages/NewsFeedContainer';
import AlbumsContainer from './components/pages/AlbumsContainer';


const familyNames = ["ZARDERS", "ZARDES", "ZARDIS", "ZARDIRS"];

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      console.log('is Authenticated: >>> false');
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return ( 
    <Router>
      <div>
          <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
            <Switch>
              {/* HOME */}
              <Route exact path="/" render={() => <HomeContainer familyNames={familyNames}/>} />
              {/* ABOUT */}
              <Route path='/about' component={ About } />
              {/* SIGN UP */}
              <Route path='/signup' component={ Signup } />
              {/* LOGIN  */}
              <Route path='/login' render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} 
                setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
              {/* PROFILE */}
              <PrivateRoute exact path="/profile" component={ProfileContainer} 
                user={currentUser} handleLogout={handleLogout} setIsAuthenticated={setIsAuthenticated}/>
              {/* EDIT BIO*/}
              <PrivateRoute path="/profile/edit" component={EditContainer}
                user={currentUser} setCurrentUser={setCurrentUser}/>
              {/* NEWS FEED*/}
              <PrivateRoute path="/profile/newsfeed" component={NewsFeed}
                user={currentUser}/>
              {/* ALBUMS*/}
              <PrivateRoute path="/profile/albums" component={AlbumsContainer}
                user={currentUser}/>
            </Switch>
          </div>
          <Footer />
    </Router>
  );
}

export default App;

