import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAc6sQSlgtl_0uW0FSI37KKiVbcGVINRg8",
    authDomain: "imessage-clone-7da0b.firebaseapp.com",
    projectId: "imessage-clone-7da0b",
    storageBucket: "imessage-clone-7da0b.appspot.com",
    messagingSenderId: "280805122596",
    appId: "1:280805122596:web:eea64f14e077b764aa6eb1",
    measurementId: "G-1FGTH3V1SN"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;