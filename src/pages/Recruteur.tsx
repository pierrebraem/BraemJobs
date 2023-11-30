import { IonHeader, IonText, IonPage, IonContent, IonAlert, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer";
import { addJob, getJobsByUserId } from "../firebase";
import { useState, useEffect } from "react";

const Recruteur: React.FC = () => {
    const [jobs, setJobs] = useState([] as any)

    let isRecruteur: boolean = false
    let userid: string = ''
    let isLogged: boolean = false

    document.cookie.split(';').map((cookie) => {
        const valeur = cookie.split('=')
        if(valeur[0].includes('recruteur')){
            if(valeur[1].includes('true')){
                isRecruteur = true
            }
        }

        if(valeur[0].includes('userid')){
            isLogged = true
            userid = valeur[1]
        }
    })

    useEffect(() => {
        const fetchJobs = async () => {
            const jobs = await getJobsByUserId(userid)

            setJobs(jobs)
        }

        fetchJobs().catch(console.error)
    }, [])

    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonButton id="Aannonce">Ajouter une annonce</IonButton>

                {
                    jobs.map((job: any) => {
                        return(
                            <IonCard color="medium">
                                <IonCardHeader>
                                    <IonCardTitle>{job.intitule}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>{job.entreprise} - {job.lieu}</IonText>
                                    <div>
                                        <IonButton href={"poste/" + job.id}>Consulter l'offre</IonButton>
                                        <IonButton href={"candidatures/" + job.id}>Consulter les candidatures</IonButton>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        )
                    })
                }
                <IonAlert
                trigger='Aannonce'
                header='Ajouter une annonce'
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
                        text: 'Ajouter',
                        handler: (data) => {
                            addJob(userid, data.intitule, data.entreprise, data.lieu, data.competences, data.description, data.profil)
                        }
                    },
                ]}
                ></IonAlert>
            </IonContent>
        </IonPage>
    )
}

export default Recruteur;