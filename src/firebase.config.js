import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm9DPMlXw3jspWzmjMdM3DubKTISuog_k",
  authDomain: "moviemaster-pro-5e5c5.firebaseapp.com",
  projectId: "moviemaster-pro-5e5c5",
  storageBucket: "moviemaster-pro-5e5c5.firebasestorage.app",
  messagingSenderId: "931751471970",
  appId: "1:931751471970:web:752f1bccdf524e10f9da3b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);