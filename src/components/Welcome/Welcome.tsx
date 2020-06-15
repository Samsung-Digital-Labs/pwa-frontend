import React from "react";

import {
  IonButton,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonApp,
  IonContent,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import { Link, Redirect } from "react-router-dom";

import { people, personAdd } from "ionicons/icons";

import { connect } from "react-redux";

const Welcome: React.FC<{ isUserLoggedIn: boolean; history: any }> = (
  props
) => {
  if (props.isUserLoggedIn) {
    return <Redirect to="/home"></Redirect>;
  }
  return (
    <IonApp>
      <IonContent>
        <div className="ion-text-center">
          <img src="./assets/logo.png" alt="not found"></img>
          <IonTitle>
            <h3>An all in one teaching solution</h3>
          </IonTitle>
        </div>
      </IonContent>

      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonToolbar color="primary">
              <IonCol sizeSm="6" sizeXs="12">
                <Link to="/login" className="noUnderline">
                  <IonButton
                    size="large"
                    color="light"
                    expand="full"
                    fill="clear"
                  >
                    <IonIcon slot="start" icon={people} />
                    Login
                  </IonButton>
                </Link>
              </IonCol>
            </IonToolbar>
            <IonToolbar color="dark">
              <IonCol sizeSm="6" sizeXs="12">
                <Link to="/signup" className="noUnderline">
                  <IonButton
                    color="light"
                    size="large"
                    expand="full"
                    fill="clear"
                  >
                    <IonIcon slot="start" icon={personAdd} />
                    Signup
                  </IonButton>
                </Link>
              </IonCol>
            </IonToolbar>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonApp>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isUserLoggedIn: state.loadUserReducer.isUserLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Welcome);
