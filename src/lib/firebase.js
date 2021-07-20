import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdEUuLM6OFZPoZiaT1rSYi_AT_Yyo5d8c",
  authDomain: "instagram-clone-e3764.firebaseapp.com",
  projectId: "instagram-clone-e3764",
  storageBucket: "instagram-clone-e3764.appspot.com",
  messagingSenderId: "716121859105",
  appId: "1:716121859105:web:6358b3342922b4eceb6f60",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
