
import { FC } from "react";

import { useDispatch } from "react-redux";

import CalculateTime from "../TimeCounter/CalculateTime";

import {  removeTodo  , doTodo} from "../../../Redux/store/Todos";
import { AppDispatch } from "../../../Redux/store";
import './ToDo.css'

interface ITodoProps {
  title:string
   id:string
    isDone:boolean
     date: string,
     duration:string,
     index:number,
     status:string,
     onDragStart:(index:number)=>void,
     onDrop:(index:number)=>void
}

const Todo:FC<ITodoProps> = ({ title,status, id, isDone , date , index,duration,onDragStart , onDrop }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
<div className="container">
        <CalculateTime  duration={parseInt(duration)}  isDone={isDone} id={id}/>
    <div 
      className="todo"
      style={{backgroundColor:status == "Normal" ? '#a9c52f' : '#ff6464'}}
      draggable
      onDragStart={()=>onDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={()=>onDrop(index)}
      >
      <li className="todo-item">{title} </li>
      <li className="todo-date">{date}</li>
      

      
      <button
        className="complete-btn"
        onClick={() => dispatch(doTodo({ id: id }))}
      >
       
        {isDone ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-circle-notch fa-spin"></i>
        )}
      </button>
      
      <button
        className="trash-btn"
        onClick={() => dispatch(removeTodo({ id: id }))}
      >
        <i className="fas fa-trash"></i>
      </button>

    </div>

    </div>
  );
}

export default Todo
