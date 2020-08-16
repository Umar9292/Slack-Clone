import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPS5Q8XKLnAa2WhjNsUi0t9wirFBhqdE4",
    authDomain: "slack-clone-f0f48.firebaseapp.com",
    databaseURL: "https://slack-clone-f0f48.firebaseio.com",
    projectId: "slack-clone-f0f48",
    storageBucket: "slack-clone-f0f48.appspot.com",
    messagingSenderId: "130244610118",
    appId: "1:130244610118:web:21917910eb24e0de26e247",
    measurementId: "G-2N6EXZ664R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;