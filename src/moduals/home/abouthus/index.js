import React from "react";
import "./abouthus.scss"
import profileicon from "../../../assests/icons/user-icon.svg";
export default function Abouthus(){
    return(
        <div className="abouthus">
            <div className="container-third">
                <div className="abouthus-title">
                    <h3>Über uns</h3>
                    <span>Wir sind MUTUALZ</span>
                    <p>Unsere Vision ist es, das Aussterben der Innenstädte zu 
                        verhindern und sie in eine digitale Zukunft zu führen. 
                        Was uns verbindet, ist nicht nur eine Freundschaft, sondern auch 
                        der gemeinsame Wunsch, innovative Lösungen zu schaffen. Wir möchten 
                        Menschen miteinander vernetzen, lokale Unternehmen unterstützen 
                        und einzigartige Erlebnisse in den urbanen Zentren ermöglichen. 
                        Gemeinsam gestalten wir eine lebendige und nachhaltige Zukunft für 
                        unsere Innenstädte, basierend auf einer starken Verbundenheit 
                        und einer gemeinsamen Vision.</p>
                </div>
            </div>
            <div className="container-fourth">
                <div className="abouthus-profiles">
                    <div className="abouthus-profiles-bac"></div>
                    <div className="abouthus-profile">
                        <div className="abouthus-profile-details">
                            <div>
                                <div className="abouthus-profile-img">
                                    <img src={profileicon}/>
                                </div>
                                <div className="abouthus-profile-text">
                                    <div className="abouthus-profile-text-heading">
                                        <h6>
                                            MARIAN-NOÉL ECKARDT
                                            <div className="abouthus-profile-text-heading-line"></div>
                                        </h6>
                                    </div>
                                    <p>CEO</p>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="abouthus-profile">
                        <div className="abouthus-profile-details">
                            <div>
                                <div className="abouthus-profile-img">
                                    <img src={profileicon}/>
                                </div>
                                <div className="abouthus-profile-text">
                                    <div className="abouthus-profile-text-heading">
                                        <h6>
                                            MARIAN-NOÉL ECKARDT
                                            <div className="abouthus-profile-text-heading-line"></div>
                                        </h6>
                                    </div>
                                    <p>CEO</p>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="abouthus-profile">
                        <div className="abouthus-profile-details">
                            <div>
                                <div className="abouthus-profile-img">
                                    <img src={profileicon}/>
                                </div>
                                <div className="abouthus-profile-text">
                                    <div className="abouthus-profile-text-heading">
                                        <h6>
                                            MARIAN-NOÉL ECKARDT
                                            <div className="abouthus-profile-text-heading-line"></div>
                                        </h6>
                                    </div>
                                    <p>CEO</p>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="abouthus-profile">
                        <div className="abouthus-profile-details">
                            <div>
                                <div className="abouthus-profile-img">
                                    <img src={profileicon}/>
                                </div>
                                <div className="abouthus-profile-text">
                                    <div className="abouthus-profile-text-heading">
                                        <h6>
                                            MARIAN-NOÉL ECKARDT
                                            <div className="abouthus-profile-text-heading-line"></div>
                                        </h6>
                                    </div>
                                    <p>CEO</p>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="abouthus-profile">
                        <div className="abouthus-profile-details">
                            <div>
                                <div className="abouthus-profile-img">
                                    <img src={profileicon}/>
                                </div>
                                <div className="abouthus-profile-text">
                                    <div className="abouthus-profile-text-heading">
                                        <h6>
                                            MARIAN-NOÉL ECKARDT
                                            <div className="abouthus-profile-text-heading-line"></div>
                                        </h6>
                                    </div>
                                    <p>CEO</p>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}