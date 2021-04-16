import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnockakOBlA8RgYHsobTEsGEDS_imUk20",
    authDomain: "react-project-e1342.firebaseapp.com",
    projectId: "react-project-e1342",
    storageBucket: "react-project-e1342.appspot.com",
    messagingSenderId: "841240183800",
    appId: "1:841240183800:web:006124064ee3b2018e0c0d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase