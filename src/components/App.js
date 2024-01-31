
import React, {useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([])


  const fetchSuggestions =  (query) => {
    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
    const filteredSuggestions = fruits.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
    setArr(filteredSuggestions);
  };

  useEffect(() => {
    fetchSuggestions(text);
  }, [text]);


  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <ul>
        {
          arr.map((item)=>{
            return(
              <li>{item}</li>
            )
          })
        }
        </ul>
    </div>
  )
}

export default App
