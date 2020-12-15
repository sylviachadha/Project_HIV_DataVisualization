import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function TopMenu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">HIVRecencyDashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    {/*<Nav.Link href="/new-hiv">NewHIVDiagnosis</Nav.Link>*/}
                </Nav>
            </Navbar>

        </div>
    );
}

export default TopMenu;
