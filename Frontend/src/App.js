import {useEffect,useState} from "react";
import './App.css';
import {addToDo,getAllToDo,updateToDo,deleteToDo} from "./utils/Api.js";
import ToDo from "./component/ToDo.js";

function App() {
  const [toDo,setToDo]=useState([]);
  const [text,setText]=useState("");
  const [isUpadating,setIsUpdating]=useState(false);
  const [toDoId,setToDoId]=useState("");
  
  useEffect (()=>{
    getAllToDo(setToDo);
  },[])
  
  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  
  
return (
 <div className="App">
      <div className="container">
        <h1>ToDo APP</h1>
        <div className="top">
        <input
        type="text"
        placeholder="Add Todos....."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button className="add" onClick={
          isUpadating?
          ()=>updateToDo(toDoId,text,setToDo,setText,setIsUpdating) :
          ()=>addToDo(text,setText,setToDo)
        }
        >
          {
            isUpadating ? "UPDATE" : "ADD"
          }
        </button>
      </div>
      <div className="lst">
        { toDo? toDo.map((item) => (
          <ToDo
          key={item._id}
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)}
           />
          )): "Add YOUR TODOS....."
           }
       </div>
      </div>
  </div>
  )
}

export default App;
