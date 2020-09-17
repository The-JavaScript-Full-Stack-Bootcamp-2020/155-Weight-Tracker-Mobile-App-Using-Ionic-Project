import MeasureListItem from '../components/MeasureListItem';
import React, { useState } from 'react';
import { Measure, getMeasures } from '../data/measures';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [measures, setMeasures] = useState<Measure[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMeasures();
    setMeasures(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Measurements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {measures.map( m => <MeasureListItem key={m.id} measure={m} setMeasure={setMeasures} measures={measures} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
