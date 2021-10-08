import React from "react";
// import EditProForm from "../components/Edit/EditProForm";
import SideMenu from '../edit/SideMenu'

const EditContainer= (props) => {

    const userData = props.user
    return <div className="editCon">        
            <SideMenu userData={userData} setCurrentUser={props.setCurrentUser}/>  
            </div>
}

export default EditContainer;