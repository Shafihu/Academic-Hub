import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUdP-LLOnXxNMxs8cIkfHOA7M4BNHiZns",
  authDomain: "sma-v2-e1faf.firebaseapp.com",
  projectId: "sma-v2-e1faf",
  storageBucket: "sma-v2-e1faf.appspot.com",
  messagingSenderId: "370176630406",
  appId: "1:370176630406:web:ee2ca36b77849cf35cfb07",
  measurementId: "G-7G5Z9BJHH4",
};

export const FIREBASE_APP = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
