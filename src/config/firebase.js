import 'firebase/app'
import {initializeApp} from 'firebase/app'

import 'firebase/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDKvJUstdrCS5sgQckuQV2n1RoBdZlCa0U",
  authDomain: "archivosanalogicos.firebaseapp.com",
  projectId: "archivosanalogicos",
  storageBucket: "archivosanalogicos.appspot.com",
  messagingSenderId: "603286848303",
  appId: "1:603286848303:web:35d7bccbdfd5ca373597da"
})

const storage = getStorage(firebaseConfig);

export default storage;
