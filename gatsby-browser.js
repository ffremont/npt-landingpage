import "./src/style/main.scss"
import "@fontsource/spinnaker";
import "@fontsource/open-sans";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp9VBbyvEqiqIUuXfymgQhSbxfS3iOxEI",
  authDomain: "niortweb.firebaseapp.com",
  databaseURL: "https://niortweb.firebaseio.com",
  projectId: "niortweb",
  storageBucket: "niortweb.appspot.com",
  messagingSenderId: "342355226765",
  appId: "1:342355226765:web:7a252dedad9639477272c4",
  measurementId: "G-H3CC5QCMHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }