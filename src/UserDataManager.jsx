
import { useState, useContext, createContext } from 'react'

const UserDataManagerContext = createContext();
const UserDataManagerContextDispatch = createContext();

function UserDataManager({ children }) {
  const [userDetails,setUserDetails] = useState({ username: "", password:"" });
  return (<UserDataManagerContext.Provider value={userDetails}>
    <UserDataManagerContextDispatch.Provider value={setUserDetails}>
      {children}
    </UserDataManagerContextDispatch.Provider>
  </UserDataManagerContext.Provider>)
}

export {UserDataManager, UserDataManagerContext, UserDataManagerContextDispatch};