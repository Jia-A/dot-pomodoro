import { useState } from "react";
import { Navbar } from "../components/navbar";
import Modal from "react-modal";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

const Homepage = () =>{
    const [ addModal, setAddModal ] = useState(false);

    const taskModalFunction = () =>{
        setAddModal(true);
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
                        <li className="task-item">
                            <p>Exercise</p>
                            <div className="list-btn">
                                <span className="btn"><i className="far fa-edit list-icon"></i></span>
                                <span className="btn"><i className="far fa-trash list-icon"></i></span>
                            </div>
                        </li>
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
                            <input type="text" className="modal-inp input" autoFocus required/>

                            <label htmlFor="desc" className="label">
                                Description
                            </label>
                            <input type="text" className="modal-inp input" required/>

                            <div className="time-div">
                                <div>
                            <label htmlFor="time" className="label">
                                Duration
                            </label>
                            <input type="number" className=" input time-inp" required/>
                            </div>
                            <div>
                            <label htmlFor="break" className="label">
                                Break
                            </label>
                            <input type="number" className="input time-inp"/>
                            </div>
                            </div>   
                            <Link to="/clock">
                            <button className="btn secondary-btn">Add Task</button>
                            </Link>
                            
                        </main>
                    </Modal>
                )
            }
        </div>
    );
}

export { Homepage }
