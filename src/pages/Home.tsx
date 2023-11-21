import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonSearchbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
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
        <IonSearchbar color="medium" showClearButton='always' placeholder='Rechercher un métier'></IonSearchbar>

        <IonCard color="medium" href="/poste">
          <IonCardHeader>
            <IonCardTitle>Développement NodeJS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>CGI - Paris (75)</IonText>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonCardHeader>
            <IonCardTitle>Développement Java (Sénior)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>WorldWide - Calais (62)</IonText>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonCardHeader>
            <IonCardTitle>Développement Ionic Capacitor (Junior)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>WorldWide - Lille (59)</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
