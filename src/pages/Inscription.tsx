import { IonPage, IonHeader, IonButton, IonContent, IonCard, IonCardHeader, IonTitle, IonCardContent, IonInput } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"
import "./Inscription.css"
import { useState } from "react"
import { signup } from "../firebase"

const Inscription: React.FC = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [motdepasse, setMotdepasse] = useState('')
    const [motdepasseC, setMotdepasseC] = useState('')

    async function inscription(){
        const res = await signup(nom, prenom, email, telephone, motdepasse, motdepasseC)
        if(res){
            location.replace('/')
        }
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
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Inscription