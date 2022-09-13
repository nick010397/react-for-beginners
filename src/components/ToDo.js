import { useState } from "react"


export default function ToDo(){

  const [toDo,setToDo] = useState(""); //input 작성값
  const [toDos,setToDos] = useState([]); //input값 담는 배열값

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo ==="") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray])   // 함수를 보낼떄 함수의 첫번쟤 변수를 현재 state에 보냄  
    setToDo("")   //state를 직접적으로 수정하지 않는다.
  }
  console.log(toDos)

  
  return(
    <div>
      <h1>My Todolist ({toDos.length})W</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.."/>
      <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((item, index)=><li key={index}>{item}</li>)}

      </ul>
      
    </div>
  )
}