

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebaseConfig} from './firebase.config.jsx'
;
import { async } from "@firebase/util";

let app, auth, provider, intialized = false;
let firebaseConfig;
(async function(){
    firebaseConfig = await getFirebaseConfig();
    app = initializeApp(firebaseConfig);
    auth = getAuth();
    provider = new GoogleAuthProvider();
    intialized = false;
})();

class LoginHandler{
    constructor(){}
    async login(username, password){
        console.log("Logging In: ", username)
        let userCrediential = await signInWithEmailAndPassword(auth, username, password);
        console.log('Logged in!!', userCrediential);
        alert("Logged in!");
    }
    async loginGoogle(){
        console.log("Logging in with google");
        let result = await signInWithPopup(auth, provider);
        let crediential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result.user, crediential.accessToken);
    }
}

export {LoginHandler}