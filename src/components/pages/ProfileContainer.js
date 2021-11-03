import React, {useState, useEffect} from "react";
import Profile from "../profile/Profile";
import Bio from "../profile/Bio";
import ProfileLinks from "../profile/ProfileLinks";
import FamilyTiesContainer from "./FamilyTiesContainer";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from 'jwt-decode';

const ProfileContainer = (props) => {
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
}

export default ProfileContainer;