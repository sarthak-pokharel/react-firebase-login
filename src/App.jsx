import { useState, useContext } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import { LoginCard } from './LoginCard';
import {UserDataManager} from './UserDataManager';
import {WelcomeCard} from './WelcomeCard';




function App() {
  return (<div className='app'>
    <UserDataManager>
      <WelcomeCard />
      <LoginCard/>
    </UserDataManager>
  </div>)
}

export default App
