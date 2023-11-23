import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonText, IonNote, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ceramah</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
      
      <IonList inset={true}>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start">
              <div className="unread-indicator"></div>
            </div>
            <IonLabel>
              <strong>Kegemilangan Islam</strong>
              <IonText></IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Speaker: Ustaz Tuan Ibrahim, Masjid Seksyen 7 Shah Alam
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">2km from you</IonNote>
              {/* <IonIcon color="medium" icon={chevronForward}></IonIcon> */}
            </div>
          </IonItem>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonLabel>
              <strong>Amalan Syiah di Malaysia</strong>
              <IonText></IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Speaker: Ustaz Haron Din, Masjid SSAS
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">5.2km from you</IonNote>
              {/* <IonIcon color="medium" icon={chevronForward}></IonIcon> */}
            </div>
          </IonItem>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start">
              <div className="unread-indicator"></div>
            </div>
            <IonLabel>
              <strong>Memahami Tujuan Hidup</strong>
              <IonText></IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Speaker: Abdullah Gymnastiar, Surau Kolej Melati
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">950m from you</IonNote>
              {/* <IonIcon color="medium" icon={chevronForward}></IonIcon> */}
            </div>
          </IonItem>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonLabel>
              <strong>Sakaratul Maut Itu Pasti</strong>
              <IonText></IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Speaker: Abdullah Khairi, Masjid Al-Mawaddah
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">3.4km from you</IonNote>
              {/* <IonIcon color="medium" icon={chevronForward}></IonIcon> */}
            </div>
          </IonItem>
        </IonList>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ceramah</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="List" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
