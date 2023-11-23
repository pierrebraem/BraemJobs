import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonSearchbar } from '@ionic/react';
import EnteteContainer from "../components/EnteteContainer"
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <EnteteContainer />
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar color="medium" showClearButton='always' placeholder='Rechercher un métier'></IonSearchbar>

        <IonCard color="medium" href="/poste/sNww2S3zPmHeccpUeUKy">
          <IonCardHeader>
            <IonCardTitle>Développement NodeJS (junior)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>BraemComputing - Lille</IonText>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium" href="/poste/Av1uxeEr4nvtM5mQhJ3a">
          <IonCardHeader>
            <IonCardTitle>Développement Typescript</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>Braem Computing - Lille</IonText>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonCardHeader>
            <IonCardTitle>Développement Ionic Capacitor (Junior)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>UneEntreprise - Lille (59)</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
