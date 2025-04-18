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
// import CertifactePer from "../../asstets/CertificatePer.jpg"
import "./Certificate.css";

export default function Certificate() {
  return (

    <>
    <div className="certificate-container">
        {/* <object data="https://go.edovo.com/my_edovo" type="application/pdf" width="100%" height="100%">
            <p>Your browser does not support PDFs. </p>
             
            
           
        </object> */}
        <section className="certificate-section" id="certificates">
          <h1 className="certificate-title">Certificates</h1>
        <div className="certificate-header">
        {/* <img src={CertifactePer} /> */}
        {/* <h2 className="certificate-header-text">I have also completed the following courses:</h2> */}
        < img src={ARM}/>
        < img src={CEHS}/>
        < img src={ComputerBasics}/>
        < img src={CSPP}/>
        < img src={CCStrategy}/>
        </div>
        <div className="certificate-header2">
        < img src={GGPFYBP}/>
        < img src={JS}/>
        < img src={JSClasses}/>
        < img src={MRF}/>
        < img src={TipsBBW}/>
           </div> 
 </section>  
    </div>
  </>
         
  );
}