import React from "react";
import "./herobanner.scss";
import Herobannerlogo from "../../../assests/logos/herobanner-logo.svg";
import Herobannerimg from "../../../assests/images/herobanner-app.png";
import Headerlogotwo from "../../../assests/logos/header-logo.svg";
import Downicontwo from "../../../assests/icons/downicon.svg";
export default function Herobanner(){
    return(
        <div className="herobanner">
            <div className="herobanner-grid">
                <div className="herobanner-left-grid">
                        <button>
                            <span>Teil der Community werden</span>
                            <img src={Downicontwo} />
                        </button>
                    <h1 class="animate__animated animate__fadeInLeft wow" data-wow-offset="200">Einfach mehr</h1>
                    <h2 class="animate__animated animate__fadeInLeft wow" data-wow-offset="200">mit</h2>
                </div>
                <div className="herobanner-right-grid">
                    <button>
                        <img src={Headerlogotwo} />
                        <span>für dein Business</span>
                    </button>
                     <h2 class="animate__animated animate__fadeInRight  wow" data-wow-offset="200">genießen</h2>
                    <img class="animate__animated animate__fadeInRight  wow" data-wow-offset="200" src={Herobannerlogo}/>
                </div>
            </div>
            <div className="herobanner-mobile-img">
                <img src={Herobannerimg}/>
            </div>
        </div>
    )
}