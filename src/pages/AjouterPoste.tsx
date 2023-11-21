import { IonContent, IonHeader, IonPage, IonCard, IonCardHeader, IonTitle, IonCardContent, IonInput, IonButton } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"

const AjouterPoste : React.FC = () => {
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
                        <IonInput type="text" fill="solid" label="Compétences" labelPlacement="floating"></IonInput>
                        <IonInput type="text" fill="solid" label="Description" labelPlacement="floating"></IonInput>
                        <IonInput type="text" fill="solid" label="Profil" labelPlacement="floating"></IonInput>
                        <IonButton>Ajouter</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default AjouterPoste