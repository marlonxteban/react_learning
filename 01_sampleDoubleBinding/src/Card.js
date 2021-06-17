import React from 'react'
import './App.css'

const Card = props => {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <input type="text" value={props.name} onChange={props.onChangeInput}></input>
                <p>
                    <button className="button" onClick={props.onChangeName}>Change Name</button>
                </p>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
