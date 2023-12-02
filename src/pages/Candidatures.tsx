import { IonPage, IonHeader, IonContent, IonButton, IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonButtons } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { downloadFile, getCVsByJob } from "../firebase"

const Candidatures: React.FC = () => {
    const job: any = useParams()

    const [candidatures, setCandidatures] = useState([])

    useEffect(() => {
        const fetchCandidatures = async () => {
            const res: any = await getCVsByJob(job.id)
            setCandidatures(res.candidats)

            
        }

        fetchCandidatures()
    }, [])

    async function ouvrirCV(url: string){
        const urlD: any = await downloadFile(url)
        window.open(urlD, '_blank')
    }

    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                {
                    candidatures.map((candidature: any) => {
                        return(
                            <IonCard color="medium">
                                <IonCardHeader>
                                    <IonCardTitle>{candidature.prenomCandidat} {candidature.nomCandidat}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonButtons>
                                        <IonButton href={"profil/" + candidature.idCandidat}>Consulter le profil</IonButton>
                                        <IonButton onClick={() => ouvrirCV(candidature.urlCV)}>Consulter le CV</IonButton>
                                    </IonButtons>
                                </IonCardContent>
                            </IonCard>
                        )
                    })
                }
            </IonContent>
        </IonPage>
    )
}

export default Candidatures