import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCbHQ4uU0xHJ5iQtpqPjBsZ5ICBiImD7Z8",
  authDomain: "pruebafirebase09.firebaseapp.com",
  projectId: "pruebafirebase09",
  storageBucket: "pruebafirebase09.appspot.com",
  messagingSenderId: "480344880475",
  appId: "1:480344880475:web:9afefdbc2fd209bcde567e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }