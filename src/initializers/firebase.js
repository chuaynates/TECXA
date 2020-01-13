import firebase from 'firebase';

const config ={
   
      apiKey: "AIzaSyC-xC8VLdeXlpAwUgzWk1B2rNj3T3VFcrU",
      authDomain: "tecxa-959f7.firebaseapp.com",
      databaseURL: "https://tecxa-959f7.firebaseio.com",
      projectId: "tecxa-959f7",
      storageBucket: "tecxa-959f7.appspot.com",
      messagingSenderId: "466341145681",
      appId: "1:466341145681:web:733cc4242ec117194fdc70",
      measurementId: "G-WVGMH74QPT"
    };
   
    firebase.initializeApp(config);
    export default firebase;