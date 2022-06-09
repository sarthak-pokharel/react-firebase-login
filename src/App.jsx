import { useState, useContext } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import { LoginCard } from './LoginCard';
import { UserDataManager, UserDataManagerContext, UserDataManagerContextDispatch } from './UserDataManager';
import { WelcomeCard } from './WelcomeCard';



function CardsContainer() {
  let userDetails = useContext(UserDataManagerContext);
  return (<div className={'cards-container '+(userDetails.loggedIn?'loggedin':'')}>
    <WelcomeCard />
    <LoginCard />
  </div>);
}



function App() {
  return (
    <div className='app'>
      <UserDataManager>
        <CardsContainer />
      </UserDataManager>
    </div>)
}

export default App
