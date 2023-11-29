import { IonToolbar, IonText, IonButton, IonButtons, IonAlert, IonItem } from '@ionic/react'
import { Device } from '@capacitor/device'
import { useState } from 'react'
import { addJob, logout } from '../firebase'

interface ContainerProps { }

const EnteteContainer: React.FC<ContainerProps> = () => {
    function deconnection(){
        logout()
        location.replace('/')
    }

    const [lang, setLangue] = useState('fr')
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

    async function obtenirLangue(){
        const obLangue = await Device.getLanguageCode()
        setLangue(obLangue.value)
    }
    
    obtenirLangue()

    console.log(lang)

    return(
        <IonToolbar>
            <IonItem href="/">
                <IonText>RecrutementIC</IonText>
            </IonItem>
            <IonButtons slot="end">
                { isRecruteur ? <IonButton id="Aannonce">{ lang === 'en' ? 'Add ad job' : 'Ajouter une annonce'}</IonButton> : <></>}
                { isLogged ? <IonButton href={"profil/" + userid}>{lang === 'en' ? 'Profile' : 'Profil'}</IonButton> : <></>}
                { isLogged ? <IonButton onClick={deconnection}>{ lang === 'en' ? 'Logout' : 'Déconnexion'}</IonButton> : <IonButton href="/connexion">{ lang === 'en' ? 'Login' : 'Connexion'}</IonButton> }
            </IonButtons>

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
        </IonToolbar>
    )
}

export default EnteteContainer