import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCxk-jHTrhwJAOwEtExrofGhlYPC_I-6SY",
    authDomain: "first-react-project-7b614.firebaseapp.com",
    databaseURL: "https://first-react-project-7b614.firebaseio.com",
    projectId: "first-react-project-7b614",
    storageBucket: "",
    messagingSenderId: "342032469587"
  };
  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();