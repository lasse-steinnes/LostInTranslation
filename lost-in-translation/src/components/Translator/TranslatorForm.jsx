// Translator component
import { useContext, useEffect, useState } from "react";
import {TranslateContext } from "../Contexts/TranslateContext";
import OneTranslation from "./Translation";
import OneSprite from "./GetSprite";
//import TextToSprite from "../ReadSprite/Sprites";
import '../../index.css' ;

function TranslateToSign(){ // Parent 

    const [translateTxt,setTranslateTxt] = useState(""); // translateTxt is the object in setTranslateTxt state
    //const [translateReports, setTranslateReports] = useState({translateList:[]}); // Need context to take in translatetext
    const [translateReports, setTranslateReports] = useContext(TranslateContext); // Need context to take in translatetext

    //function GetSign(){
    //    // Make an index(pixel) mapping for each letter. size 1200 x 600;
    //    const dd = 0 ; 
    //} // Patch 

    function ToSign(){
        //localStorage.setItem("translate me ", translatetxt);
        // store translation in translateReports
        //const [isImageActive, setIsImageActive] = useState(false);
        translateReports.translateList.push(translateTxt);
        //console.log("translate", translateTxt);
        //console.log("List ", translateReports.translateList)
        // use map to find sprites in assets!
    }

    function MakeSign(){
        //translateReports.translateList.push(translateTxt);
        console.log("text ", translateTxt)
        console.log("get translation")
        //if (translateTxt ==! ""){
        const txtArr = translateTxt.split("");
        console.log("txtArr ", txtArr)
        const imageItems = txtArr.map((stringElem) => {
            return (
            <OneSprite letter = {stringElem}/>
            );
        } );
        console.log(imageItems)
        
        return (
            <>
            {imageItems}
            </>
        );
        //}
    } 

    function onTranslateInput(event){
        setTranslateTxt(event.target.value);
        //console.log(event.target.value);
    }

    return (
    <div>
        <input type="text" onChange={onTranslateInput} />
        <button onClick={ToSign}> Translate Me </button>
        <br /> <br />
        <section>
            <div className ="box">
                <MakeSign/>
            </div>
        </section>
    </div>
    )
};
// <MakeSign/>

// <MakeSign/>
// <TextToSprite sentence = {translateTxt} />
//<TextToSprite sentence = {translateTxt} />

export default TranslateToSign
// <OneTranslation translationData={translateTxt}/>

/*         <br /> <br />
<section>
<div className ="box">
    <link rel="stylesheet" href="">
    </link>
    <canvas width="1200px" height="600px">
    </canvas>
    <TextToSprite sentence = {translateTxt} />
</div>
</section>
*/ 