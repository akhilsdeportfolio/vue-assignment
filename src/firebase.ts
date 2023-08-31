import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDJkcQX5o5WamYhDo7GYhqAwDoDB-FtaMs",
    authDomain: "fuelbuddyassignment.firebaseapp.com",
    projectId: "fuelbuddyassignment",
    storageBucket: "fuelbuddyassignment.appspot.com",
    messagingSenderId: "287428543612",
    appId: "1:287428543612:web:fe57e64b6cd76bcaaf35f9",
    measurementId: "G-38X84ML9N0"
})


export const  auth =getAuth(firebaseApp);