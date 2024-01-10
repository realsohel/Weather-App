import React from 'react'

import { useEffect, useState } from "react";
import coldBg from "../assets/cold.webp"
import hotBg from "../assets/hot1.webp"
import Descriptions from "../components/Descriptions";
import "../index.css"
import { getFormattedData } from "../weatherService";

const Home = () => {

    const[weather,Setweather] = useState(null);
    const[units,Setunits] = useState("metric");
    const [city,Setcity] = useState("mumbai");
    const [bgimg,Setbgimg] = useState(hotBg);


    useEffect(()=>{
        const fetchWeatherData= async()=>{
        const data = await getFormattedData(city,units);
        Setweather(data);
        // console.log(data)

        const tempBg = units === "metric"?20:68;
        if(data.temp >tempBg){
            Setbgimg(hotBg);
        }else{
            Setbgimg(coldBg);
    
        }
        };
        fetchWeatherData();

    },[units , city]);

    const handleUnits = (e)=>{
        // if()
        const btn = e.currentTarget;
        console.log(btn.innerText)

        if(btn.innerText==='°F'){
        btn.innerText = "°C";
        Setunits("imperial");
        }else{
        btn.innerText = "°F";
        Setunits("metric");
        }
    }

    const enterKeyPressed = (e)=>{
        if(e.keyCode=== 13){
        Setcity(e.currentTarget.value);
        e.currentTarget.blur();
        } // 13 for enter key
        // e.currentTarget.value=;
    } 


    return (
        <div className="App w-[200%] md:w-[100%]  h-[auto]  lg:h-[auto] bg-center bg-cover bg-repeat" style={{backgroundImage:`url(${bgimg})`}}>

        <div className="overlay ">
            {
            weather && <div className="container max-w-4xl m-auto h-[100%] flex flex-col items-center justify-between p-4">

            <div className="slide-left section section__inputs m-4">
                <input onKeyDown={enterKeyPressed} className="text-black " type="text" name="city" placeholder="Enter the City..." />
                <button className="text-black py-3 px-10 border-none rounded-[0.4rem] font-bold cursor-pointer bg-white hover:bg-gray-200 m-4 md:m-0" onClick={(e)=>{handleUnits(e)}}>°F</button>
            </div>
            
            <div className="slide-right  section section__temperature">
                <div className="icons flex flex-col items-center  justify-center">
                <h2 className=" text-base font-medium capitalize">{`${weather.name}, ${weather.country}`} </h2>
                <img src={`${weather.iconURL}`} alt="weather_icon" className="w-20"/>
                <h2 className="capitalize">{`${weather.description}`}</h2>
                </div>
                <div className="temperature  text-[40px] sm:text-[60px] font-medium">
                {`${weather.temp} °${units==="metric"?"C":"F"}`}
                </div>
            </div>
            <Descriptions weather={weather} units={units}/>
            </div>
            }
        
        </div>
        </div>
    )
}

export default Home
