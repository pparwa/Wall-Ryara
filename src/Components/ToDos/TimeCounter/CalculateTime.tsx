import React, { useState, useEffect } from 'react';
import { AppDispatch  } from '../../../Redux/store';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../../Redux/store/Todos';

const CalculateTime = ({duration , isDone , id}:{duration:number , isDone:boolean , id:string}) => {
   const dispatch = useDispatch<AppDispatch>()
const [timeRemaining, setTimeRemaining] = useState<number>( duration * 60)

  useEffect(() => {  
    if (timeRemaining <= 0 || isDone) return;  
   
    const intervalId = setInterval(() => {  
      setTimeRemaining(prevTime => prevTime - 1);  
    }, 1000);  
     timeRemaining / duration < 30 ? dispatch(changeStatus({id})) : ''
    return () => clearInterval(intervalId); 
  
  }, [timeRemaining , isDone]);  

  const formatTime = (seconds: number): string => {  
      const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };  

  return (  
    <div>   
      <div style={{ fontSize: '1.3rem' , position:'absolute',top:"-2.5rem",right:"0" , color:timeRemaining / duration < 30? '#ff6464': '#bad8b6' }}>  
        {formatTime(timeRemaining)}  
      </div>  
    </div>  
  );
}

export default CalculateTime