import { IonText, IonAlert, IonPage, IonButton, IonHeader, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonToolbar, IonButtons, IonCardTitle, IonGrid } from "@ionic/react"
import { getJobById, updateJob, deleteJob, addCV } from "../firebase"
import EnteteContainer from "../components/EnteteContainer"
import { ScreenReader } from "@capacitor/screen-reader"
import { Dialog } from "@capacitor/dialog"
import { AppLauncher } from '@capacitor/app-launcher'
import { Device } from '@capacitor/device'
import { useState } from "react"
import { useParams } from "react-router"

const DetailsPoste: React.FC = () => {
    const jobid: any = useParams()
    let CV: any = null

    const [intitule, setIntitule] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [lieu, setLieu] = useState('')
    const [competences, setCompetences] = useState('')
    const [description, setDescription] = useState('')
    const [profil, setProfil] = useState('')
    const [lang, setLangue] = useState('fr')
    const [isOwner, setOwner] = useState(false) 
    const [userid, setUserId] = useState('')

    getJobById(jobid.id).then((job: any) => {
        setIntitule(job.intitule)
        setEntreprise(job.entreprise)
        setLieu(job.lieu)
        setDescription(job.description)
        setProfil(job.profil)

        const competences: string = job.competences.join(', ')
        setCompetences(competences)

        document.cookie.split(';').map((cookie) => {
            const valeur = cookie.split('=')
            if(valeur[0].includes('userid')){
                setUserId(valeur[1])
                if(valeur[1].includes(job.recruteur)){
                    setOwner(true)
                }
            }
        })
    })

    console.log(jobid.id)

    async function lireAnnonce(){
        ScreenReader.speak({ value: intitule + ' sur ' + lieu + ' dans l\'entreprise' + entreprise + '.'
        + 'Les compétences pour ce poste sont : ' + competences + '.'
        + 'Description du poste' + description + '.'
        + 'Le profil rechercher' + profil + '.'
        , 
        language: 'fr'})
    }

    async function supprimerAnnonce(){
        const res = await Dialog.confirm({
            title: 'Supprimer une annonce',
            message: 'Voulez-vous vraiment supprimer cette annonce ?'
        })

        if(res){
            deleteJob(jobid.id)
        }
    }

    async function ouvrirFacebook(){
        const url = 'https://www.facebook.com/'
        const checkIfAllowed = await AppLauncher.canOpenUrl({ url: url })

        if(checkIfAllowed){
            await AppLauncher.openUrl({ url: url })
        }
    }

    async function ouvrirTwitter(){
        const url = 'https://twitter.com/'
        const checkIfAllowed = await AppLauncher.canOpenUrl({ url: url })

        if(checkIfAllowed){
            await AppLauncher.openUrl({ url: url })
        }
    }

    async function ouvrirGithub(){
        const url = 'https://github.com/'
        const checkIfAllowed = await AppLauncher.canOpenUrl({ url: url })

        if(checkIfAllowed){
            await AppLauncher.openUrl({ url: url })
        }
    }

    async function obtenirLangue(){
        const obLangue = await Device.getLanguageCode()
        setLangue(obLangue.value)
    }
    
    obtenirLangue()

    console.log(lang)

    function setCV(e: any){
        CV = e.target.files![0]
    }

    function envoyerDocument(){
        if(CV != null){
            if(((CV.size / 1024) / 1024) >= 2){
                console.log('Le fichier est trop volumineux')
            }
            else if(CV.type != 'application/pdf'){
                console.log('Le fichier doit être un PDF')
            }
            else{
                addCV(CV, jobid.id, userid)
            }
            
        }
    }

    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonButtons>
                    <IonButton href="/home">{ lang === 'en' ? 'Back' : 'Retour'}</IonButton>
                    { isOwner ? <IonButton id="Mannonce">{ lang === 'en' ? 'Modify the job offer' : 'Modifier l\'offre'}</IonButton> : <></>}
                    { isOwner ? <IonButton onClick={supprimerAnnonce}>{ lang === 'en' ? 'Delete the job offer' : 'Supprimer l\'offre'}</IonButton> : <></>}
                    <IonButton onClick={lireAnnonce}>{ lang === 'en' ? 'Read job offer' : 'Lire l\'annonce'}</IonButton>
                </IonButtons>
                
                <IonTitle><h1>{intitule}</h1></IonTitle>

                <IonText><p>{lieu}</p></IonText>
                <IonText><p>{entreprise}</p></IonText>
                <IonText><p>{ lang === 'en' ? 'Skills' : 'Compétences'} : {competences}</p></IonText>

                <IonTitle><h2>{ lang === 'en' ? 'Job description' : 'Description du poste'}</h2></IonTitle>
                <IonText><p>{description}</p></IonText>

                <IonTitle><h2>{ lang === 'en' ? 'Job requirements' : 'Profil'}</h2></IonTitle>
                <IonText><p>{profil}</p></IonText>

                <IonGrid>
                    <IonCard>
                        <IonCardHeader>
                            <IonTitle><h3>Postuler</h3></IonTitle>
                        </IonCardHeader>
                            {userid != '' ? 
                                <IonCardContent>
                                    <div>
                                        <IonText>Le fichier doit être un PDF de taille maximal de 2 Mb</IonText>
                                    </div>
                                    <input type="file" id="envoieCV" onChange={setCV}/>
                                    <IonButton onClick={envoyerDocument}>Postuler</IonButton>
                                </IonCardContent>
                                :
                                <IonCardContent>
                                    <IonText>Vous devez être connectés pour pouvoir postuler</IonText>
                                </IonCardContent>
                            }
                    </IonCard>
                </IonGrid>

                <IonGrid>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{ lang === 'en' ? 'Links of company' : 'Liens de l\'entreprise'}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonButtons slot='middle'>
                                <IonButton onClick={ouvrirFacebook}>Facebook</IonButton>
                                <IonButton onClick={ouvrirTwitter}>Twitter</IonButton>
                                <IonButton onClick={ouvrirGithub}>Github</IonButton>
                            </IonButtons>
                        </IonCardContent>
                    </IonCard>
                </IonGrid>

                {isOwner ? <IonAlert
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
                            updateJob(jobid.id, userid, data.intitule, data.entreprise, data.lieu, data.competences, data.description, data.profil)
                        }
                    },
                ]}
                ></IonAlert> : <></>}
            </IonContent>
        </IonPage>
    )
}

export default DetailsPoste;