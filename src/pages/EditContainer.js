import React from "react";
// import EditProForm from "../components/Edit/EditProForm";
import SideMenu from "../components/edit/SideMenu";

const EditContainer= (props) => {

    const userData = props.user
    return <div className="editCon">        
            <SideMenu userData={userData}/>  
            </div>
}

export default EditContainer;