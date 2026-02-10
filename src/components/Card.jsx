import { useState } from 'react';


function Card({item, id, handleClick, disabled}){

    const itemClass = item.stat ? " active " + item.stat :"";

    //added later - for text to speech 
    const speak = (message, lang) => {
        const utterance = new SpeechSynthesisUtterance(message);
        //utterance.lang = "es-ES";

        if(lang=='PL'){
            utterance.lang = "pl-PL";
        }
        else if(lang=='ES')
        {
            utterance.lang = "es-ES";
        }
        else{
            utterance.lang = "en-US";
        }
         // or "pl-PL", "en-GB", etc.
        speechSynthesis.speak(utterance);
    };


    return (
        <div className={"card"+itemClass} onClick={()=>{
            if(!disabled){
            handleClick(id);
            speak(item.text, item.lang)
            };
        }}>
        {/* <div className="card" onClick={()=>handleClick(id)}></div> */}
            <span role="img" aria-label={item.text}>{item.text}{item.icon}</span>{/* {item.id} */}
        </div>
    )
}


export default Card;


