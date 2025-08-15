import ARM from "../../../public/assets/ARM.png";
import CEHS from "../../../public/assets/CEHS.png";
import ComputerBasics from "../../../public/assets/ComputerBasics.png";
import CSPP from "../../../public/assets/CSPP.png";
import CCStrategy from "../../../public/assets/CCStrategy.png";
import GGPFYBP from "../../../public/assets/GGPFYBP.png";
import JS from "../../../public/assets/JS.png";
import JSClasses from "../../../public/assets/JSClasses.png";
import MRF from "../../../public/assets/MRF.png";
import TipsBBW from "../../../public/assets/TipsBBW.png";
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