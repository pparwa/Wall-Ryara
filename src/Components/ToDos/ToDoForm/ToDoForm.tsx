import React from 'react'
import { FormEvent } from 'react'
import { State } from '../../../Types/Types'
import './ToDoForm.css'
interface Props {
    addToDo:(event : FormEvent)=>void,
    setState:(obj:State)=>void,
    state:State
}

const ToDoForm = ({addToDo , setState , state}:Props) => {
  return (
     <form onSubmit={addToDo}>
        <input
          type="text"
          className="todo-input"
          value={state?.title}
          placeholder="عنوان فعالیت را وارد نمایید"
          onChange={(event) => setState({...state,title:event.target.value})}
          required={true}
        />
        <input
          type="text"
          className="todo-input"
          value={state?.duration}
          placeholder="زمان لازم برحسب دقیقه"
          onChange={(event) => setState({...state ,duration:event.target.value})}
          required={true}
        />
        <div className='btn-box'>
        <button className="todo-button" type="submit" >
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        </div>
      </form>
  )
}

export default ToDoForm