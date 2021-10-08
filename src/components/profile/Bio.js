import React, {useState, useEffect} from "react";
import BioItems from "./BioItems";
const Bio = (props) => {
    // spread operator, spread all the items in the new array, make a copy 
    // const [bio, setBio] = useState({...props.bio});

    const { firstName, lastName, email } = props.user;    
    return (
        <div className="proBioDiv"> 
             <div className="panel">
                <div className="bio-graph-heading">ZARD...</div>
                <div className="panel-body bio-graph-info">
                <h1>Bio Graph</h1>
                <div className="row">
                    <div class="bio-row">
                        <p>First Name : {firstName}</p>   
                    </div>
                    <div className="bio-row">
                        <p>Last Name : {lastName}</p>        
                    </div>
                    <div className="bio-row">
                        <p>Email: {email}</p>
                    </div>
                    <BioItems bioList={props.bio} />
              </div>
          </div>
          </div>
    </div>
    );

}

export default Bio;