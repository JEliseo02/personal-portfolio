import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

        const projects = [
            {
                title: "BMI Calculator",
                description: "A simple BMI calculator created for the sole purpose of helping others achieve their goal body weight. This application uses the Harris Benedict Equation to calculate 7 calorie goals suitable for the user, the project was made with simple html and css. This being my first offical project.",
                imgUrl: projImg4
            },
            {
                title: "Niner-Spikeball-Network",
                description: "Niner-Spikeball-Network (NSN) represented my inaugural solo project, showcasing proficiency in JavaScript, HTML, and CSS. Utilizing FileZilla, I successfully uploaded the site to the UNCC network. The platform served as a dedicated website for campus enthusiasts interested in joining the club and organizing gatherings.",
                imgUrl: projImg5
            },
            {
                title: "MyHealthPal",
                description: "MyHealthPal emerged as a project designed to empower users on their wellness journey by providing valuable insights into personal health. Developed using Python, SQL, HTML, and CSS, the project seamlessly integrates the Spoonacular API to offer a curated selection of recipes. Users can explore options aligned with their goals, whether it be gaining, maintaining, or losing weight. The implementation of the Harris-Benedict Formula ensures accurate calorie counting, mirroring the precision of a genuine fitness evaluation.",
                imgUrl: projImg6
            },
        ];


        return (
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__bounce" : "" }>
                            <h2>Projects</h2>
                            <p>The following projects have significantly contributed to the development of my coding proficiency. They have served as a comprehensive introduction to a diverse range of programming languages, including C++, Python, SQL, SQLite, Java, JavaScript, HTML, and CSS. Additionally, these projects have provided hands-on experience with API integration. Through their implementation, I have deepened my understanding of the functionalities of each language and gained insights into the intricate ways they communicate and collaborate with one another.</p>
                            </div>}
                            </TrackVisibility>



                            <Tab.Container id = "projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Beginner Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Intermediate Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Industrial Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={"first"}>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                    
                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">More Coming Soon.....</Tab.Pane>
                                <Tab.Pane eventKey="third">More Coming Soon.....</Tab.Pane>

                            </Tab.Content>

                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}/>
            </section>
        )
}
