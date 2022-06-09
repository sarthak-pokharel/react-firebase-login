

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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
        let userCrediential;
        try {
            userCrediential = await signInWithEmailAndPassword(auth, username, password);
        }catch(err){
            this.setUserDetails({...this.userDetails, loginError: err.message})
            return
        }
        console.log('Logged in!!', userCrediential);
        let {accessToken, photoURL, displayName,email} = userCrediential.user;
        this.setUserDetails({
            ...this.userDetails,
            accessToken, photoURL, displayName,
            email,
            loggedIn: true,
            loginError: null
        })
    }
    async loginGoogle(){
        console.log("Logging in with google");
        let result = await signInWithPopup(auth, provider);
        let crediential = GoogleAuthProvider.credentialFromResult(result);
        let {email, photoURL, accessToken, displayName} = result.user;
        this.setUserDetails({
            ...this.userDetails,
            accessToken, photoURL, displayName,
            email,
            loggedIn: true,
            loginError: null
        })
    }
    async resetPassword(username){
        console.log('Sending reset password email');
        if(username.trim()==""){
            this.setUserDetails({...this.userDetails, loginError: "Please enter email to send reset password link"})
            return 
        }
        let result = await sendPasswordResetEmail(auth, username);
        this.setUserDetails({...this.userDetails, loginError: "Password Reset Link Sent. Check spam folder too."})
    }
}

export {LoginHandler}