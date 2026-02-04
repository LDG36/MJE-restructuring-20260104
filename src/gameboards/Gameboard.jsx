import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import levelsData from "../data/levels.json";

const Gameboard = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    //const {originalLevel, levelcounter2} = state;
    const originalLevel = state?.originalLevel
    const levelcounter2 = state?.levelcounter2

    
    const bottomRef = useRef(null);
    useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    // //Copilot says this code is redundant: ---------------
    // const [levelcounter, setLevelcounter] = useState(originalLevel ?? levelcounter2 ?? 1);
    // //StrictMode interfered mind!!! check other useEffects()!!!
    // useEffect(() => {
    //   setLevelcounter(originalLevel ?? levelcounter2 ?? 1);
    // }, [originalLevel, levelcounter2])
    // //----------------
    const levelcounter = originalLevel ?? levelcounter2 ?? 1;


    //important code - generating a level from .json and shuffling
    //ORIGINAL - before adding useEffect for Repeat button!
    //------
    // const [items, setItems] = useState(
    // levelsData[`level_${levelcounter}`].sort(() => Math.random() - 0.5));
    //------

    //important code - generating a level from .json and shuffling
    //UPGRADED with: Loading fresh from .json at each start of the level thanks to useEffect
    const [items, setItems] = useState([]);
    useEffect(() => {
      const freshItems = levelsData[`level_${levelcounter}`]
        .map(item => ({ ...item })) // clone objects - recomended by Copilot
        .sort(() => Math.random() - 0.5); // shuffle
      setItems(freshItems);
    }, [levelcounter]);

    //important check - why my "vanish" classes gets overridden (not needed anymore)
    useEffect(() => {
      console.log("items UPDATED:", items);
    }, [items]);

          function vanishCheck(id)
          {
              const statExist = items[id].stat.includes('vanish');
              return statExist;
          }
        
          const [prevprev, setPrevprev] = useState(-1);
          const [prev, setPrev] = useState(-2);
          const [disabled, setDisabled] = useState(false);
          const [moves, setMoves] = useState(0);

          //---------------------------------------------
          //Timer related! ------------------------------------------------------
          const [time, setTime] = useState(0);        // seconds
          const [isRunning, setIsRunning] = useState(false);
          const timerRef = useRef(null);
    
          // Start the timer
          const startTimer = () => {
            if (timerRef.current) return; // prevent multiple intervals
    
            setIsRunning(true);
            timerRef.current = setInterval(() => {
              setTime(prev => prev + 10);
            }, 10);
          };
    
          // Stop the timer
          const stopTimer = () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setIsRunning(false);
          };
    
          // Reset the timer
          const resetTimer = () => {
            stopTimer();
            setTime(0);
          };
    
            // Format time as MM:SS.mmm
          const formatTime = (ms) => {
            const minutes = Math.floor(ms / 60000);
            const seconds = Math.floor((ms % 60000) / 1000);
            // const milliseconds = ms % 1000;
            const hundredths = Math.floor((ms % 1000) / 10);
    
    
            return (
              String(minutes).padStart(2, "0") + ":" +
              String(seconds).padStart(2, "0") + "." +
              String(hundredths).padStart(2, "0")
            );
          };
          //Time related--------------------------------------------------------------

    
          function checkThree(current)
          {
              setDisabled(true);  
    
              if(items[current].id == items[prev].id && items[current].id == items[prevprev].id )
              {
                
                items[current].stat = "correct";
                items[prevprev].stat = "correct";
                items[prev].stat = "correct";
                setItems([...items])            
    
                setTimeout(()=>{
                  items[current].stat = "vanish"
                  items[prevprev].stat = "vanish"
                  items[prev].stat = "vanish"
                  setPrev(-2),
                  setPrevprev(-1)
    
                  //important code - level finish
                  if (items.every(item => item.stat.includes("vanish"))) {
                  navigate('/nextboard', {state: {moves, time, levelcounter} });
                  stopTimer();
                  resetTimer();
                  }
    
                  setDisabled(false); 
                },2000)
              }
              else{
                items[current].stat = "wrong";
                items[prevprev].stat = "wrong";
                items[prev].stat = "wrong";
                setItems([...items])
    
                setTimeout(()=>{
                    items[current].stat = ""
                    items[prevprev].stat = ""
                    items[prev].stat = ""
                    setPrev(-2),
                    setPrevprev(-1)
                    setDisabled(false); 
                },3000)
              }
          }
    
          function handleClick(id){
                if((!vanishCheck(id))){
                  if(prev == -2)
                  {    
                    items[id].stat = 'active'
                    setItems([...items])
                    setPrev(-1);
                    setPrevprev(id);
                    startTimer();
                    
                  }
                  else if(prev == -1)
                  {
                    if(id === prevprev){return}
    
                    items[id].stat = 'active'
                    setItems([...items])
                    setPrev(id);
                    
                  }
                  else{
    
                    if(id === prev || id === prevprev){return}
    
                    setMoves(moves+1);
                    //items[id].stat = 'card3'
                    checkThree(id);
                    
                  }
                }
          }
    



  return (
          <>
        <div className="gameContainer" ref={bottomRef}>
          {items.map((item, index) => (

            <Card 
            key={index} 
            item={item} 
            id={index} 
            handleClick={handleClick} 
            disabled={disabled}
            />

            ))}
        </div>
        <div className="styleMoves">
          Amount of Attempts: <b>{moves}</b> |  Time: <b>{formatTime(time)}</b>
        </div>

      </>
  )
}

export default Gameboard