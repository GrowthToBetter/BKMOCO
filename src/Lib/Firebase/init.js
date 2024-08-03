import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBx6hL0GVBigrj-m7DK2dQ0PAG5rB0zIRE",
  authDomain: "bkmoklet-9c1ab.firebaseapp.com",
  projectId: "bkmoklet-9c1ab",
  storageBucket: "bkmoklet-9c1ab.appspot.com",
  messagingSenderId: "493189835994",
  appId: "1:493189835994:web:b2c9867fba03e0efacc9e3",
  measurementId: "G-NWMKC2J6JP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);