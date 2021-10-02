import React, {useState} from "react";
import Profile from "../components/profile/Profile";
import Bio from "../components/profile/Bio";
import ProfileLinks from "../components/profile/ProfileLinks";
import FamilyTiesContainer from "./FamilyTiesContainer";

const ProfileContainer = (props) => {
    // console.log('User inside profile container', props)

    // const [client, setClient] = useState(props.user)

    // console.log('client' ,client)
    return <div className="proDiv">
                <div className="profileCon">
                    <Profile profile ={props}/>
                    <Bio profile ={props}/>
                    <ProfileLinks/>
                </div>
                <div >
                    <FamilyTiesContainer profile ={props}/>
                </div>
            </div>
    // add bio, albums, family tree
}

export default ProfileContainer;