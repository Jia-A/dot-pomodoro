import { useState } from "react";
import { Navbar } from "../components/navbar";
import Modal from "react-modal";
import "../styles/homepage.css";
import { Link } from "react-router-dom";
import { useTask } from "../context/task-context";

const Homepage = () =>{
    const [ addModal, setAddModal ] = useState(false);
    const [currentTask, setCurrentTask] =  useState({})
    const { tasks, createTask, singleTask, setSingleTask, editing, setEditing, editTask, deleteTask } = useTask();
    console.log(tasks)
    const taskModalFunction = () =>{
        setAddModal(true);
    }

    const editTaskHandler = (task) =>{
        setEditing(true);
        setAddModal(true);
        setSingleTask({...singleTask, name : task.name, duration : task.duration, description : task.description, break : task.break})
        setCurrentTask(task)  
        
    }

    const checkHandler = (task) =>{
        if(editing===true){
            console.log("edit task")
            editTask(task.id)
            setSingleTask({
                name : "",
                duration : 0,
                description : "",
                break : 0
            });
            setEditing(false)
        }
        else{
            if(singleTask.duration>0 && singleTask.break>0){
            console.log("create task")
            createTask();
            setAddModal(false)
            }
            else{
                alert("Enter valid duration and break")
            }
        }
    }

    const customStyle = {
        overlay: {
          backgroundColor: "rgba(52, 58, 64, 0.8)",
        },
        content: {
          width: "18rem",
          minHeight: "15rem",
          margin: "5rem auto",
          backgroundColor: "#1D3461",
          color : "#a0b2b9",
          textAlign : "center",
          border : "none",
          
        },
      };

    return(
        <div className="App">
            <Navbar/>
            <main className="main-container">
                <article className="welcome">
                    <h2>Welcome User</h2>
                    <p className="page-line">Add task here along with duration and set your concentration on it.</p>
                    <h4>STOP WITH THE CLOCK ONLY!!!</h4>

                </article>
                <div className="task-box">
                    <span className="box-head">Your Tasks</span>
                    <ul className="task-list">
                        {tasks.map((task)=>(
                            <li className="task-item" key={task.id}>
                            <p>{task.name}</p>
                            <div className="list-btn">
                                <Link to={`/clock/${task.id}`}>
                                <span className="btn"><i class="fas fa-clock list-icon"></i></span>
                                </Link>
                                <span className="btn" onClick={()=>editTaskHandler(task)}><i className="far fa-edit list-icon"></i></span>
                                <span className="btn" onClick={()=>deleteTask(task.id)}><i className="far fa-trash-alt list-icon"></i></span>
                            </div>
                        </li>
                        ))}    
                    </ul>
                    <button className="add btn" onClick={()=> taskModalFunction()}><i className="far fa-plus add-icon"></i></button>
                </div>
            </main>
            {
                addModal && (
                    <Modal isOpen={addModal} style={customStyle}>
                        <header className="modal-head">
                            <p className="head">New Task</p>
                            <span  className = "cancel" onClick={() => setAddModal(false)}><i className="far fa-times"></i></span>
                        </header>
                        <main>
                            <label htmlFor="task" className="label">
                                Name
                            </label>
                            <input type="text" className="modal-inp input" value={singleTask.name} autoFocus onChange={(e) =>setSingleTask({ ...singleTask, name: e.target.value })}
                            required/>

                            <label htmlFor="desc" className="label">
                                Description
                            </label>
                            <input type="text" className="modal-inp input" value={singleTask.description} 
                            onChange={(e) =>setSingleTask({ ...singleTask, description: e.target.value })}
                            required/>

                            <div className="time-div">
                                <div>
                            <label htmlFor="time" className="label">
                                Duration
                            </label>
                            <input type="number" className="input time-inp" min="0" value={singleTask.duration} 
                            onChange={(e) =>setSingleTask({ ...singleTask, duration: e.target.value })}
                            required/>
                            </div>
                            <div>
                            <label htmlFor="break" className="label">
                                Break
                            </label>
                            <input type="number" className="input time-inp" min="0" value={singleTask.break}
                            onChange={(e) =>setSingleTask({ ...singleTask, break: e.target.value })}/>
                            </div>
                            </div>   
                            <button className="btn secondary-btn" onClick={()=>checkHandler(currentTask)}>Add Task</button> 
                        </main>
                    </Modal>
                )
            }
        </div>
    );
}

export { Homepage }
