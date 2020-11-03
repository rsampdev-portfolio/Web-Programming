import React, { Component } from "react";
import "./CountdownTimer.module.css"

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            label: props.label,
            isPaused: false,
            timerInterval: null,
            initialTime: props.initialTime,
            remainningTime: props.initialTime
        }
    }

    componentDidMount() {
        this.timerInterval = setInterval(() => {
            if (!this.state.isPaused) {
                this.setState(({ remainningTime }) => ({
                    remainningTime: (remainningTime - 1) <= 0 ? 0 : remainningTime - 1
                }))
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
        this.setState({ timerInterval: null, remainningTime: 0 });
    }

    startAndStop(e) {
        this.setState(({ isPaused }) => ({
            isPaused: !isPaused 
        }));

        if (this.state.isPaused) {
            let e = document.getElementsByClassName("StartButton").item(0);
            e.className = "PauseButton";
            e.innerHTML = "Pause";
        } else {
            let e = document.getElementsByClassName("PauseButton").item(0);
            e.className = "StartButton";
            e.innerHTML = "Start";
        }
    }

    reset() {
        this.setState(({ initialTime }) => ({
            remainningTime: initialTime
        }));
    }

    increment() {
        this.setState(({ remainningTime }) => ({
            remainningTime: remainningTime + 30 
        }));
    }

    decrement() {
        let newTimeValue = this.state.remainningTime - 30;

        if (newTimeValue <= 0) {
            newTimeValue = 0;
        }

        this.setState({ remainningTime: newTimeValue });
    }

    convertSecondsToDisplayTime() {
        let seconds = this.state.remainningTime;

        if (seconds <= 0) {
            return "00:00:00";
        }

        let hours   = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - (hours * 3600)) / 60);
        seconds = seconds - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        return hours + ':' + minutes + ':' + seconds;
    }
    
    render() {
        return (
            <div className="CountdownTimer">

                <h1>{this.state.label}</h1>

                <h1>{this.convertSecondsToDisplayTime(this.state.remainningTime)}</h1>

                <button className="PauseButton" onClick={this.startAndStop.bind(this)}>Pause</button>
                    
                <br></br>

                <button onClick={this.reset.bind(this)}>Reset</button>

                <br></br>

                <button onClick={this.increment.bind(this)}>Increment</button>
                    
                <br></br>

                <button onClick={this.decrement.bind(this)}>Decrement</button>
            </div>
        )
    }
}

export default CountdownTimer;