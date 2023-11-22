import { IonText, IonAlert, IonPage, IonButton, IonHeader, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonToolbar, IonButtons } from "@ionic/react"
import { getJobById, updateJob, deleteJob } from "../firebase"
import EnteteContainer from "../components/EnteteContainer"
import './DetailsPoste.css'
import { useState } from "react"

const DetailsPoste: React.FC = () => {
    const [intitule, setIntitule] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [lieu, setLieu] = useState('')
    const [competences, setCompetences] = useState('')
    const [description, setDescription] = useState('')
    const [profil, setProfil] = useState('') 

    getJobById('sdD7V4CjvKKMrEM6vV8T').then((job: any) => {
        setIntitule(job.intitule)
        setEntreprise(job.entreprise)
        setLieu(job.lieu)
        setDescription(job.description)
        setProfil(job.profil)

        const competences: string = job.competences.join(', ')
        setCompetences(competences)
    })

    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonButtons>
                    <IonButton href="/home">Retour</IonButton>
                    <IonButton id="Mannonce">Modifier l'offre</IonButton>
                    <IonButton id="Sannonce">Supprimer l'offre</IonButton>
                </IonButtons>
                
                <IonTitle><h1>{intitule}</h1></IonTitle>

                <IonText><p>{lieu}</p></IonText>
                <IonText><p>{entreprise}</p></IonText>
                <IonText><p>Compétences : {competences}</p></IonText>

                <IonTitle><h2>Description du poste</h2></IonTitle>
                <IonText><p>{description}</p></IonText>

                <IonTitle><h2>Profil</h2></IonTitle>
                <IonText><p>{profil}</p></IonText>

                <IonCard>
                    <IonCardHeader>
                        <IonTitle><h3>Postuler</h3></IonTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText><p>Regarder import de CV et LT avec capacitor/filesystem</p></IonText>
                        <IonButton>Postuler</IonButton>
                    </IonCardContent>
                </IonCard>

                <IonAlert
                trigger='Mannonce'
                header='Modifier une annonce'
                inputs={[
                    {
                        placeholder: 'Intitulé du poste',
                        name: 'intitule'
                    },
                    {
                        placeholder: 'Entreprise',
                        name: 'entreprise'
                    },
                    {
                        placeholder: 'Lieu',
                        name: 'lieu'
                    },
                    {
                        placeholder: 'Compétences',
                        name: 'competences'
                    },
                    {
                        placeholder: 'Description',
                        name: 'description'
                    },
                    {
                        placeholder: 'Profil',
                        name: 'profil'
                    }
                ]}
                buttons={[
                    {
                        text: 'Modifier',
                        handler: (data) => {
                            updateJob('OOWiUlE43KzrY6cc1jto', data.intitule, data.entreprise, data.lieu, data.competences, data.description, data.profil)
                        }
                    },
                ]}
                ></IonAlert>

                <IonAlert
                trigger='Sannonce'
                header='Voulez-vous vraiment supprimer loffre?'
                buttons={[
                    {
                        text: 'Supprimer',
                        handler: () => {
                            deleteJob('OOWiUlE43KzrY6cc1jto')
                        }
                    }
                ]}
                ></IonAlert>
            </IonContent>
        </IonPage>
    )
}

export default DetailsPoste;