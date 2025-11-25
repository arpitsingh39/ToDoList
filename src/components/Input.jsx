import React from 'react'

const Input = ( { tasks, deleteTask } ) => {
    return (
        <div className="task-list">
            <div className="task-item">
                <h1>{ tasks }</h1>
                <input type="checkbox" className="checkbox"></input>
                <button className="button-input-delete" onClick={deleteTask}><h3>Delete</h3></button>
            </div>
        </div>
    )
}

export default Input