import { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Test sleek writers app", "Learn react js", "Go to gym"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        
        if(newTask.trim() !== ""){
            //add the new task
            setTasks(t => [...t, newTask])
            //clear the input field value
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    const moveTaskUp = (index) => {
        if(index > 0){

            const updateTasks = [...tasks];

            //swap elements
            [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]]

            //update the list of the new tasks
            setTasks(updateTasks);
        }
    }

    const moveTaskDown = (index) => {
        if(index < tasks.length - 1){

            const updateTasks = [...tasks];

            //swap elements
            [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]]

            //update the list of the new tasks
            setTasks(updateTasks);
        }
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
                            <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                            <button className="down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
                        </li>)}
                </ol>
            </div>

        </div>
    );
}

export default ToDoList