import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, techStack }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>Tech Stack:&nbsp;&nbsp;{techStack}</div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;