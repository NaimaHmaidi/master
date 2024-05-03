// TaskItem.js
import React from "react";
import { MdDeleteSweep } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, togglecheck }) => {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };
  

  return (
    <li className="items" draggable="true" onDragStart={handleDragStart} style={{ backgroundColor: task.backgroundColor }}>
      
      <div className="items-text">
        <input type="checkbox" checked={task.checked} onChange={() => togglecheck(task.taskName)} />
        <p className={task.checked ? 'isChecked' : ''} style={{marginTop:'10px', color:'#ffffff'}}>{task.taskName}</p>
      </div>
      <MdDeleteSweep className="delete-icon"
        onClick={() => deleteTask(task.taskName)}  style={{marginLeft:'398px' , marginTop:'-45px' , color:'#ffff' }}/>
    </li>
  );
}

export default TaskItem;
