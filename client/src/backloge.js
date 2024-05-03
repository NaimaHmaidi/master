
// Backloge.js
import React, { useState } from 'react';
import './backloge.css';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import Backloge1 from './backloge1';
import Backloge2 from './backloge2';

function Backloge() {
    const [toDoList, setToDoList] = useState([]);
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    

    const addTask = (taskName) => {
        const newTask = { taskName, checked: false ,backgroundColor: generateRandomColor()  };
        setToDoList([...toDoList, newTask]);
    };

    const deleteTask = (deleteTaskName) => {
        setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
    };

    const togglecheck = (taskName) => {
        setToDoList((prevToDoList) =>
            prevToDoList.map((task) =>
                task.taskName === taskName ? { ...task, checked: !task.checked } : task
            )
        );
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedTask = JSON.parse(e.dataTransfer.getData("task"));
        if (!taskExists(droppedTask.taskName)) {
            addTask(droppedTask.taskName);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const taskExists = (taskName) => {
        return toDoList.some(task => task.taskName === taskName);
    };

    return (
        <>
            <div className="container-wrapper">
                <div className="container"  style={{width:'585px'}} onDrop={handleDrop} onDragOver={handleDragOver}>
                    
                    <h1>Task To Do</h1>
                    <TaskInput addTask={addTask} />
                    <div className="toDoList">
                        <span>To do</span>
                        <ul className="list-items">
                            {toDoList.map((task, key) => (
                                <TaskItem
                                    task={task}
                                    key={key}
                                    deleteTask={deleteTask}
                                    togglecheck={togglecheck}
                                ></TaskItem>
                            ))}
                        </ul>
                        {toDoList.length === 0 ? (
                            <p className="notify">You are Done!</p>
                        ) : null}
                    </div>
                </div>
                <Backloge1 />
                <Backloge2/>
            </div>
        </>
    );
}

export default Backloge;