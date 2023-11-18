
import {initializeApp} from "firebase/app"

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import Signin from "./Signin";

const firebaseConfig = {
    apiKey: "AIzaSyD1zK-dETZNxZ13Ec-bE4FLFkknTEcUnkM",
    authDomain: "app-68964.firebaseapp.com",
    projectId: "app-68964",
    storageBucket: "app-68964.appspot.com",
    messagingSenderId: "213313507587",
    appId: "1:213313507587:web:8cfa286f4579ee02e95936",
    databaseURL:"https://app-68964-default-rtdb.firebaseio.com/"
  };


  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app)
  const provider=new GoogleAuthProvider()
  export {auth,provider}
  export default Signin