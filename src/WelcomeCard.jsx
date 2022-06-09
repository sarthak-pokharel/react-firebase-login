
import { useState, useContext } from 'react'
import {UserDataManagerContext,UserDataManagerContextDispatch} from './UserDataManager';
import './WelcomeCard.css';


function WelcomeCard() {
    let userDetails = useContext(UserDataManagerContext);
    return (<div className='welcomecard'>
      <div className="greeting">
        Hi <span className="uname">{userDetails.username}</span>
      </div>
    </div>)
}

export {WelcomeCard}