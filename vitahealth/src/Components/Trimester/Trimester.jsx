import React from 'react';
import { useParams } from 'react-router';

import fTrimester from '../../assets/fTrimester.png'

import './Trimester.css';

const Trimester = ({data}) => {
    const {id} = useParams(); 
   
    const trimester=data.data[id-1];
 

    return (
        <div className="trimester">
     <div className="trimesterNameContainer">
        <div className="trimesterImg">
          <img src={fTrimester} alt="" />
        </div>
        <div className="trimesterNameContent">
            <h1>{trimester.name}</h1>
            <h3>{trimester.meaning}</h3>
        </div>
     </div>
     
     <div className="foodsContainer">
        
        <div className="foodstoEat">
            <h3>Foods to Eat </h3>
            <hr />
            <p>{trimester.food.eat}</p>
        </div>
       <div className='borderLine'></div>
        <div className="foodstoAvoid">
        <h3>Foods to Avoid </h3>
        <hr />
          <p>{trimester.food.avoid}</p>
        </div>
     </div>
     <h1>Symptoms</h1>
     <div className="symptomsContainer">
        
        <li><h4>{trimester.symptoms[0].name}</h4>
             <p>{trimester.symptoms[0].remedy}</p>
        </li>
        <li><h4>{trimester.symptoms[1].name}</h4>
             <p>{trimester.symptoms[1].remedy}</p>
        </li>
        <li><h4>{trimester.symptoms[2].name}</h4>
             <p>{trimester.symptoms[2].remedy}</p>
        </li>
     </div>
     <h1>Excercises</h1>
     <div className="exercisesContainer">
        
     <div className="exerciseImg">
            
      </div>
           
           <li> {trimester.exercises[0]}</li>
           <li> {trimester.exercises[1]}</li>
           <li> {trimester.exercises[2]}</li>
           
        
     </div>
    
     <div className="thingsToConsiderContainer">
        <h1>Things To Consider</h1>
       
        <li>{trimester.thingsToConsider[0]}</li>
        <li>{trimester.thingsToConsider[1]}</li>
        
       
     </div>
   </div>
    );
}

export default Trimester;
