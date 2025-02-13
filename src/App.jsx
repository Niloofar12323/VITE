import { useState, useEffect } from 'react';
import './App.scss';
import ListItem from './components/ListItem';
import { API_URL } from './config';
const BASE_URL = API_URL // Hier steht die Backend-URL

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(){
    const response = await fetch(BASE_URL);
    const {data} = await response.json();
    console.log({data});
    setList(data)
      // Alle Tasks abrufen
      // setList() - hier sollen die geholten Daten im State gespeichert werden
  }

  const handleNewTask = (evt) => {
    evt.preventDefault();
    setTask("");
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => {
        console.log({ res });
        getData();
      })

    // Daten für neuen Task sollen an das Backend geschickt werden
    // Anschließend müssen die aktualisierten Daten erneut abgerufen werden
  }

  const handleDeleteAll = (evt) => {
    // Hier sollen alle Daten gelöscht werden
    // Anschließend müssen die aktualisierten Daten abgerufen werden
  }

  return (
    <div className="app">
      <h1>Task List</h1>
      <form action="">
        <label>
          Add a new task
          <input type="text" value={task} onChange={(evt) => setTask(evt.target.value)} />
        </label>
        <div className='buttonWrapper'>
          <button onClick={handleNewTask}>New task</button>
          <button onClick={handleDeleteAll}>Delete all</button>
        </div>
      </form>
      <div className='listWrapper'>
        <ul>
          {list.map((el, index) => (
            <ListItem key={index} task={el} list={list} setList={setList} getData={getData} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
