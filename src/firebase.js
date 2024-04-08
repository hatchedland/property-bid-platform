import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD92sCsL7Ec0wkpPYHXcvD-c0JueKkokPw",
  authDomain: "auction-center.firebaseapp.com",
  databaseURL: "https://auction-center-default-rtdb.firebaseio.com",
  projectId: "auction-center",
  storageBucket: "auction-center.appspot.com",
  messagingSenderId: "891415457626",
  appId: "1:891415457626:web:2d7346bd415ccc3daacd63",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
