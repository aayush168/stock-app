import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD0QnMPdnSAly1qeQU41QDMluoS45PsrIA",
  authDomain: "stock-app-b4519.firebaseapp.com",
  databaseURL: "https://stock-app-b4519.firebaseio.com",
  projectId: "stock-app-b4519",
  storageBucket: "stock-app-b4519.appspot.com",
  messagingSenderId: "159040135512"
};

firebase.initializeApp(config)

export default firebase