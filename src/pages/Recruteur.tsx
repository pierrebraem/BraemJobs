import { IonHeader, IonPage, IonContent, IonAlert, IonButton } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer";
import { addJob } from "../firebase";

const Recruteur: React.FC = () => {
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
    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonButton id="Aannonce">Ajouter une annonce</IonButton>

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