import { IonPage, IonHeader, IonContent, IonCardTitle, IonCard, IonCardHeader } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getCVsByJob, getUserById } from "../firebase"

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
                                    <IonCardTitle>{candidature.nomCandidat} - {candidature.prenomCandidat}</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        )
                    })
                }
            </IonContent>
        </IonPage>
    )
}

export default Candidatures