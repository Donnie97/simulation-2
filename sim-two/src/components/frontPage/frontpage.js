import React, {Component} from 'react'
import './frontpage.css';
import houserlogo from '../../assets/auth_logo.png';

export default class Frontpage extends Component {
    constructor(){ //36I
        super()
        this.state = { //36C
            
        }
    }

    render(){ //36F
        return(
            <div className="center">
                hello
            <div className="mainBox">
            <div>
                <img className='logo' src={houserlogo} alt="logo"/>
            </div>
            </div>
            
            
            
            </div> //54C
        )
    }
}