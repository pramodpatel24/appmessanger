import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCB-MsA-0Kbjrh9P81piNCHmb3nIZiSC1M",
    authDomain: "facebook-messanger-2af09.firebaseapp.com",
    projectId: "facebook-messanger-2af09",
    storageBucket: "facebook-messanger-2af09.appspot.com",
    messagingSenderId: "793894429430",
    appId: "1:793894429430:web:25cefd6b689c6de05402d7",
    measurementId: "${config.measurementId}"
});

const db = firebaseApp.firestore();
export default db;
