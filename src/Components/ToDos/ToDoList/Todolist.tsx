
import Todo from "../ToDo/Todo";
import { useSelector } from "react-redux";
import { ToDo } from "../../../Types/Types";
import { RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
export default function Todolist() {
  const todos:ToDo[] = useSelector((state:RootState) => state.todos); 
  const [cards , setCards] = useState<ToDo[]>(todos)
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
    
  };
  useEffect(()=>{
setCards(todos)
  },[ todos])


  const handleDrop = (index: number) => {
    if (draggedItemIndex === null) return;

    const updatedItems = [...cards];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, draggedItem); 
    setCards(updatedItems);
    setDraggedItemIndex(null); 
  };


 return (
    <>
       <h4 className="list-title">به ترتیب اولویت میتوانید تسک هارا جابجا کنید</h4>
   
      {cards?.map((todo , index) => (
        <Todo key={todo.id} title={todo.title} id={todo.id} date={todo.date} 
        isDone={todo.isDone} status={todo.status} duration={todo.duration}  
        onDragStart={handleDragStart}  onDrop={handleDrop}
        index={index}/>
      ))}
    
    </>
  );
 
}


