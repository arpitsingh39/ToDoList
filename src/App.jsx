import React, { useState } from 'react'
import Header from './components/Header.jsx'
import TakeInput from './components/TakeInput.jsx'
import TaskDispCompDel from './components/TaskDispCompDel.jsx'
import Input from './components/Input.jsx'
import './App.css'

const App = () => {
  const [inputVal, setInputVal] = useState('')
  const [tasks, setTasks] = useState([])

  function writeTodo(e) {
    setInputVal(e.target.value)
  }

  function addTask() {
    if (inputVal !== '') {
      setTasks(prevTodos => [...prevTodos, inputVal])
      setInputVal('')
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index)
    setTasks(newTasks)
  }


  return (
    <>
      <Header />
      <TakeInput inputVal={inputVal} writeTodo={writeTodo} addTask={addTask} />
      <TaskDispCompDel tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App
