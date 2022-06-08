
import React, {useState, useRef, useEffect} from "react";
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri';



const isNotActiveStyle = `flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize`;
const isActiveStyle = `flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize`;

const events= [
    {name: 'Black Lives Matter'},
    {name: "Stargazing"},
    {name: "CodeCamp"}
]

export default function Home(){
    return(
        
        
        
            <div>
                <div className=""> 
                    <div className="flex flex-col gap-5">
                        <NavLink
                        to="/"
                        className={(isActive) => isActive? isActiveStyle : isNotActiveStyle}
                        >
                            
                        </NavLink>
                        <h3 className="mt-2 px-5 text-base 2xl:text-xl">
                            Public Events
                        </h3>
                        {events.slice(0, events.length-1).map((event)=>(
                            <NavLink 
                            to={`/event/${event.name}`}
                            className={(isActive) => isActive? isActiveStyle : isNotActiveStyle}
                            key={event.name}
                            >
                             {event.name}   
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
        
