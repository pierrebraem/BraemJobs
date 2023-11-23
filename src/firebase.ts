import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { collection, getFirestore, query, where, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { CapacitorCookies } from '@capacitor/core'

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
const jobRef = collection(db, 'emplois')

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
                await CapacitorCookies.setCookie({
                    key: 'userid',
                    value: snapshot.docs[0].id
                })
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

export function logout(){
    signOut(auth)
    CapacitorCookies.deleteCookie({
        key: 'userid'
    })
}

/* Fonctions offres */

export async function getJobById(id: string){
    const docRef = doc(db, 'emplois', id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

export async function addJob(intitule: string, entreprise: string, lieu: string, competences: string, description: string, profil: string){
    const competencesArray = competences.split(', ')
    
    addDoc(jobRef, {
        intitule: intitule,
        entreprise: entreprise,
        lieu: lieu,
        competences: competencesArray,
        description: description,
        profil: profil,
        candidats: null,
        recruteur: 'aJ6hJbDmERbAPxUtT2Ca'
    })
}

export async function updateJob(id: string, intitule: string, entreprise: string, lieu: string, competences: string, description: string, profil: string){
    const job = doc(db, 'emplois', id)

    const competencesArray = competences.split(', ')

    await updateDoc(job, {
        intitule: intitule,
        entreprise: entreprise,
        lieu: lieu,
        competences: competencesArray,
        description: description,
        profil: profil,
        candidats: null,
        recruteur: 'aJ6hJbDmERbAPxUtT2Ca'
    })
}

export async function deleteJob(id: string){
    const job = doc(db, 'emplois', id)

    await deleteDoc(job)
}