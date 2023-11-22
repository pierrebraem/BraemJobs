import { IonHeader, IonPage, IonTitle, IonContent, IonText, IonRow, IonAvatar, IonLabel, IonItem, IonCard, IonCardHeader, IonCardContent, IonList, IonCol, IonButton, IonButtons, IonAlert } from "@ionic/react"
import EnteteContainer from "../components/EnteteContainer"

const Profil : React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <EnteteContainer />
            </IonHeader>
            <IonContent fullscreen>
                <IonItem>
                    <IonAvatar slot="start">
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"></img>
                    </IonAvatar>
                    <IonLabel>Pierre Braem</IonLabel>
                </IonItem>
                <IonItem>
                    <IonCard>
                        <IonCardHeader>
                            <IonTitle><h3>Description</h3></IonTitle>
                        </IonCardHeader>
                        <IonCardContent><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                            Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
                            Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.    
                        </p></IonCardContent>
                    </IonCard>
                </IonItem>
                <IonItem>
                    <IonCard>
                        <IonCardHeader>
                            <IonTitle><h3>Compétences</h3></IonTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonTitle><h4>hard-skills : </h4></IonTitle>
                            <IonList>
                                <IonItem>
                                    <IonLabel><p>C#</p></IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel><p>PHP</p></IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel><p>HTML/CSS</p></IonLabel>
                                </IonItem>
                            </IonList>

                            <IonTitle><h4>solf-skills : </h4></IonTitle>
                            <IonList>
                                <IonItem>
                                    <IonLabel><p>Créatif</p></IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel><p>Déterminé</p></IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel><p>Esprit d'équipe</p></IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonItem>

                <IonItem>
                    <IonCard>
                        <IonCardHeader>
                            <IonItem>
                                <IonTitle><h3>Expériences</h3></IonTitle>
                                <IonButtons slot="end">
                                    <IonButton id="ajouter-experience">Ajouter une expérience</IonButton>
                                </IonButtons>
                            </IonItem>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonRow>
                                <IonCol>
                                    <IonTitle><h2>Développeur full-stack - Stage</h2></IonTitle>
                                    <IonTitle><h3>Infotel</h3></IonTitle>
                                    <IonTitle><h3>Mars 2023 - Juin 2023</h3></IonTitle>

                                    <IonText><p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                                        Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                                        Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
                                        Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
                                    </p></IonText>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonTitle><h2>Lead dev - Stage</h2></IonTitle>
                                    <IonTitle><h3>Lycée Henri Wallon</h3></IonTitle>
                                    <IonTitle><h3>Janvier 2022 - Février 2022</h3></IonTitle>

                                    <IonText><p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                                        Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                                        Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
                                        Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
                                    </p></IonText>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonItem>

                <IonItem>
                    <IonCard>
                        <IonCardHeader>
                            <IonItem>
                                <IonTitle><h3>Formations</h3></IonTitle>
                                <IonButtons slot="end">
                                    <IonButton id="ajouter-formation">Ajouter une formation</IonButton>
                                </IonButtons>
                            </IonItem>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonRow>
                                <IonCol>
                                    <IonTitle><h2>INSA Hauts-de-France</h2></IonTitle>
                                    <IonTitle><h3>Licence professionnelle - Développement web et mobile</h3></IonTitle>
                                    <IonTitle><h3>2022 - 2023</h3></IonTitle>

                                    <IonText><p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                                        Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                                        Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
                                        Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
                                    </p></IonText>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonItem>

                <IonAlert
                trigger='ajouter-experience'
                header='Ajouter une expérience'
                inputs={[
                    {
                        placeholder: 'Intitulé du poste'
                    },
                    {
                        placeholder: 'Nom de l\'entreprise'
                    },
                    {
                        type: 'date',
                        placeholder: 'Date de début'
                    },
                    {
                        type: 'date',
                        placeholder: 'Date de fin'
                    },
                    {
                        type: 'textarea',
                        placeholder: 'Description'
                    }
                ]}
                buttons={['Ajouter']}
                ></IonAlert>

                <IonAlert
                trigger='ajouter-formation'
                header='Ajouter une formation'
                inputs={[
                    {
                        placeholder: 'Nom de l\'école'
                    },
                    {
                        placeholder: 'Intitulé de la formation'
                    },
                    {
                        type: 'date',
                        placeholder: 'Date de début'
                    },
                    {
                        type: 'date',
                        placeholder: 'Date de fin'
                    },
                    {
                        type: 'textarea',
                        placeholder: 'Description'
                    }
                ]}
                buttons={['Ajouter']}
                ></IonAlert>
            </IonContent>
        </IonPage>
    )
}

export default Profil