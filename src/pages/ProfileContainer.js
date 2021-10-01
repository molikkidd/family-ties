import React, {useState} from "react";
import Profile from "../components/profile/Profile";
import Bio from "../components/profile/Bio";
import ProfileLinks from "../components/profile/ProfileLinks";
import FamilyTiesContainer from "./FamilyTiesContainer";

const ProfileContainer = (props) => {
    console.log('User inside profile container', props.user)

    const [client, setClient] = useState(props.user)

    console.log('client' ,client)
    return <div className="proDiv">
                <div className="profileCon">
                    <Profile profile ={client}/>
                    <Bio profile ={client}/>
                    <ProfileLinks/>
                </div>
                <div >
                    <FamilyTiesContainer/>
                </div>
            </div>
    // add bio, albums, family tree
}

export default ProfileContainer;