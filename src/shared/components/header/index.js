import React from "react";
import "./header.scss";
import Headerlogo from "../../../assests/logos/header-logo.svg";
import Downicon from "../../../assests/icons/downicon.svg";
import Mobilemenu from "../../../assests/icons/mobile-menu.svg";
export default function Header() {
  return (
    <header>
        <div className="header-container">
            <div className="header-flex">
                <div className="header-logo">
                    <img src={Headerlogo} alt="header-logo" />
                </div>
                <div className="header-items">
                    <div className="header-btn">
                        <button>
                            <span>Teil der Community werden</span>
                            <img src={Downicon} />
                        </button>
                    </div>
                    <a>Funktion</a>
                    <a>Standorte</a>
                    <a>Über uns</a>
                    <a>Kontakt</a>
                    <div className="header-sec-btn">
                        <button>
                            <img src={Headerlogo} />
                            <span>für dein Business</span>
                        </button>
                        <div className="header-color-change-btn">
                            <div className="header-color-change-btn-de">DE</div>
                            <div className="header-color-change-btn-en">EN</div>
                        </div>
                        <div className="header-mobile-view-menu">
                            <img src={Mobilemenu}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
