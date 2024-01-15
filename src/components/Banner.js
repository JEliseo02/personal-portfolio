import {useState, useEffect} from "react";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";



import { Col, Container, Row} from "react-bootstrap";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Web Developer", " Cyber Security Engineer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2 )
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } 
    }

    return(

        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__fadeIn" : "" }>
                                <span className="tagline">Welcome to my Personal Portfolio</span>
                                <h1>{"Hi I'm Jack Eliseo, "}<span className="wrap">{text}</span></h1>
                                <p>I am currently enrolled at the University of North Carolina at Charlotte (UNCC), pursuing a Bachelor's degree with an anticipated graduation date of June 2024. My academic focus lies in the field of computer science, and I have acquired a diverse skill set that includes proficiency in Python, MySQL, JavaScript, C++, SQLite, HTML, CSS, as well as foundational concepts in Systems and Networks, Cryptography and Security, and Human-Computer Interaction.
                                My practical experience extends to utilizing tools such as Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Visual Studio Code, VMware Fusion, Apache NetBeans 12.4, MySQL Workbench, and Wireshark. As a dedicated and enthusiastic learner, I am eager to contribute my skills and knowledge in a professional setting. </p>
                                <HashLink to='https://www.linkedin.com/in/jack-eliseo-b28790254/'>
                                    <button className="vvd"><span>Let’s Connect</span></button>
                                </HashLink>
                            </div>}
                        </TrackVisibility>
                    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt="Header Img" />

                    </Col>
                </Row>
            </Container>
            
        </section>
        </Router>

        
    )
}