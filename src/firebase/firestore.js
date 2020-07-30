import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBlD0hgTE9FokUkY7vAsvr-4xGG19PNvX0",
    authDomain: "voting-react.firebaseapp.com",
    databaseURL: "https://voting-react.firebaseio.com",
    projectId: "voting-react",
    storageBucket: "voting-react.appspot.com",
    messagingSenderId: "374523551882",
    appId: "1:374523551882:web:9a034f69ba6979fdfa0d73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const auth=firebase.auth()

export default firebase
export {db,auth}