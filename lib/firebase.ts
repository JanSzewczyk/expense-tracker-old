import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig: FirebaseOptions = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };
//
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
//
// export { db };

const firebaseConfig = {
  apiKey: "AIzaSyBVXnOjdjsze5rEk42ZwpbtAOwhiTfevy0",
  authDomain: "expense-tracker-925cc.firebaseapp.com",
  projectId: "expense-tracker-925cc",
  storageBucket: "expense-tracker-925cc.appspot.com",
  messagingSenderId: "867104889769",
  appId: "1:867104889769:web:7bf2daa8cf83abc3d902b8",
  measurementId: "G-6YT23F80VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
