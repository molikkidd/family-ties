import React from "react";
import FamilyTree from "../familyTies/FamilyTree";
import { Link } from "react-router-dom";

const FamilyLinks = () => {
    return (
        <div className="familyLinksCon">
            <h2>Families</h2>
            <Link className="btn btn-dark">ZARDES</Link>
            <Link className="btn btn-dark">ZARDIS</Link>
            <Link className="btn btn-dark">ZARDIRS</Link>
            <Link className="btn btn-dark">ZARDERS</Link>
        </div>
    )
}

export default FamilyLinks;