import { IonToolbar, IonText, IonButton, IonButtons } from '@ionic/react'
import './EnteteContainer.css'

interface ContainerProps { }

const EnteteContainer: React.FC<ContainerProps> = () => {
    return(
        <IonToolbar>
            <IonText>RecrutementIC</IonText>
            <IonButtons slot="end">
                <IonButton href="/connexion">Connexion</IonButton>
            </IonButtons>
        </IonToolbar>
    )
}

export default EnteteContainer