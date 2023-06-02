// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwc9hV2mLjxUBPlhrdTG6UlMOklx0FRp0",
    authDomain: "vara-c25c3.firebaseapp.com",
    databaseURL: "https://vara-c25c3-default-rtdb.firebaseio.com",
    projectId: "vara-c25c3",
    storageBucket: "vara-c25c3.appspot.com",
    messagingSenderId: "1012111551327",
    appId: "1:1012111551327:web:c9b72a60ed321d75e864ea",
    measurementId: "G-S1XBM780L0"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
