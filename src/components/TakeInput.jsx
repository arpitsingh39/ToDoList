import React from 'react'

const TakeInput = ({ inputVal, writeTodo, addTask }) => {
  return (
    <div className="main-page">
      <input type="text"
        placeholder="Add a new task"
        className="task-input"
        value={inputVal} onChange={writeTodo} >
      </input>
      <button className="button-input" onClick={addTask}>+</button>
    </div>
  )
}

export default TakeInput