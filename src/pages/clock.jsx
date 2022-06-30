import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Navbar } from "../components/navbar";
import { useTask } from "../context/task-context";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/clock.css";


const Clock = () =>{
    const { tasks } = useTask();
    const { taskID } = useParams();
    const [ isPaused, setIsPaused ] = useState(true); 
    const [ secondsLeft, setSecondsLeft] = useState(0)
    const [ mode, setMode] = useState("work")

    let isPausedRef = useRef(isPaused);
    let secondsLeftRef = useRef(secondsLeft);
    let modeRef = useRef(mode);

    const currentTask = tasks.find((task) => task.id === taskID);

    const circleColor = "var(--primary-color)";

    const initialTimer = () =>{
        secondsLeftRef.current =
			mode === "work" ? currentTask.duration * 60 : currentTask.break * 60;
        setSecondsLeft(secondsLeftRef.current)
    }

    const nextTimer = () => {
        const nextMode = modeRef.current === "work" ? "break" : "work";
        const currentSeconds = nextMode === "work" ? currentTask.duration * 60 : currentTask.break * 60;
        setMode(nextMode);
        modeRef.current = nextMode;
        setSecondsLeft(currentSeconds)
        secondsLeftRef.current = currentSeconds;
    }
 

    const tick = () =>{
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }

    useEffect(()=>{
        initialTimer();
        const interval =  setInterval(()=>{
            if(isPausedRef.current) {
                return;
            }

            if(secondsLeftRef.current === 0){
                return nextTimer();
            }
           tick();
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTask, mode])


    const totalSeconds = mode === "work" ? currentTask.duration * 60 : currentTask.break * 60;
    const percentage = Math.round(secondsLeft/ totalSeconds * 100) ;

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = "0" + seconds;

    useEffect(() => {
		document.title = minutes + " : " + seconds;
	}, [minutes, seconds]);
    

    return(
        <div className="App">
            <Navbar/>
            <div className="main-body">
            <main className="main-content">
                <div className="clock-side">
                    <div className="clock">
                    <CircularProgressbar value={percentage} 
                    text={minutes + ":" + seconds} 
                    strokeWidth={5} 
                    styles={buildStyles({
                        textColor : "var(--whitemsoke-color)",
                        pathColor : circleColor,
                        trailColor : "rgba(255, 255, 255, .2)" 
                    })}>
                    </CircularProgressbar>
                    </div>
                    <div className="clock-btn">
                        {isPaused ? 
                            (<button className="btn" onClick={()=> (setIsPaused(false), isPausedRef.current = false)} ><i class="far fa-play cl-b"></i></button>) : 
                            (<button className="btn" onClick={()=> (setIsPaused(true), isPausedRef.current = true)}><i class="far fa-pause cl-b"></i></button>)
                            }
                        <button className="btn" onClick={() => initialTimer()}><i class="far fa-redo cl-b"></i></button>
                    </div>  
                </div>
                <div className="desc-side">
                    <section className="main-text">
                        <p className="task-name">
                            {currentTask.name}
                        </p>
                        <p className="task-desc">
                            {currentTask.description}
                        </p>
                        <span className="task-dur">
                            {currentTask.duration} minutes
                        </span>
                    </section>
                    <div className="decs-btn">
                        <button className="btn primary-btn" onClick={()=>setMode("work")}>Focus</button>
                        <button className="btn primary-btn" onClick={()=>setMode("break")}>Break</button>
                    </div>
                </div>
            </main>
            </div>

        </div>
    );
}

export { Clock }