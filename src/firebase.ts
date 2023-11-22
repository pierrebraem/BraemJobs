import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { collection, getFirestore, query, where, getDocs, addDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

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

const auth = getAuth()

const db = getFirestore()

const userRef = collection(db, 'utilisateurs')

/* Fonctions locales */

async function checkIfEmailAlreadyExist(email: string){
    const q = query(userRef, where("email", "==", email))
    let result: boolean = false
    await getDocs(q).then((snapshot) => {
        if(snapshot.docs.length == 0){
            result = false
        }
        else{
            result = true
        }
    })

    return result
}

/* Fonctions connexion */

export async function signup(nom: string, prenom: string, email: string, telephone: string, motdepasse: string, motdepasseC: string){
    try{
        if(await checkIfEmailAlreadyExist(email)){
            throw new Error('L\'adresse mail existe déjà')
        }

        if(motdepasse != motdepasseC){
            throw new Error('Les champs "mot de passe" et "Confirmer mot de passe" sont différents')
        }

        addDoc(userRef, {
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            motdepasse: motdepasse,
            image: null,
            hardskill: null,
            softskill: null,
            experience: null,
            formation: null,
            recruteur: false
        })

        await createUserWithEmailAndPassword(auth, email, motdepasse)

        return true
    }
    catch(error){
        console.log(error)
    }
}

export async function login(email: string, motdepasse: string){
    try{
        const q = query(userRef, where('email', '==', email), where('motdepasse', '==', motdepasse))
        let result: boolean = false
        await getDocs(q).then(async (snapshot) => {
            if(snapshot.docs.length == 0){
                result = false
            }
            else{
                result = true
                await signInWithEmailAndPassword(auth, email, motdepasse)
            }
        })

        if(!result){
            throw new Error('L\'adresse mail ou le mot de passe est incorrect')
        }

        return true;
    }
    catch(error){
        console.log(error)
    }
}