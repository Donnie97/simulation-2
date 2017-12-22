import React, {Component} from 'react'
import './frontpage.css';
import houserlogo from '../../assets/auth_logo.png';

export default class Frontpage extends Component {
    constructor(){ //36I
        super()
        this.state = { //36C
            username: null,
            password: null
        }

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }
//36J
    handleUsername(val){
        console.log(val)
        //36D
        this.setState({
            username: val
        })
    }
    handlePassword(val){
        console.log(val)
        this.setState({
            password: val
        })
    }

    render(){ //36F
        return(
            <div className="center">
            <div className="mainBox">
            <div>
                <img className='logo' src={houserlogo} alt="logo"/>
            </div>
            <h1 className="userText" // 54F
            >UserName</h1> 
            <input className="loginBox"
            onChange={(e) => this.handleUsername(e.target.value)}/>
            <h1 className="passText">Password</h1>
            <input className="loginBox" //37D onChange arrow function ALSO self closing 54G
          onChange={(e) => this.handlePassword(e.target.value)}/> 
            </div>
            </div> //54C
        )
    }
}