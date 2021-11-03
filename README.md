# FamilyTies-Frontend

### `npm start` or `nodemon`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What it includes

* Mongoose user model / migration
* Settings for MongoDB
* Passport and passport-jwt for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* REACT JS FrameWork
* Axios as a fetch API

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| firstName | String | Must be provided |
| lastName | String | Must be provided |
| email | String | Must be unique / used for login |
| nmlsId | String | Must be unique |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Lead Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| firstName | String | Must be provided |
| lastName | String | Must be provided |
| phoneNumber | String | Must be provided |
| address | String | Must be provided |
| state | String | Must be provided |
| zipCode | String | Must be provided |
| email | String | Must be unique / used for login |
| userId | String | inherited from user |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Auth Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile |

### Profile and Leads Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | /leads | profile.js | show all leads |
| GET | /leads/:idx | profile.js | show one lead |
| POST| /leads/showLead | profile.js | add new lead form |
| GET | /newLead | profile.js | add new lead to db |
| POST | /leads | profile.js | edit FORM for lead |
| GET | /leads//edit/:idx | profile.js | add new edits to lead db |
| POST | /leads/:idx | profile.js | delete lead from db |
| GET | /leads/delete/:idx | profile.js | delete lead from db |

## `1` Fork & Clone Project & Install Dependencies

`1` The first thing that we are going to do is `fork` and `clone`

`2` Now we are going to install the current dependencies that are listed inside of `package.json`
```text
npm install
```

`3` We need to install some packages that will be used for `authentication`. Those are the following packages:

```text
npm install bcryptjs connect-flash passport passport-local express-session method-override
and 
npm install axios dotenv express-ejs-layout express ejs pg sequelize sequelize-cli ws

```

