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

`1` Use Reacts built in State methods for user Authenication. We will set the initial state of the user to true.

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

## `23` Start App and Debug

`1` Start up server and test app

```text
npm start 
or 
nodemon
```

`2` Complete any debugging that needs to happen.

`3` Push final changes to Github.

`4` Make this repo a **Template** on Github for future projects (i.e. Project 2) ✅
