import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBPhKaWAWLm1K4_xRWosqQ5TiIoM-c-1sI",
    authDomain: "usersapp-3d15e.firebaseapp.com",
    databaseURL: "https://usersapp-3d15e.firebaseio.com",
    projectId: "usersapp-3d15e",
    storageBucket: "usersapp-3d15e.appspot.com",
    messagingSenderId: "365967172350",
    appId: "1:365967172350:web:a24ff40f2209800643fbaf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;