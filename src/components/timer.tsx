import React, { useState } from "react";
import { useEffect, useRef } from "react";
import '../index.css'
function Timer() {
    
    const [seconds, updateSecond] = useState(0);
    const [miniutes, updateMiniute] = useState(0);
    const timer = useRef(0);
    useEffect(() => {
       timer.current= setTimeout(() => {
        updateSecond((second) => second + 1)
       }, 1000); 
        return () => {
           if (timer.current !== null) {
               clearInterval(timer.current);
           }
       }
    });
    if (seconds > 59) {
        updateSecond(0);
        updateMiniute((miniutes) => miniutes + 1)
    }
    if (miniutes < 10 && seconds < 10) {
        return (
            <h1 className=" text-8xl  border-b-4 border-gray-300 flex justify-center" > 0{miniutes}::0{seconds} </h1>
        )            
    } else if (seconds < 10) {
        return (
            <h1 className=" text-8xl  border-b-4 border-gray-300 flex justify-center" > {miniutes}::0{seconds} </h1>
        )
    } else if (miniutes < 10) {
        return (
            <h1 className=" text-8xl  border-b-4 border-gray-300 flex justify-center" > 0{miniutes}::{seconds} </h1>   
        )
    } else {
        return (
            <h1 className=" text-8xl  border-b-4 border-gray-300 flex justify-center" > {miniutes}::{seconds} </h1>   
        )
    }
}

function TimerWrapper() {
    
    return (
        <div className="flex px-40 py-50 flex-col align-middle justify-center text-white">
            <Timer />
            <h2 className=" flex justify-center text-4xl" >Work</h2>
        </div>
    )
}

export default TimerWrapper