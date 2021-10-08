import React, {useEffect, useState} from "react";
import FamilyTree from "../familyTies/FamilyTree";
import KnownMember from "../familyTies/KnownMember";
import jwt_decode from 'jwt-decode';

const FamilyTiesContainer = (props) => {
    return <div className="familyTies">
        <FamilyTree/>
        <KnownMember members={props.familyMembers}/>
    </div>
}

export default FamilyTiesContainer;