import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { collection, getFirestore, query, where, GeoPoint, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
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

export async function signup(nom: string, prenom: string, email: string, lieu: number[], telephone: string, motdepasse: string, motdepasseC: string){
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
            lieu: new GeoPoint(lieu[0], lieu[1]),
            telephone: telephone,
            motdepasse: motdepasse,
            description: null,
            image: null,
            hardskills: null,
            softskills: null,
            experiences: null,
            formations: null,
            recruteur: false
        }).then(async (userAdded) => {
            await CapacitorCookies.setCookie({
                key: 'userid',
                value: userAdded.id
            })

            await CapacitorCookies.setCookie({
                key: 'recruteur',
                value: 'false'
            })
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

                await CapacitorCookies.setCookie({
                    key: 'recruteur',
                    value: snapshot.docs[0].data().recruteur
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
    CapacitorCookies.deleteCookie({
        key: 'recruteur'
    })
}

/* Fonctions offres */

export async function getJobs(){
    const res = await getDocs(jobRef)
    return res.docs
}

export async function getJobById(id: string){
    const job = doc(db, 'emplois', id)
    const res = await getDoc(job)
    return res.data()
}

export async function addJob(userid: string, intitule: string, entreprise: string, lieu: string, competences: string, description: string, profil: string){
    const competencesArray = competences.split(', ')
    
    addDoc(jobRef, {
        intitule: intitule,
        entreprise: entreprise,
        lieu: lieu,
        competences: competencesArray,
        description: description,
        profil: profil,
        candidats: null,
        recruteur: userid
    })
}

export async function updateJob(id: string, userid: string, intitule: string, entreprise: string, lieu: string, competences: string, description: string, profil: string){
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
        recruteur: userid
    })
}

export async function deleteJob(id: string){
    const job = doc(db, 'emplois', id)

    await deleteDoc(job)
}

/* Fonctions utilisateurs */

export async function getUserById(id: string){
    const userRef = doc(db, 'utilisateurs', id)
    const userSnap = await getDoc(userRef)
    return userSnap.data()
}