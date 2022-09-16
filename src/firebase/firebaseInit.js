import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN_RsDWVIjyxLVxWq1_svnu6xY3UiLtU8",
  authDomain: "phase2-daud.firebaseapp.com",
  projectId: "phase2-daud",
  storageBucket: "phase2-daud.appspot.com",
  messagingSenderId: "146106008280",
  appId: "1:146106008280:web:106c0597ffddd66bfacdad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {timestamp};
export default firebaseApp.firestore()