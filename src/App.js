import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import Display from "./Display"
import {useState} from 'react'

function App() {

  const [id, setId] = useState(null)

  return (
    <div>
      <List chooseId={setId}/>
      <Display postId={id}/>
    </div>
  );
}

export default App;
