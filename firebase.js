import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCUTyIBXUItbjG_OLdDDvBtwgh6S5vl54I",
  authDomain: "newsarticle-5aeb8.firebaseapp.com",
  databaseURL: "https://newsarticle-5aeb8.firebaseio.com",
  projectId: "newsarticle-5aeb8",
  storageBucket: "newsarticle-5aeb8.appspot.com",
  messagingSenderId: "647229790861",
  appId: "1:647229790861:web:9ed4a7d82429b8acba60c4",
  measurementId: "G-1H1V7S8051"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();