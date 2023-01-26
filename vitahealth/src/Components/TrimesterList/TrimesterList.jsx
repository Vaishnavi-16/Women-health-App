import React from 'react';
import { Route, Router, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import { trimesterPhase,trimester } from '../../data';


import './TrimesterList.css';


export default function TrimesterList() {
  
  const TrimesterCard=({name,weeks})=>(
    
  <div className='TrimesterPhaseCard'>
    <h3>{name}</h3>
    <p>{weeks}</p>
  </div>
    
    
  )  
  
  return (
 <div className='TrimesterContainer'>
 <h2>Select Trimester</h2>
 <div className="selectTrimesterContainer">
   
    {
      trimesterPhase.map((trimester)=>( 
       <Link to={`/trimester/${trimester.id}`} key={trimester.id}>
         <TrimesterCard {...trimester} />
       </Link>
      ))
    }
     
    </div>
 </div>


   
   
   
    
  
  )


      
    
     
     
    

    
}

