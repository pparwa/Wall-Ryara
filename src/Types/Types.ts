interface ToDo{
  title:string,
  id:string,
  isDone:boolean,
  date:string,
  status:string,
  duration:string
}
interface State{
  title:string,
  duration:string
}

interface Time{
    hours:number,
    minutes:number,
    seconds:number
}
export {ToDo , Time ,State}