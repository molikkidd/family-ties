import React from "react";
import { Image, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Albums = () => {
    return (
        <div className="albumsCon">
            <h2>Albums </h2>
            <div class="col-md">
                <div>
                    <div class="d-flex mt-2 ">
                        <div> <img class="rounded img-fluid" width="100" src="https://i.imgur.com/EEguU02.jpg"/> </div>
                        <div> <img class="rounded img-fluid" width="100" src="https://i.imgur.com/Uv2Yqzo.jpg"/> </div>
                        <div> <img class="rounded img-fluid" width="100" src="https://i.imgur.com/xbTAITF.jpg"/> </div> 
                    </div>
                    <div class="d-flex mt-2">
                        <div> <img class="rounded img-fluid" width="100" src="https://i.imgur.com/EEguU02.jpg"/> </div>
                        <div> <img class="rounded img-fluid" width="100" src="https://i.imgur.com/rvQ3LAt.jpg"/> </div>
                        <div> <img class="rounded img-fluid" width="100" src="https://i.imgur.com/EEguU02.jpg"/> </div>         
                    </div>  
                </div>
                <div class="mt-2">
                    <h5>Area of Expertise</h5>
                    <Link className="btn btn-dark" to="/edit">Edit/Add Albums</Link>
                </div>
            </div>
        </div>
    )
}

export default Albums;