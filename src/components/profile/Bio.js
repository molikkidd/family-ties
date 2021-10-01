import React, {useState, useEffect} from "react";
import BioItems from "./BioItems";
const Bio = (props) => {

    const bioUser = props.profile;
    const bioProps = props.profile.bio[0];
    const { firstName, lastName, email } = bioUser;

    console.log('inside bio.js',props.profile)
    const [list, setList] = useState([bioProps]);
    const [editList, setEditList] = useState(true);

    useEffect(() => {
        list ? setEditList(false) : setEditList(true);
    },[list]);

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
                    <BioItems bioList={bioProps} />
              </div>
          </div>
          </div>
    </div>
    );

}

export default Bio;