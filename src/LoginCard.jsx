import { useContext, useState } from 'react'
import logo from './assets/logo.svg'
import './LoginCard.css'
import usernameIcon from './assets/userNameIcon.png';
import passwordIcon from './assets/passwordIcon.png';
import { UserDataManagerContext, UserDataManagerContextDispatch } from './UserDataManager';
import { LoginHandler } from './LoginHandler';

function InputBox({ label, type, icon, defaultValue, value, setValue, autoFocus }) {
  return (<div className="input-group">
    <div className="label">
      <div className="icon">
        <img src={icon} width="128" height="128" />
      </div>
    </div>
    <div className="input-cont">
      <input
        type={type || "text"}
        autoFocus={autoFocus||false}
        placeholder={label.toUpperCase()}
        className='input-data'
        value={value}
        onChange={setValue}
      />
    </div>
  </div>)
}

let loginHandler = new LoginHandler();



function LoginCard({ userNameManager }) {
  let userDetails = useContext(UserDataManagerContext);
  let setUserDetails = useContext(UserDataManagerContextDispatch);
  return (<div className='login-card'>
    <div className="title">
      Login
    </div>
    <div className="input-boxes">
      <InputBox autoFocus={true} label="username" icon={usernameIcon} value={userDetails.username} setValue={e => setUserDetails({...userDetails, username: e.target.value })} />
      <InputBox label="password" type="password" icon={passwordIcon} value={userDetails.password} setValue={e => setUserDetails({...userDetails, password: e.target.value })} />
      <div className="login-btn-cont">
        <button className='login-btn' onClick={(e)=>loginHandler.login(userDetails.username,userDetails.password )}>
          Log-in
        </button>
      </div>
      <br />
      <div className="login-btn-cont google">
        <button className='google login-btn' onClick={(e)=>loginHandler.loginGoogle()}>
          Log-in with google
        </button>
      </div>
    </div>
  </div>);
}

export { LoginCard };