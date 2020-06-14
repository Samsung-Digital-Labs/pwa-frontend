import React from 'react';
import {IonGrid,IonRow,IonCol, IonButton, IonIcon} from '@ionic/react';
import {Link} from 'react-router-dom';

import {people,personAdd} from 'ionicons/icons';

const Welcome: React.FC = () => {

  return (
      <div className="ion-text-center">
        <h1>Welcome To Our App</h1>
        <br></br>
        <p>Small Description of Our App</p>
        <br></br>
        
        <IonGrid>
          <IonRow>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/studentlogin" className="noUnderline">
                <IonButton color="danger" expand="block">
                  <IonIcon slot="start" icon={people} />
                  Student Login
                </IonButton>
              </Link>
            </IonCol>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/studentsignup" className="noUnderline">
                <IonButton color="danger" expand="block">
                <IonIcon slot="start" icon={personAdd} />
                  Student Signup
                </IonButton>
              </Link>
            </IonCol>
          </IonRow>

          <br></br>
          
          <IonRow>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/teacherlogin" className="noUnderline">
                <IonButton color="danger" expand="block">
                  <IonIcon slot="start" icon={people} />
                  Teacher Login
                </IonButton>
              </Link>
            </IonCol>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/teachersignup" className="noUnderline">
                <IonButton color="danger" expand="block">
                  <IonIcon slot="start" icon={personAdd} />
                  Teacher SignUp
                </IonButton>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
  );
};

export default Welcome;
