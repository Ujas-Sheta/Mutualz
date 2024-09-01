import React from "react";
import Herobanner from "./herobanner";
import Services from "./services";
import Mutualzslider from "./mutualzslider";
import Stadt from "./stadtsection";
import Timeing from "./timeingsection";
import Blackwhitebox from "./blackwhitebox";
import Abouthus from "./abouthus";

export default function Home(){
    return(
        <div>
            <Herobanner/>
            <Services/>
            <Mutualzslider/>
            <Stadt/>
            <Timeing/>
            <Blackwhitebox/>
            <Abouthus/>
        </div>  
    )
}