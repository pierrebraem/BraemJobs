import { IonContent, IonPage, IonHeader, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonSearchbar } from '@ionic/react';
import EnteteContainer from "../components/EnteteContainer"
import { getJobs } from '../firebase';
import { useEffect, useState } from "react"

const Home: React.FC = () => {
  const [jobs, setJobs] = useState([] as any)

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsRes = await getJobs()

      let jobs: any[] = []
      jobsRes.map((job) => {
        jobs.push({ id: job.id, ...job.data() })
      })

      setJobs(jobs)
    }

    fetchJobs().catch(console.error)
  }, [])

  console.log(jobs)

  return (
    <IonPage>
      <IonHeader>
        <EnteteContainer />
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar color="medium" showClearButton='always' placeholder='Rechercher un métier'></IonSearchbar>

        {
          jobs.map((job: any) => {
            return(
              <IonCard color="medium" href={"poste/" + job.id}>
                <IonCardHeader>
                  <IonCardTitle>{job.intitule}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>{job.entreprise} - {job.lieu}</IonText>
                </IonCardContent>
              </IonCard>
            )
          })
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
