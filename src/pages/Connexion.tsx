import { IonPage, IonHeader, IonToolbar, IonText, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonTitle, IonCardContent, IonInput, IonRouterLink } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"
import "./Connexion.css"
import { useState } from "react"
import { Device } from '@capacitor/device'
import { login, logout } from "../firebase"

const Connexion: React.FC = () => {
    const [email, setEmail] = useState('')
    const [motdepasse, setMotdepasse] = useState('')
    const [lang, setLangue] = useState('fr')

    async function connexion(){
        const res = await login(email, motdepasse)
        if(res){
            //await logout()
            location.replace('/')
        }
    }

    async function obtenirLangue(){
        const obLangue = await Device.getLanguageCode()
        setLangue(obLangue.value)
    }
    
    obtenirLangue()

    console.log(lang)

    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonTitle><h3>{ lang === 'en' ? 'Login' : 'Connexion'}</h3></IonTitle>
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
                        label={ lang === 'en' ? 'Password' : 'Mot de passe'} 
                        labelPlacement="floating"
                        value={motdepasse}
                        onIonChange={(e: any) => setMotdepasse(e.target.value)}
                        ></IonInput>

                        <IonButton onClick={connexion}>{ lang === 'en' ? 'Login' : 'Connexion'}</IonButton><br/>
                        <IonRouterLink href="/inscription">{ lang === 'en' ? 'Not registered? Click here to create an account.' : 'Pas encore de compte? Cliquez ici pour en avoir un'}</IonRouterLink>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Connexion