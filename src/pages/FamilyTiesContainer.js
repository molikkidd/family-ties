import React from "react";
import FamilyTree from "../components/familyTies/FamilyTree";
import KnownMember from "../components/familyTies/KnownMember";

const FamilyTiesContainer = (props) => {
    return <div className="familyTies">
        <FamilyTree/>
        <KnownMember members={props}/>
    </div>
}

export default FamilyTiesContainer;