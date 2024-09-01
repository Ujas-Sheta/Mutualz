import React from "react";
import "./stadt.scss";
import graybac from "../../../assests/images/gray-bac.png"
import Bluecurv from "../../../assests/images/blue-line-curvsvg.svg"
import stadtimg1 from "../../../assests/images/stadtimg1png.png"
import stadtimg2 from "../../../assests/images/stadtimg2.png"
export default function Stadt(){
    return(
        <div className="stadt">
            <div className="container">
                <div className="stadt-position-div">
                    <div className="stadt-bac-img">
                        <img src={graybac}/>
                    </div>
                    <div className="stadt-title">
                        <h6>
                            Werde jetzt Teil unserer Community und gestalte 
                            die Angebote deiner Stadt 
                            <span> selbst mit!</span>
                        </h6>
                    </div>
                    <div className="stadt-line-img">
                        <img src={Bluecurv} alt="blueline"/>
                    </div>
                </div>
                <div className="stadt-hover">
                    <div className="stadt-first-child">
                        <div className="stadt-first-child-img">
                            <img src={stadtimg1}/>
                        </div>
                        <div className="stadt-first-child-blur"></div>
                        <div className="stadt-first-child-text">
                            <p>OLDENBURG</p>
                        </div>
                    </div>
                    <div className="stadt-second-child">
                        <div className="stadt-second-child-img">
                            <img src={stadtimg2}/>
                        </div>
                        <div className="stadt-second-child-blur"></div>
                        <div className="stadt-second-child-text">
                            <div>
                                <p>BREMEN</p>
                                <span>Demnächst</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}