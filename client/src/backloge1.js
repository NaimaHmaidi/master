// Backloge1.js
import React, { useState } from 'react';
import './backloge.css';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

function Backloge1() {
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
        const newTask = { taskName, checked: false ,backgroundColor: generateRandomColor() };
        setToDoList([...toDoList, newTask]);
    };

    const deleteTask = (deletTaskName) => {
        setToDoList(toDoList.filter((task) => task.taskName !== deletTaskName));
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
        addTask(droppedTask.taskName); // Ajouter la tâche à ce backlog
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container" style={{width:'590px'}} onDrop={handleDrop} onDragOver={handleDragOver}>
                <h1>Task In Progresse</h1>
                <TaskInput addTask={addTask} />
                <div className="toDoList">
                    <span>In Progress</span>
                    <ul className="list-items">
                        {/* Afficher les tâches ici */}
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
        </>
    );
}

export default Backloge1;
