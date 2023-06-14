
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyANEJswY4GZnIIR01_mni4z83yk5RZ9UBc",
  authDomain: "tienda-react-cam.firebaseapp.com",
  projectId: "tienda-react-cam",
  storageBucket: "tienda-react-cam.appspot.com",
  messagingSenderId: "786853424248",
  appId: "1:786853424248:web:c1366eb5642a1296bb118d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);