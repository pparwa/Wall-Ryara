import { createSlice  ,PayloadAction} from "@reduxjs/toolkit";
import {ToDo} from '../../Types/Types'

export interface TodosState {
  todos: ToDo[];
}


 const initialState: TodosState = {
  todos: [],
};

const slice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<ToDo>)=> {
      state.todos.push(action.payload);
      
    },
    removeTodo: (state, action:PayloadAction<{id:string}>) => {
   
     state.todos =  state.todos.filter((todo)=> todo.id != action.payload.id)

    },
    doTodo: (state, action:PayloadAction<{id:string}>) => {
     
      state.todos = state.todos.map(todo=>todo.id == action.payload.id ?  {...todo,isDone:true,duration:'0'} : todo )
    },
    changeStatus:(state , action:PayloadAction<{id:string}>)=>{
      state.todos = state.todos.map(todo=>todo.id == action.payload.id ?  {...todo,status:'delay'} : todo )
 
    }
  },
});

export const { addTodo, removeTodo , doTodo , changeStatus} = slice.actions;
export default slice.reducer;
