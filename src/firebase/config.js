import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4rSEM5sVPs1QSMtfDiVTMdvP1cM393HE",
  authDomain: "katomaranhackathon.firebaseapp.com",
  projectId: "katomaranhackathon",
  storageBucket: "katomaranhackathon.firebasestorage.app",
  messagingSenderId: "10116403643",
  appId: "1:10116403643:web:dad32fcf8671e4ec7e349e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth);
export const provider = new GoogleAuthProvider();
