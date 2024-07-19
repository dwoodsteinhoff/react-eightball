import React, {useState} from "react"
import './Eightball.css'


const Eightball = ({Answers}) => {

    const randAnswer = () => Answers[Math.floor(Math.random() * Answers.length)]

    const reply = () =>{
        setMessage(randAnswer())
    }

    const restart = () => {
        setMessage({
            msg: "Think of a Question",
            color: "black"})
    }

    const [message, setMessage] = useState({
                                    msg: "Think of a Question",
                                    color: "black"})

    return (
        <div className="Eightball">
            <button className="Eightball-button" onClick={reply} style={{backgroundColor: message.color}}>
                <b className="Eightball-message"> {message.msg}</b>
            </button>

            <button className="restart" onClick={restart}> Ask Again!</button>
        </div>
    )
}

export default Eightball