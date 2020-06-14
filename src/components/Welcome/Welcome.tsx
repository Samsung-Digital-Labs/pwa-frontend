import React from 'react';
import {IonGrid,IonRow,IonCol, IonButton, IonIcon} from '@ionic/react';
import {Link, Redirect} from 'react-router-dom';

import {people,personAdd} from 'ionicons/icons';

import {connect} from 'react-redux';

const Welcome: React.FC<{isUserLoggedIn:boolean,history:any}> = (props) => {

  if(props.isUserLoggedIn){
    return <Redirect to="/home"></Redirect>
  }
  return (
      <div className="ion-text-center">
        <h1>Welcome To Our App</h1>
        <br></br>
        <p>Small Description of Our App</p>
        <br></br>
        
        <IonGrid>
          <IonRow>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/login" className="noUnderline">
                <IonButton color="danger" expand="block">
                  <IonIcon slot="start" icon={people} />
                  Login
                </IonButton>
              </Link>
            </IonCol>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/signup" className="noUnderline">
                <IonButton color="danger" expand="block">
                <IonIcon slot="start" icon={personAdd} />
                  Signup
                </IonButton>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
  );
};

const mapStateToProps=(state:any)=>{
  return{
      isUserLoggedIn:state.loadUserReducer.isUserLoggedIn
  }
}

export default connect(mapStateToProps,null)(Welcome);
