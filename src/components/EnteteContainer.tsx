import { IonToolbar, IonText, IonButton, IonButtons } from '@ionic/react'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import './EnteteContainer.css'

interface ContainerProps { }

const EnteteContainer: React.FC<ContainerProps> = () => {
    const auth = getAuth()

    const [connexion, setConnexion] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            user ? setConnexion(true) : setConnexion(false)
        })
    })

    function deconnection(){
        signOut(auth)
        setConnexion(false)
    }

    return(
        <IonToolbar>
            <IonText>RecrutementIC</IonText>
            <IonButtons slot="end">
                { connexion ? <IonButton onClick={deconnection}>Deconnection</IonButton> : <IonButton href="/connexion">Connexion</IonButton> }
            </IonButtons>
        </IonToolbar>
    )
}

export default EnteteContainer