import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Navbar } from "../components/navbar";
import "../styles/clock.css";

const Clock = () =>{

    const circleColor = "var(--primary-color)";

    return(
        <div className="App">
            <Navbar/>
            <div className="main-body">
            <main className="main-content">
                <div className="clock-side">
                    <div className="clock">
                    <CircularProgressbar value={60} text={`60%`} strokeWidth={5} styles={buildStyles({
                        textColor : "var(--whitemsoke-color)",
                        pathColor : circleColor,
                        trailColor : "rgba(255, 255, 255, .2)" 
                    })}>
                    </CircularProgressbar>
                    </div>
                    <div className="clock-btn">
                        <button className="btn"><i class="far fa-play cl-b"></i></button>
                        <button className="btn"><i class="far fa-pause cl-b"></i></button>
                        <button className="btn"><i class="far fa-redo cl-b"></i></button>
                    </div>  
                </div>
                <div className="desc-side">
                    <section className="main-text">
                        <p className="task-name">
                            Exercise
                        </p>
                        <p className="task-desc">
                            Something something
                        </p>
                        <span className="task-dur">
                            60 minutes
                        </span>
                    </section>
                    <div className="decs-btn">
                        <button className="btn primary-btn">Focus</button>
                        <button className="btn primary-btn">Short</button>
                        <button className="btn primary-btn">long</button>
                    </div>
                </div>
            </main>
            </div>

        </div>
    );
}

export { Clock }