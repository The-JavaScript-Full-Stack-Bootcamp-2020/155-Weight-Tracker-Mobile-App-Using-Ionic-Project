import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, useIonViewWillEnter } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Add from './pages/Add';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Measure, getMeasures } from './data/measures';

const App: React.FC = () => {
  const [measures, setMeasures] = useState<Measure[]>([])
    useEffect(() => {
    const msgs = getMeasures()
    setMeasures(msgs)
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path='/home'
            render={() => (
              <Home measures={measures} setMeasures={setMeasures} />
            )}
            exact={true}
          />
          <Route
            path='/add'
            render={() => <Add measures={measures} setMeasures={setMeasures} />}
            exact={true}
          />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}
export default App;
