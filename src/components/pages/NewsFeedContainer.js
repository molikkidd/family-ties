import React from "react";
import Albums from "../newsfeed/Albums";
import FamilyLinks from "../newsfeed/FamilyLinks";
import NewsBlock from "../newsfeed/NewsBlock";

const NewsFeed = () => {
    return(
        <div className="newsFeedDiv">
            <div className="newsFeedCon">
            <h4>Family Connect</h4>
                <Albums/>
                <FamilyLinks/>
            </div>   
            <div>
                <NewsBlock/>
            </div>
        </div>
    )
}

export default NewsFeed;