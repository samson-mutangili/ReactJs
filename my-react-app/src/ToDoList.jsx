import { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Test sleek writers app", "Learn react js", "Go to gym"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {

    }

    const deleteTask = (index) => {

    }

    const moveTaskUp = (index) => {

    }

    const moveTaskDown = (index) => {

    }


    return(
        <div className="to-do-list">
            <h3>To Do List</h3>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>Move Up</button>
                            <button className="down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
                        </li>)}
                </ol>
            </div>

        </div>
    );
}

export default ToDoList