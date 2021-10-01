import React from "react";
import {Row, Col, Nav, Tab} from 'react-bootstrap'
import EditProForm from "./EditProForm";
import EditBioForm from "./EditBioForm";
import EditAlbum from "./EditAlbum";

const SideMenu = (props) => {
  
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row >
            <Col sm={3} className="sideMenu">
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Edit Bio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Edit Album</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <EditProForm userInfo={props.userData}/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <EditBioForm/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <EditAlbum/>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        );
  };
  export default SideMenu;

