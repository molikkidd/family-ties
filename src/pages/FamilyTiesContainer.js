import React from "react";
import FamilyTree from "../components/familyTies/FamilyTree";
import KnownMember from "../components/familyTies/KnownMember";

const FamilyTiesContainer = () => {
    return <div className="familyTies">
        <FamilyTree/>
        <KnownMember/>
    </div>
}

export default FamilyTiesContainer;