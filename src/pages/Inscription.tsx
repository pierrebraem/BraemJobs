import { IonPage, IonHeader, IonButton, IonContent, IonCard, IonCardHeader, IonTitle, IonCardContent, IonInput } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"
import "./Inscription.css"
import { useState } from "react"
import { signup } from "../firebase"
import { Geolocation } from '@capacitor/geolocation'

const Inscription: React.FC = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [motdepasse, setMotdepasse] = useState('')
    const [motdepasseC, setMotdepasseC] = useState('')

    let lieu: number[] = [0, 0]

    async function inscription(){
        const res = await signup(nom, prenom, email, lieu, telephone, motdepasse, motdepasseC)
        if(res){
            location.replace('/')
        }
    }

    async function geolocalisation(){
        /* 
            A essayer sur téléphone
            await Geolocation.requestPermissions()
        */
        //await Geolocation.requestPermissions()

        const coordonnees = (await Geolocation.getCurrentPosition()).coords
        lieu = [coordonnees.latitude, coordonnees.longitude]
    }

    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonTitle><h3>Inscription</h3></IonTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput 
                        type="text" 
                        fill="solid" 
                        label="Nom" 
                        labelPlacement="floating"
                        value={nom}
                        onIonChange={(e: any) => setNom(e.target.value)}
                        ></IonInput>

                        <IonInput 
                        type="text" 
                        fill="solid" 
                        label="Prénom" 
                        labelPlacement="floating"
                        value={prenom}
                        onIonChange={(e: any) => setPrenom(e.target.value)}
                        ></IonInput>

                        <IonInput 
                        type="email" 
                        fill="solid" 
                        label="Email" 
                        labelPlacement="floating"
                        value={email}
                        onIonChange={(e: any) => setEmail(e.target.value)}
                        ></IonInput>

                        <IonInput 
                        type="text" 
                        fill="solid" 
                        label="Téléphone" 
                        labelPlacement="floating"
                        value={telephone}
                        onIonChange={(e: any) => setTelephone(e.target.value)}
                        ></IonInput>

                        <IonInput 
                        type="password" 
                        fill="solid" 
                        label="Mot de passe" 
                        labelPlacement="floating"
                        value={motdepasse}
                        onIonChange={(e: any) => setMotdepasse(e.target.value)}
                        ></IonInput>

                        <IonInput 
                        type="password" 
                        fill="solid" 
                        label="Confirmer le mot de passe" 
                        labelPlacement="floating"
                        value={motdepasseC}
                        onIonChange={(e: any) => setMotdepasseC(e.target.value)}
                        ></IonInput>
                        
                        <IonButton onClick={inscription}>Inscription</IonButton>
                        <IonButton onClick={geolocalisation}>Me géolocaliser</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Inscription