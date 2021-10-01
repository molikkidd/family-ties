import React from "react";
import Albums from "../components/newsfeed/Albums";
import FamilyLinks from "../components/newsfeed/FamilyLinks";
import NewsBlock from "../components/newsfeed/NewsBlock";

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