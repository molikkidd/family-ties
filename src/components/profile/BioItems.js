import React from "react";
import { Link } from "react-router-dom";

const BioItems = (props) => { 
    // console.log('bioitems list', props.edit);
    
    const bioItem = props.bioList ?
     (<div className="bioItemsDiv">
                 <div className="bio-row">
                        <p><span>Country </span>: {props.bioList.country} </p>                      
                    </div>
                    <div className="bio-row">
                        <p><span>Birthday</span>: {props.bioList.birthday} </p>             
                    </div>
                    <div className="bio-row">
                        <p><span>Occupation </span>: {props.bioList.occupation}</p>
                    </div>
                    <div className="bio-row">
                        <p><span>Mobile </span>: {props.bioList.mobile} </p>                   
                    </div>
                    <div className="bio-row">
                        <p><span>Phone </span>: {props.bioList.homePhone}</p>                    
                  </div>
        </div>) : <div className="bioItemsDiv">
                    <div className="bio-row">
                        <p><span>Country </span>: <Link to='/edit'>...Add Item</Link> </p>                      
                    </div>
                    <div className="bio-row">
                        <p><span>Birthday</span>: ...Add Item </p>             
                    </div>
                    <div className="bio-row">
                        <p><span>Occupation </span>: ...Add Item</p>
                    </div>
                    <div className="bio-row">
                        <p><span>Mobile </span>: ...Add Item </p>                   
                    </div>
                    <div className="bio-row">
                        <p><span>Phone </span>: ...Add Item</p>                    
                    </div>
                     </div>                
        return (<div>
                {bioItem}
              </div>
        )
}

export default BioItems;