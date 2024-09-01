import React from "react";
import "./services.scss";
import Servicesimg from "../../../assests/images/mutualz-red-img.svg"
import Servicesimg2 from "../../../assests/images/round-blue.svg"
export default function Services(){
    return(
            <div className="services">
                <div className="main-container">
                    <div className="services-grid">
                        <div className="services-grid-left" >
                            <h4>Deshalb sind wir</h4>
                            <div className="services-grid-img">
                                <img className="services-grid-img-round" src={Servicesimg2}/>
                                <img className="services-grid-img-logo" src={Servicesimg}/>
                            </div>
                        </div>
                        <div className="services-grid-right">
                            <div className="services-grid-right-first-grid">
                                <div className="services-grid-right-first-grid-line">
                                    <div className="services-grid-right-first-grid-line-blue"></div>
                                </div>
                            </div>
                            <div className="services-grid-right-details">
                                <h5>Das Beste in deiner Stadt</h5>
                                <h5>Personalisierte Angebote</h5>
                                <h5 className="services-grid-right-details-lasth5">Geld sparen und mehr genießen</h5>
                                <p>Mit MUTUALZ bist du immer informiert, was in deiner Umgebung passiert: 
                                    Entdecke brandneue Restaurants, angesagte Events und vieles mehr. Unsere 
                                    Community liefert dir exklusive Einblicke und Insider-Infos, die du sonst 
                                    nirgendwo findest.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}