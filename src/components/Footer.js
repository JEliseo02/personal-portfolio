import { Row, Container, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg"
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';
import NavIcon4 from '../assets/img/nav-icon4.jpg';
import NavIcon5 from '../assets/img/nav-icon5.png';
import NavIcon6 from '../assets/img/nav-icon6.png';
import NavIcon7 from '../assets/img/nav-icon7.png';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    
                    <Col sm = {6}>
                    </Col>
                    <Col sm = {6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="http://linkedin.com/in/jack-eliseo-b28790254"><img src={NavIcon1} /></a>
                            <a href="https://github.com/JEliseo02"><img src={NavIcon7} /></a>
                            <a href="https://www.instagram.com/jackeliseo2?igsh=bXJvYjN1Y3hjNmho&utm_source=qr"><img src={NavIcon3} /></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved Jack Eliseo</p>


                    </Col>

                </Row>
            </Container>


        </footer>
    )

    
}