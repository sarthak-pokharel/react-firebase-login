
import { useState, useContext } from 'react'
import {UserDataManagerContext,UserDataManagerContextDispatch} from './UserDataManager';
import './WelcomeCard.css';


function WelcomeCard() {
    let userDetails = useContext(UserDataManagerContext);
    return (<div className='welcomecard'>
      <div className="information">
        {(userDetails.loggedIn == false)?"Log-In Page":(
          <div>
            <div className="profilepic-cont">
              <img className='profilepic' src={userDetails.photoURL} />
            </div>
            <br /><br />
            <div className="greet">
            Hi <span className="uname">{userDetails.displayName}</span>!
            </div>
            <br />
            <div className="showemail">
              Your email is <span className="uname">{userDetails.email}</span>
            </div>
          </div>
        )}
        
      </div>
    </div>)
}

export {WelcomeCard}