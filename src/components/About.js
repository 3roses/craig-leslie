import Header from './Header';
import './assets/about.css';
import { useEffect } from 'react';

const headshot = require ('./assets/headshot.png')

const About = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "#001219";
})
// #005F73

  return (
    <>
    <Header />
    <div className='container'>
      
      <div className='left headshot'>
      {/* <img className="resize" src={headshot} alt=""></img> */}
      </div>
      <div className='right'>
      <p>Full-Stack Web Developer leveraging my creative problem-solving skill-set to build useful and intuitive applications.  With a background in artisan metal fabrication, my desire to create a product from scratch runs deep.  Vision, planning, and execution are three traits that I have learned to transfer into the technical environment. I recently earned my certificate in Full Stack Development from SMU, where I focused on the MERN stack. As I progress in my career, I am eager to take on new challenges and expand my knowledge into new technologies. Excited to utilize this passion with a quality-driven team, dedicated to building better experiences on the web.
      <br/>
      <br/>
      If you have any questions or want to collaborate on a project, please feel free to reach out via email!
      <br/>
      <br/>
      <a href="mailto:cleslie25@gmail.com.com">cleslie25@gmail.com</a>
      </p>

      </div>
    </div>
    </>
    
  )
}

export default About