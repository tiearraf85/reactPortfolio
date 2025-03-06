import './Skils.css';
import Nav from '../../components/Navbar/Nav';

export default function Skills() {
    return (
        <>
        <Nav/>
        
        <div className="skills">
            <h1>Skills</h1>
            <div className="mySkills">
            <p>HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL, Git</p>
       </div> 

       <div className="buttons">
        <button className="css" onClick={()=> window.location.href='https://www.w3schools.com/Css/'} alt='css'>
        <img src='src/assets/css.png' alt='css'/>
        </button>
        
        <button className="html" onClick={()=> window.location.href='https://www.w3schools.com/html/html_basic.asp'} alt='html'>
            <img src='src/assets/html.png'/>
        </button>
</div>
   
    
       <div className='buttons'>
        <button className='javaScript' onClick={()=> window.location.href='https://javascript.info/'} alt='js'>
         <img src='src/assets/JavaScript.png'/>
        </button>
        <button className='mongoDb' onClick={()=> window.location.href='https://cloud.mongodb.com/v2/67c989b35426123197c91696#/overview?automateSecurity=true'} alt='mongoDb'>
        <img src='src/assets/mongoDb.png'/>
        </button>
        </div>

        <div className='buttons'>
        <button className="node" onClick={()=> window.location.href="https://nodejs.org/en/download"} alt='node'>
        <img src='src/assets/nodeJs.png'/>
        </button>

        <button className='react' onClick={()=> window.location.href='https://react.dev/'}>
            <img src='src/assets/React.png'/>
        </button>
        </div>
       
    </div>
       </>
    )
}