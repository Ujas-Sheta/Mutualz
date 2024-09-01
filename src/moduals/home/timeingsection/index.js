import React from "react";
import "./timeing.scss"
import mobiles from "../../../assests/images/mobiles.png"
import sign from "../../../assests/images/sign.svg"
export default function Timeing(){
    return(
        <div className="timig">
            <div className="container-second">
                <div className="timing-grid">
                    <div className="timing-grid-first">
                        <h5>Es bleiben nur noch</h5>
                        <h6>48:24:59:59</h6>
                        <p>bis die MUTUALZ-App verfügbar ist. Hinterlassen Sie uns Ihre E-Mail-Adresse, damit Sie es als Erster erfahren.</p>
                        <div className="timing-grid-first-img">
                            <img src={sign} alt="sign"/>
                        </div>
                        <button>
                        Teil der Community werden
                        </button>
                    </div>
                    <div className="timing-grid-second">
                        <img src={mobiles} alt='mobiles'/>
                    </div>
                </div>
            </div>

        </div>
    )
}