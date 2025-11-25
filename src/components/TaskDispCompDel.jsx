import React from 'react'
import Input from './Input.jsx'   // import the component you made

const TaskDispCompDel = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        // pass the single task text (and index if you want)
        <Input key={index} tasks={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  )
}

export default TaskDispCompDel