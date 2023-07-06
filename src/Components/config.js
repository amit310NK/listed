import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCmmJ07FXapJr7pyERrOGOrz2Ob2MwC--Q",
  authDomain: "listed-467b8.firebaseapp.com",
  projectId: "listed-467b8",
  storageBucket: "listed-467b8.appspot.com",
  messagingSenderId: "357843276176",
  appId: "1:357843276176:web:d57c7b784aedcaa81f2315"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export{auth,provider};