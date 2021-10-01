import React from "react";
import NewsItem from "./NewsItem";

const NewsBlock = () => {
    return (
        <div className="newsBlockCon">
            <h1>News Feed</h1>
            <NewsItem/>
            
        </div>
    )
}

export default NewsBlock;