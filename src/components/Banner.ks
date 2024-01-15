import {useState, useEffect} from "react";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


import { Col, Container, Row} from "react-bootstrap";

export const Banner = () => {
    return(

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Personal Portfolio</span>
                        <h1>{"Hi I'm Jack Eliseo"}<span className="wrap">Web Developer and Cyber Security Engineer</span></h1>
                        <p>I am currently enrolled at the University of North Carolina at Charlotte (UNCC), pursuing a Bachelor's degree with an anticipated graduation date of June 2024. My academic focus lies in the field of computer science, and I have acquired a diverse skill set that includes proficiency in Python, MySQL, JavaScript, C++, SQLite, HTML, CSS, as well as foundational concepts in Systems and Networks, Cryptography and Security, and Human-Computer Interaction.
                        My practical experience extends to utilizing tools such as Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Visual Studio Code, VMware Fusion, Apache NetBeans 12.4, MySQL Workbench, and Wireshark. As a dedicated and enthusiastic learner, I am eager to contribute my skills and knowledge in a professional setting. </p>
                        <button>onClick={() => consolge.log('connect')} Let's connect </button>
                    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={}></img>

                    </Col>
                </Row>
            </Container>
        </section>

        
    )
}