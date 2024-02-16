import { Container } from 'react-bootstrap';
import myImg from '../assets/img/my-img.jpg';

const About = () => {

  return (
    <section id='aboutme'>
      <div className="about-container">
        <img className='about-img' src={myImg} alt="" />
        <p className='myself'>
          Enthusiastic Web Developer with 3 years of experience and a strong knowledge of full stack
          development is seeking a position that will utilize my knowledge and above-mentioned skilled set in a growing organization.
        </p>
      </div>
    </section>
  )
}

export default About;