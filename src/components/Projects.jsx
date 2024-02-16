import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import company from '../assets/img/videoStream.png';
import goldRetail from '../assets/img/GoldRetail.png';
import dashboard from '../assets/img/DashBoardVideoStream.png';
import clientSide from '../assets/img/ClientVideoStream.png';
import Portfolio from '../assets/img/Portfolio.png';
import ProjectCard from '../Utils/ProjectCard';
import CustomizedTimeline from './Timeline';
import About from './About';
import EducationTimeLine from './Education';

const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: company,
      techStack: "React, Material UI, Bootstrap, Axios"
    },
    {
      title: "GoldRetail",
      description: "Design & Development",
      imgUrl: goldRetail,
      techStack: "React, Material UI, Bootstrap, Axios, Laravel, PHP, MongoDB"
    },
    {
      title: "VideoStream",
      description: "Design & Development",
      imgUrl: clientSide,
      techStack: "React, Material UI, Bootstrap, Axios, MinIo, PHP, Node JS, Express JS, MongoDB"
    },
    {
      title: "Dashboard",
      description: "Design & Development",
      imgUrl: dashboard,
      techStack: "React, Material UI, Bootstrap, Axios, MinIo, PHP, Node JS, Express JS, MongoDB"
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: Portfolio,
      techStack: "React, Material UI, Bootstrap, Firebase"
    }
  ]

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              My Side Projects and Freelance Works.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    About Me
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) =>  {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <CustomizedTimeline />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <About />
                  <EducationTimeLine />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects;