import React from "react";
import { Card } from "react-bootstrap";

const MemberCard = (props) => {
    return <div>
                <Card className="memberCard">
                <Card.Img variant="top" src={props.proImage} />
                <Card.Body>
                  <Card.Title>{props.firstName}, {props.lastName}</Card.Title> 
                </Card.Body>
              </Card>
            </div>
}

export default MemberCard;