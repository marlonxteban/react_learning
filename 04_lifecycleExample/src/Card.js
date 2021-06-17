import React, {Component} from 'react'
import './App.css'

class Card extends Component {
    static getDerivedStateFromProps(props, state){
        console.log("Card js getDerivedStateFromProps")
        return state
    }

    shouldComponentUpdate(nextProps, nextsState){
        console.log("Card js shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Card js is getSnapshooter")
        return { message: "some snapshot" }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Card js componentDidUpdate", snapshot)
    }

    componentWillUnmount(){
        console.log("Card Js component will unmount")
    }

    render(){
console.log("Card js renderingß")
        console.log("CARD JS get getSnapshotBeforeUpdate")
        return (
            <div className="card">
                <img src={this.props.avatar} alt="Avatar" style={{ width: '100%' }} />
                <div className="container">
                    <h4><b>{this.props.name}</b></h4>
                    <p>{this.props.title}</p>
                    <input type="text" onChange={this.props.onNameChange} value={this.props.name}/>
                    <p>
                        <button className="button button-red" onClick={this.props.onDelete}>Delete</button>
                    </p>
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default Card
