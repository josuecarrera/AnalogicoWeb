import 'firebase/app'
import {initializeApp} from 'firebase/app'

import 'firebase/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAXniXSZ_ya9KpJ9jIb3jy8xdVfAs79e3o",
  authDomain: "example-d75ce.firebaseapp.com",
  projectId: "example-d75ce",
  storageBucket: "example-d75ce.appspot.com",
  messagingSenderId: "536139645094",
  appId: "1:536139645094:web:9880785e4f6eb6991ef467"
})

const storage = getStorage(firebaseConfig);

export default storage;