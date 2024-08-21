import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [name,setName] = useState("");
  const [age,setAge] = useState();

  let data = { 
    name: name,
    age: age
  }

  function handleSubmit(e){
    e.preventDefault();
    
    if(data.name !=="" && data.age !== 0){
      fetch("http://localhost:8000",{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type":"application/json"
        }
      })
    }
    
    setName("");
    setAge("");
    
    data = {};
  }

  

  return (
   <>
     <div className="container">
     <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Your Name "/>  
      <input value={age} onChange={e => setAge(e.target.value)} type="Number" placeholder="Enter your age" />
      <button>Submit</button>
     </form> 

     </div> 
  
   </>        
  );
}

export default App;
