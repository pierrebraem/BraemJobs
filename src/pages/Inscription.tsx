import { IonPage, IonHeader, IonToolbar, IonText, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonTitle, IonCardContent, IonInput } from "@ionic/react"
import "./Inscription.css"

const Inscription: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonText>RecrutementIC</IonText>
                    <IonButtons slot="end">
                        <IonButton href="/connexion">Connexion</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonTitle><h3>Connexion</h3></IonTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput type="text" fill="solid" label="Nom" labelPlacement="floating"></IonInput>
                        <IonInput type="text" fill="solid" label="Prénom" labelPlacement="floating"></IonInput>
                        <IonInput type="email" fill="solid" label="Email" labelPlacement="floating"></IonInput>
                        <IonInput type="text" fill="solid" label="Téléphone" labelPlacement="floating"></IonInput>
                        <IonInput type="password" fill="solid" label="Mot de passe" labelPlacement="floating"></IonInput>
                        <IonInput type="password" fill="solid" label="Confirmer le mot de passe" labelPlacement="floating"></IonInput>
                        <IonButton>Inscription</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Inscription