import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const config = {
    apiKey: "AIzaSyCNQpjRKQdtDKKCIwNPv57TlgmPy3BxT8s",
    authDomain: "recrutementic-c701c.firebaseapp.com",
    projectId: "recrutementic-c701c",
    storageBucket: "recrutementic-c701c.appspot.com",
    messagingSenderId: "168785269028",
    appId: "1:168785269028:web:e4b0bd41da48437f6de3b1",
    measurementId: "G-BPD5KG60SF"
}

const app = initializeApp(config)
const analytics = getAnalytics(app)