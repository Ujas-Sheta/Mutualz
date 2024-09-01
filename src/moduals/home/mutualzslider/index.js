import React from "react";
import "./mutualzslider.scss";
import Mutualazborder from "../../../assests/images/mutualzboreder.svg"
import Alle from "../../../assests/images/alleroud.png"
import Slider from "react-slick";
import Mobileone from "../../../assests/images/mobileone.png"; 
import Mobiletwo from "../../../assests/images/mobiletwo.png"; 
import Mobilethree from "../../../assests/images/mobilethree.png"; 
import Mobilefour from "../../../assests/images/mobilefoure.png"; 
import Mobilefive from "../../../assests/images/mobilefive.png"; 
export default function Mutualzslider(){
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: true,
                    centerPadding: "0px",
                    infinite: true,
                    dots: true
              }
            },
          ]
      };
    return(
        <div className="mutualz-slider-main">
            <div className="main-container">
                <div className="mutualzslider-title">
                    <div className="mutualzslider-title-first">
                        <h4>Werde</h4>
                        <img src={Mutualazborder} alt="Mutualaz"/>
                    </div>
                    <div className="mutualzslider-title-second">
                        <p>und genieße</p>
                        <img alt="alle" src={Alle}/>
                        <p>Vorteile</p>
                    </div>
                </div>
            </div>
            <div className="mutualz-sliders">
                <Slider {...settings}>
                    <div className="mutualz-sliders-main">
                        <div className="mutualz-slider">
                            <div className="mutualz-slider-img">
                                <img alt="mobilemap" src={Mobileone}/>
                            </div>
                            <div className="mutualz-slider-detaile">
                                <div className="mutualz-slider-left-child">
                                    <div className="mutualz-slider-line">
                                        <div className="mutualz-slider-line-red"></div>
                                    </div>
                                </div>
                                <div className="mutualz-slider-right-child">
                                    <h6>Restaurant aussuchen</h6>
                                    <p>Durch die einfachen Filterfunktionen und die Kartenansicht siehst 
                                        du welche Anbieter sich in deiner Nähe befinden. Wenn du das 
                                        Restaurant, Café oder die Bar deiner Wahl betrittst, scannst 
                                        du einfach über die MUTUALZ-App den QR-Code. Dadurch kannst du 
                                        dir direkt die Karte online ansehen und die  Coupons und Rabatte, 
                                        die dir zur Verfügung stehen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mutualz-sliders-main">
                        <div className="mutualz-slider">
                            <div className="mutualz-slider-img">
                                <img alt="mobilemap" src={Mobiletwo}/>
                            </div>
                            <div className="mutualz-slider-detaile">
                                <div className="mutualz-slider-left-child">
                                    <div className="mutualz-slider-line">
                                        <div className="mutualz-slider-line-red"></div>
                                    </div>
                                </div>
                                <div className="mutualz-slider-right-child">
                                    <h6>Über die App bestellen</h6>
                                    <p>Wenn du dich entschieden hast, bestellst du einfach über die 
                                        Gastronomie-Seite in der App, ohne eine Servicekraft rufen 
                                        zu müssen. Dazu musst du nur den „Bestellen / Zahlen“-Button 
                                        anklicken und deine Tischnummer eingeben, die entweder schon 
                                        auf deinem Tisch steht oder durch den QR-Code übermittelt wurde.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mutualz-sliders-main">
                        <div className="mutualz-slider">
                            <div className="mutualz-slider-img">
                                <img alt="mobilemap" src={Mobilethree}/>
                            </div>
                            <div className="mutualz-slider-detaile">
                                <div className="mutualz-slider-left-child">
                                    <div className="mutualz-slider-line">
                                        <div className="mutualz-slider-line-red"></div>
                                    </div>
                                </div>
                                <div className="mutualz-slider-right-child">
                                    <h6>Angebot einlösen</h6>
                                    <p>Durch die einfachen Filterfunktionen und die Kartenansicht siehst 
                                        du welche Anbieter sich in deiner Nähe befinden. Wenn du das 
                                        Restaurant, Café oder die Bar deiner Wahl betrittst, scannst 
                                        du einfach über die MUTUALZ-App den QR-Code. Dadurch kannst du 
                                        dir direkt die Karte online ansehen und die  Coupons und Rabatte, 
                                        die dir zur Verfügung stehen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mutualz-sliders-main">
                        <div className="mutualz-slider">
                            <div className="mutualz-slider-img">
                                <img alt="mobilemap" src={Mobilefour}/>
                            </div>
                            <div className="mutualz-slider-detaile">
                                <div className="mutualz-slider-left-child">
                                    <div className="mutualz-slider-line">
                                        <div className="mutualz-slider-line-red"></div>
                                    </div>
                                </div>
                                <div className="mutualz-slider-right-child">
                                    <h6>Easy bezahlen</h6>
                                    <p>Als nächstes wählst du nur noch die Zahloption aus, die 
                                        am besten zu dir passt  und schon hast du bezahlt. Deine 
                                        Rechnung wird in der App gespeichert. Falls du einen 
                                        Papier-Bon benötigst, sprich bitte das Servicepersonal an.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mutualz-sliders-main">
                        <div className="mutualz-slider">
                            <div className="mutualz-slider-img">
                                <img alt="mobilemap" src={Mobilefive}/>
                            </div>
                            <div className="mutualz-slider-detaile">
                                <div className="mutualz-slider-left-child">
                                    <div className="mutualz-slider-line">
                                        <div className="mutualz-slider-line-red"></div>
                                    </div>
                                </div>
                                <div className="mutualz-slider-right-child">
                                    <h6>Community Funktion</h6>
                                    <p>Du bist total begeistert von deinem Restaurantbesuch und 
                                        möchtest unbedingt deinen Freund:innen und deiner Familie 
                                        davon erzählen? Kein Problem, poste einfach deine 
                                        Erfahrungen mit schnellem Sternesystem und Bild und alle 
                                        deine Follower sehen deine Bewertung.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}