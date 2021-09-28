import React, {useState, useEffect}from "react";
import Profile from "../components/profile/Profile";
import Bio from "../components/profile/Bio";
import Albums from "../components/profile/Albums";
import FamilyTiesContainer from "./FamilyTiesContainer";

const ProfileContainer = (props) => {
    console.log('User inside profile container', props)
    return <div className="proDiv">
                <div className="profileCon">
                    <Profile profile ={props}/>
                    <Bio profile ={props}/>
                    <Albums/>
                
                </div>
                <div >
                    <FamilyTiesContainer/>
                </div>
            </div>
    // add bio, albums, family tree
}

export default ProfileContainer;