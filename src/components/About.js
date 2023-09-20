import React from "react";
import "./about.css";
import Button from '@mui/joy/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const About = () => {
    return (
        <>
            <div className="container-emp-profile">
                <div className="topbar">
                    <div className="back">
                        <div className="arrow"> <ArrowBackIcon sx={{ color: "blue" }} /> </div>
                        <Button variant="plain"> Back </Button>
                    </div>
                    <Button>Button</Button>
                </div>
                <div className="profile">
                    <h1 className="pd">Personal Details</h1>
                    <h1 className="cd">Contact Details</h1>
                    <div className="container">
                        <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                            alt="" />
                        <div className="pd-details">
                            <div className="pd-topic">
                                <span>Name</span><h3>Moomad Bilial</h3>
                                <span>Gender</span><h3>Male</h3>
                                <span>Email</span><h3>13hrsdfg@gami.edu.lk</h3>
                                <span>Batch</span><h3>BIT 02</h3>
                            </div>
                        </div>
                        <div className="cd-details">
                            <div className="cd-topic">
                            <span>Phone Number</span><h3>+94 75 461 1170</h3>
                                <span>Student ID</span><h3>1923658852</h3>
                                <span>Community</span><h3>Student Forem</h3>
                                <span>Position</span><h3>President</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                            <h6>Evento EMS</h6>
                        </div>
            </div>
        </>
    );
};

export default About;