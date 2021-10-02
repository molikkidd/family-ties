import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Row} from 'react-bootstrap';

const Profile = (props) => {
    // console.log('inside profile.js props', props)
    const { handleLogout } = props.profile;
    const { exp, id, firstName, lastName, profileImage } = props.profile.user;
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
                        <Image className="proImg" src={profileImage}/>
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

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="proDiv">
            { props.profile ? userData : errorDiv() }
        </div>
    );

}

export default Profile;

