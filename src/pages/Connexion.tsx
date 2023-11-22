import { IonPage, IonHeader, IonToolbar, IonText, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonTitle, IonCardContent, IonInput, IonRouterLink } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"
import "./Connexion.css"
import { useState } from "react"
import { login, logout } from "../firebase"

const Connexion: React.FC = () => {
    const [email, setEmail] = useState('')
    const [motdepasse, setMotdepasse] = useState('')

    async function connexion(){
        const res = await login(email, motdepasse)
        if(res){
            //await logout()
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
                        <IonTitle><h3>Connexion</h3></IonTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput 
                        type="email" 
                        fill="solid" 
                        label="Email" 
                        labelPlacement="floating"
                        value={email}
                        onIonChange={(e: any) => setEmail(e.target.value)}
                        ></IonInput>

                        <IonInput 
                        type="password" 
                        fill="solid" 
                        label="Mot de passe" 
                        labelPlacement="floating"
                        value={motdepasse}
                        onIonChange={(e: any) => setMotdepasse(e.target.value)}
                        ></IonInput>

                        <IonButton onClick={connexion}>Connexion</IonButton><br/>
                        <IonRouterLink href="/inscription">Pas encore de compte? cliquez ici pour en créer un</IonRouterLink>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Connexion