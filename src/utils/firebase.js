// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQsj2Fr2BaXBZJ7g_oFD-579iZ5tPqfHM",
  authDomain: "netflix-gpt-server.firebaseapp.com",
  projectId: "netflix-gpt-server",
  storageBucket: "netflix-gpt-server.appspot.com",
  messagingSenderId: "387531700000",
  appId: "1:387531700000:web:f08c6e7d4798f46ef5c945",
  measurementId: "G-7D36ZCD2M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);