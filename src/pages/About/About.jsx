import "./About.css";
import Nav from '../../components/Navbar/Nav';
import Footer from "../../components/Footer/Footer";
import Certificate from "../../components/Certificate/Certificate";

export default function About() {
  return (
    <>
    <Nav/>

    <div className="background">
  
      <div className="about">
        <div className="aboutMe">
        <h1>About Me</h1>
        
       </div>
        
          <p>
        
             
            I'm Tiearra Westbrook, a passionate Full Stack Developer with a love
            for coding and creating innovative solutions. With a background in
            web development, I specialize in building dynamic and user-friendly
            applications that deliver exceptional user experiences. My expertise
            lies in React, HTML, CSS, JavaScript, and various frameworks and
            libraries. I thrive on challenges and enjoy collaborating with teams
            to bring ideas to life. Let's connect and explore how we can work
            together to make a positive impact through technology.
          </p>
           
        <Certificate/>
      </div>
    </div>
 <Footer/>
    </>
  );
}
