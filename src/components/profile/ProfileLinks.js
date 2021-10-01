import React from "react";
import { Link } from "react-router-dom";

const ProfileLinks = () => {
    return <div className="proAlbumsDiv">
            <div className="albums">
                <div className="face2">
                <i class="fa fa-camera-retro"></i>
                </div>
                <div className="face1">
                <Link>Albums</Link>
                </div>
            </div>
            <div className="familyTree">
                <div className="face2">
                <i class="fa fa-tree"></i>
                </div>
                <div className="face1">
                    <Link>
                Family Tree
                    </Link>
                </div>
            </div>
            <div className="familyMembers">
                <div className="face2">
                <i class="fa fa-user-circle"></i>
                </div>
                <div className="face1">
                <Link to="/profile/newsfeed">
                News Feed
                </Link>
                </div>
            </div>
         </div>
}

export default ProfileLinks;