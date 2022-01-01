import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCdgd0po50fL8Myr8ehWT15In2wcybDUyo",
    authDomain: "crwn-db-31c8e.firebaseapp.com",
    projectId: "crwn-db-31c8e",
    storageBucket: "crwn-db-31c8e.appspot.com",
    messagingSenderId: "720464302",
    appId: "1:720464302:web:5bfe5bbd5dd5075012003f",
    measurementId: "G-038VJ0KY68"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
