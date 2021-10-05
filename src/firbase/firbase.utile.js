import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDwpF9juW2QXckZL-mvrQCQw68e8Z6xduo",
  authDomain: "crwn-db-e739d.firebaseapp.com",
  projectId: "crwn-db-e739d",
  storageBucket: "crwn-db-e739d.appspot.com",
  messagingSenderId: "462003285866",
  appId: "1:462003285866:web:3c3269f48a5b2c3d49ff13",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
