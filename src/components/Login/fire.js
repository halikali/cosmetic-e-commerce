import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBHg2t5cJsJRBQUhA98ZbvdzM5zGHn1agw",
  authDomain: "cosmetic-c48ca.firebaseapp.com",
  projectId: "cosmetic-c48ca",
  storageBucket: "cosmetic-c48ca.appspot.com",
  messagingSenderId: "807688621207",
  appId: "1:807688621207:web:869bcd5025cfabe52fedd2",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
