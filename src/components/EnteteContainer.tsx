import { IonToolbar, IonText, IonButton, IonButtons, IonAlert } from '@ionic/react'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { addJob, logout } from '../firebase'
import { CapacitorCookies } from '@capacitor/core'
import './EnteteContainer.css'

interface ContainerProps { }

const EnteteContainer: React.FC<ContainerProps> = () => {
    const auth = getAuth()

    const [connexion, setConnexion] = useState(false)

    /* useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user)
            user ? setConnexion(true) : setConnexion(false)
        })
    }) */

    function deconnection(){
        signOut(auth)
        setConnexion(false)
    }
    
    console.log(document.cookie)

    let isRecruteur: boolean = false

    document.cookie.split(';').map((cookie) => {
        const valeur = cookie.split('=')
        if(valeur[0].includes('recruteur')){
            if(valeur[1].includes('true')){
                isRecruteur = true
            }
        }
    })

    return(
        <IonToolbar>
            <IonText>RecrutementIC</IonText>
            <IonButtons slot="end">
                { isRecruteur ? <IonButton id="Aannonce">Ajouter une annonce</IonButton> : <></>}
                
                { connexion ? <IonButton onClick={deconnection}>Deconnection</IonButton> : <IonButton href="/connexion">Connexion</IonButton> }
            </IonButtons>

            <IonAlert
            trigger='Aannonce'
            header='Ajouter une annonce'
            inputs={[
                {
                    placeholder: 'Intitulé du poste',
                    name: 'intitule'
                },
                {
                    placeholder: 'Entreprise',
                    name: 'entreprise'
                },
                {
                    placeholder: 'Lieu',
                    name: 'lieu'
                },
                {
                    placeholder: 'Compétences',
                    name: 'competences'
                },
                {
                    placeholder: 'Description',
                    name: 'description'
                },
                {
                    placeholder: 'Profil',
                    name: 'profil'
                }
            ]}
            buttons={[
                {
                    text: 'Ajouter',
                    handler: (data) => {
                        addJob(data.intitule, data.entreprise, data.lieu, data.competences, data.description, data.profil)
                    }
                },
            ]}
            ></IonAlert>
        </IonToolbar>
    )
}

export default EnteteContainer