- [axios](https://github.com/axios/axios):
  Promise based HTTP client for the browser and node.js 
-  [bcryptjs](https://www.npmjs.com/package/bcryptjs): 
  A library to help you hash passwords. ([wikipedia](https://en.wikipedia.org/wiki/Bcryptjs)) 
  Blowfish has a 64-bit block size and a variable key length from 32 bits up to 448 bits.
- [connect-flash](https://github.com/jaredhanson/connect-flash): 
  The flash is an area of the session used for storing messages that will be used to to display to the user. Flash is typically used with redirects.
- [dotenv](https://github.com/motdotla/dotenv):
  Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [ejs](https://github.com/mde/ejs):
  Static caching of intermediate JavaScript, Static caching of templates
  Complies with the Express view system
- [express](https://github.com/expressjs/express):
  ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.
- [express-ejs-layouts](https://github.com/Soarez/express-ejs-layouts):
  Creates a template structure which allows us to easily render files without duplicate code.
- [express-session](https://github.com/expressjs/session): 
  Create a session middleware with given *options*.method-override):
- [method-override](https://github.com/expressjs/method-override): 
  Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
- [passport](https://www.passportjs.org/docs/): 
  Passport is authentication middleware for Node.js. It is designed to do one thing authenticate requests. There are over 500+ strategies used to authenticate a user; however, we will be using one - *passport-local* Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests
- [passport-jwt](http://www.passportjs.org/packages/passport-local/):  
  The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user.  
- [pg](https://github.com/brianc/node-postgres):
  Is a SQL based database, following the model/ table model
- [sequelize](https://github.com/sequelize/sequelize):
  Is a Object Relational Mapper (ORM), that allows your application to interact with the postgres database
- [sequelize-cli](https://github.com/sequelize/cli):
  The user interface commands for sequelize
- [ws](https://github.com/websockets/ws):
  WS is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation
`4` Make a commit

```text
git add .
git commit -m "Install dependencies for project"
```

## `2` Analyze File Structure

```text
├── node_modules
│   └── ...
├── public
│   └── index.html
├── src
│   └── components
│     └── albums
│       └── Albums.js
│     └── authenicate
│       └── Login.js
│       └── Signup.js
│     └── edit
│       └── EditAlbum.js
│       └── EditBioForm.js
│       └── EditProForm.js
│       └── SideMenu.js
│     └── familyTies
│       └── FamilyTree.js
│       └── KnownMember.js
│       └── MemberCard.js
│     └── homeFilter
│       └── HomeJumbo.js
│       └── Input.js
│       └── List.js
│     └── newsfeed
│       └── Albums.js
│       └── FamilyLinks.js
│       └── NewsBlock.js
│       └── NewsItem.js
│     └── pages
│       └── About.js
│       └── AlbumsContainer.js
│       └── EditContainer.js
│       └── FamilyTiesContainer.js
│       └── HomeContainer.js
│       └── NewsFeedContainer.js
│       └── ProfileContainer.js
│     └── partials
│       └── Footer.js
│       └── Navbar.js
│     └── profile
│       └── Bio.js
│       └── BioItems.js
│       └── Profile.js
│       └── ProfileLinks.js
│   └── utils
│     └── setAuthToken.js
│   └── App.css
│   └── App.js
│   └── index.css
│   └── index.js
│   └── reportWebVitals.js
│   └── setupTests.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

- `config.json`: Where you need to configure your project to interact with your postgres database and passport localStrategy.
- `controllers`: The folder where all of your controllers ( routes ) will go to control the logic of your app.
- `models`: The folder where all the models will be stored that will interact with the database.
- `node_modules`: The folder that is generated by **npm** that stores the source code for all dependencies installed.
- `public`: is to have those views that would be publicly accessible in the application. ex. `style.css`
- `test`: The folder where all your test that you make will be stored. ex. `auth.test.js`
- `views`: The folder where all the app's templates will be stored for displaying pages to the user. ex. `login.ejs`
- `.gitignore`: A hidden file that will hide and prevent any files with to NOT get pushed to Github.
- `package-lock.json`: is automatically generated for any operations where npm modifies either the `node_modules` tree, or `package.json`.
- `package.json`: The settings file that stores scripts and list of dependencies that are used inside your app.
- `README.md`: The main markdown file that written to explain the details your app.
- `server.js`: The main file that controls the entire application.

## `3` Structure, Import and create routes

This application will be using `Bootstrap`, `react-router-dom` and other `React` built in methods.

`1` import your dependencies to your App.js and setup your initial home route

```js
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

```

Then create a route to the home/ index page

```js
function App() {
  return (
    <Router>
        <div>
              <Switch>
                {/* HOME */}
                <Route exact path="/" render={() => <HomeContainer/>} />
              </Switch>
        </div>
    </Router>
  )
}

export default App;
```

## `4` Create `pages` folder to hold Containers

The purpose of the pages folder is to add structure and organization to your launch pages so that you can add multiple components along the way.

`1` Create and Add `HomeContainer.js` to `pages` folder. Import the necessary components for the page and export the function to be used on the main App.js

```js
import React from "react";
import HomeJumbo from "../homeFilter/HomeJumbo";

const HomeContainer = (props) => {
  
    return (
        <div className="homeContainer">
            <h1>FamilyTies</h1>
            <HomeJumbo/>
        </div>
    )
} 

export default HomeContainer;
```

Import the HomeContainer on App.js then start your server. You will initially see a component error so comment out the <HomeJumbo/> component so you can verify the page is being loaded correctly. 

`3` Make a *commit* message

```text
git add .
git commit -m "add: create first folder and container"
```

## `5` Create `homeFilter` folder and components

After the page is loaded correctly, build out the necessary home components.

`1` Create `HomeJumbo.js` which is a bootstrap carousel item.

```js
import React from "react";
import { Carousel } from "react-bootstrap";
const HomeJumbo = () => {
    
        return <Carousel fade>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://www.niccolephotography.com/wp-content/uploads/2014/12/12-11393-pp_gallery/Charlotte-top-photographer-NicCole-Photography0008%28pp_w768_h511%29.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://images.squarespace-cdn.com/content/5a552c3ef09ca417f66280ae/1520025713815-SHI2N7QXB7R2QK0VJLRN/image-asset.jpeg?format=1500w&content-type=image%2Fjpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://suebryceeducation.com/wp-content/uploads/family-posing.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
}

export default HomeJumbo;
```

## `6` Set Authenication token to request Headers

Since this is a fullstack application users data will need to be authenticated using a token/cookie system.  

`1` Start by creating a `utils` folder and create and add `setAuthToken.js`. This utility will add the authorized user's JWT to the request header. Any routes that are protected will require the JWT in order to access them.

```js
import axios from 'axios';

const setAuthToken = (token) => {
    if (token) {
        // Apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
export default setAuthToken;
```

`2` Import `setAuthToken.js` at the top of `App.js`

```js
import setAuthToken from './utils/setAuthToken';
```

## `7` Add `Private Route` function and user `Authenticaion` to App

`1` The purpose of the private route function is to add extra security around components sharing sensitive data. The private route will render the assigned components as well as grab the JWT from the local storage and if the token is present then page will render otherwise the user will be redirected to login. Add the following code below import components.

```js
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}
```

## `8` Check the state of the `User`

`1` Use Reacts built in State methods for user Authenication. The currentUser will be an empty string until they are authenicated. We will set the initial state of the user to true.

```js
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
```

Then use another one of Reacts built in methods call useEffect which allows you to perform secondary actions on your components after they are rendered. We will use it to check the local storage for a `jwtToken`. If present (true), then set the decode token data to the current User and add the token back to the localstorage.

```js
useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user isnt authenticated
    if (!localStorage.getItem('jwtToken')) {
      console.log('is Authenticated: >>> false');
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);
```

## `9` Set Authenicated data to the current User

`1` Set the decoded `jwtToken` to the current user which has all associated and necessary information coming from the backend. 

```js
  const nowCurrentUser = (userData) => {
    console.log('nowCurentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }
```

`2` Delete the `jwtToken` from the localstorage after logging out

```js
  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }
```

## `10` Add Login and SignUp routes for `Users`

`1` Add about, signUp and Login below the `home` route

```js
<Route path='/about' component={ About } />
              {/* SIGN UP */}
<Route path='/signup' component={ Signup } />
              {/* LOGIN  */}
<Route path='/login' render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} 
  setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
```


## `11` Create Signup to the associate route

`1` Create an `authenicate` folder in the `components` folder then create a login and signUp component.

`2` For the signup file, First import the necessary dependencies. Then grab and save the data provided by the user from the form. UseState will store and set the new data.

```js
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
```

handle submission of form data.

```js
const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword && password.length >= 8) {
            const newUser = { firstName, lastName, email, password };
            
            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            alert('Password needs to be at least 8 characters or more. Please try again.');
        }
    }

  if (redirect) return <Redirect to='/login' />

```

```js
return (
        <div className="signupCon">
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Another {props.location.state} Signing Up!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="name" value={firstName} onChange={handleFirstName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" name="name" value={lastName} onChange={handleLastName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )

```

The signup page is wrapped in a `Signup` function

```js
const Signup = (props) => {
  // add code SNIPPETS from above to this function
}
export default Signup;

```

## `12` Create Login component

`1` Import dependencies to the Login component

```js
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

```

```js
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };

        axios.post(`${REACT_APP_SERVER_URL}/api/users/login`, userData)
        .then(response => {
            const { token, userData } = response.data;
            const {familyMembers, albums } = userData;
            // Save token to localStorage
            localStorage.setItem('jwtToken', token);
            // set family in local storage
            localStorage.setItem('familyMembers', JSON.stringify(familyMembers))
            // set allbums to local storage
            localStorage.setItem('albums', JSON.stringify(albums))
            // Set token to auth header
            setAuthToken(token);
            // Decode token to get the user data
            const decoded = jwt_decode(token);
            // Set current user
            props.nowCurrentUser(decoded);
        })
        .catch(error =>{
            console.log(error);
            alert('Either email or password is incorrect. Please try again.');
        });
    }

    if (props.user) return <Redirect to='/profile' />
}

export default Login;

```

`2` add the Login Form

```js
return (
        <div className="loginCon">
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Login</h2>
                    <form  onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
```

## `13` Create Profile and associate route

`1` Create `ProfileContainer.js` and import dependencies 

```js
import React, {useState, useEffect} from "react";
import Profile from "../profile/Profile";
import Bio from "../profile/Bio";
import ProfileLinks from "../profile/ProfileLinks";
import FamilyTiesContainer from "./FamilyTiesContainer";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from 'jwt-decode';

const ProfileContainer = (props) => {
  // add variables and logic
}

export default ProfileContainer;
```

`2` Authenicate user and set data to associate variables

```js
    const { user } = props;
    const [currentUser, setCurrentUser] = useState({...user});
    const [bio, setBio] = useState(null);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // if there is no token in localStorage, then the user is in authenticated
        if (!localStorage.getItem('jwtToken')) {
          console.log('is Authenticated: >>> false');
          props.setIsAuthenticated(false);
        } else {
          setAuthToken(localStorage.jwtToken);
          // user = jwt_decode(localStorage.getItem('jwtToken'));
          setCurrentUser(props.user)
          setBio(currentUser.bio[0])
            // get family members from local storage
        let getFamMembers  = localStorage.getItem('familyMembers');
        let famMembers = JSON.parse(getFamMembers)
        // set family members to state/variable
          setMembers(famMembers);
        }
      }, []);
```

`3` Add profile components

```js
   return <div className="proDiv">
                <div className="profileCon">
                    <Profile profile ={props}/>
                    <Bio bio ={bio} user={currentUser}/>
                    <ProfileLinks user={currentUser}/>
                </div>
                <div >
                    <FamilyTiesContainer familyMembers={members}/>
                </div>
            </div>
```

`4` Add profile route to `App.js` using `PrivateRoute`

```js
<PrivateRoute exact path="/profile" component={ProfileContainer} 
  user={currentUser} handleLogout={handleLogout}setIsAuthenticated={setIsAuthenticated}/>
```

## `14` Create `profile` folder and add `profile` components

`1` create folder and add `Profile.js` file. Import dependencies

```js
import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Row} from 'react-bootstrap';
```

`2` Create Profile function 

```js
const Profile = (props) => {
    const { handleLogout } = props.profile;
    const { exp, id, firstName, lastName } = props.profile.user;
    // const {profileImage} = props.profile.user.bio[0];
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    // console.log(String(expirationTime));

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login again.');
    }
    const userData = props.profile ? 
    (<Container>
        <Row>
          <div className="profile-nav col">
              <div className="panel">
                  <div className="user-heading round">
                      <a href="#">
                        <Image className="proImg" src="https://bestprofilepix.com/wp-content/uploads/2014/08/funny-cartoon-facebook-profile-pictures.jpg"/>
                      </a>
                      <h1>{ firstName }, {lastName}</h1>
                  </div>
                  <div className="proLinks">
                  <ul>
                      <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
                      <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity </a></li>
                      <li><a href="/profile/edit"> <i class="fa fa-edit"></i> Edit profile</a></li>
                  </ul>
                  </div>
              </div>
          </div>
        </Row>
    </Container>) : <h4>Loading...</h4>

```

`3` Add error Div if user isnt logged in

```js
const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
```

`4` Return profile data

```js
return (
        <div className="proDiv">
            { props.profile ? userData : errorDiv() }
        </div>
    );
    
```

## `15` Start App and Debug

`1` Start up server and test app

```text
npm start 
or 
nodemon
```

`2` Complete any debugging that needs to happen.

`3` Push final changes to Github.

`4` Make this repo a **Template** on Github for future projects (i.e. Project 2) ✅
