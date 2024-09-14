import  {  FormEvent, useState } from "react";

import "./App.css";
import Todolist from "./Components/ToDos/ToDoList/Todolist";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/store/Todos";
import moment from "moment-jalaali";
import { AppDispatch } from "./Redux/store";
import ToDoForm from "./Components/ToDos/ToDoForm/ToDoForm";
import { State } from "./Types/Types";
export default function App() {
  const [state, setState] = useState<State>({
    title:"",
    duration:""
  });
  const dispatch = useDispatch<AppDispatch>();

  const addTodoHandler = (event:FormEvent) => {
     const currentDate = new Date();
     const persianDate = moment(currentDate).format("jYYYY/jMM/jDD");
    event.preventDefault()
    dispatch(addTodo({ id: crypto.randomUUID(), title:state.title, isDone: false , date:persianDate , duration:state.duration ,status:"Normal"}));
    setState({title:"" , duration:""})
  };

  return (
    <>
      <header>
        <h1 >دیوار فعالیتها</h1>
      </header>
      <ToDoForm   addToDo={addTodoHandler} state={state} setState={setState}/>
      <div className="todo-container">
        <ul className="todo-list">
          <Todolist/>
        </ul>
      </div>
    </>
  );
}


