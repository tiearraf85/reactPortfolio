import ARM from "../../assets/ARM.png";
import CEHS from "../../assets/CEHS.png";
import ComputerBasics from "../../assets/ComputerBasics.png";
import CSPP from "../../assets/CSPP.png";
import CCStrategy from "../../assets/CCStrategy.png";
import GGPFYBP from "../../assets/GGPFYBP.png";
import JS from "../../assets/JS.png";
import JSClasses from "../../assets/JSClasses.png";
import MRF from "../../assets/MRF.png";
import TipsBBW from "../../assets/TipsBBW.png";
import "./Certificate.css";

export default function Certificate() {
  return (

    <>
    <div className="certificate-container">
       
        <section className="certificate-section" id="certificates">
          <h1 className="certificate-title">Certificates</h1>
        <div className="certificate-grid">
        < img src={ARM} alt='ARM Certifcate'/>
        < img src={CEHS} alt='CHES Certificate'/>
        < img src={ComputerBasics} alt='Computer Basics Certificate'/>
        < img src={CSPP} alt='CSPP Certificate'/>
        < img src={CCStrategy} alt="CCStrategy Certificate"/>
        < img src={GGPFYBP} alt="GGPYBP Certificate"/>
        < img src={JS} alt="JS Certificate"/>
        < img src={JSClasses} alt="JSClasses Certificate"/>
        < img src={MRF} alt="MRF Certificate"/>
        < img src={TipsBBW} alt="TipsBBW Certificate"/>
           </div> 
 </section>  
    </div>
  </>
         
  );
}