import React, { Component } from "react";
import { connect } from "react-redux";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import * as actions from "../../actions/actions";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  history: any;
  isUserLoggedIn: boolean;
  loadUser: any;
}

interface State {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

class Signup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  signup = () => {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    // console.log("user is",user);

    // api request
    if (true) {
      this.props.loadUser(true);
    } else {
      window.alert("error");
    }
  };

  render() {
    // console.log("isUserLoggedIn",this.props.isUserLoggedIn);
    if (this.props.isUserLoggedIn) {
      return <Redirect to="/home"></Redirect>;
    } else {
      return (
        <div className="ion-text-center">
          <h1>Sign Up</h1>
          <br></br>
          <IonGrid>
            <IonRow>
              <IonCol sizeSm="6" sizeXs="12">
                <IonItem>
                  <IonLabel position="floating">First Name</IonLabel>
                  <IonInput
                    value={this.state.firstName}
                    onIonChange={(e) => {
                      this.setState({ firstName: e.detail.value! });
                    }}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol sizeSm="6" sizeXs="12">
                <IonItem>
                  <IonLabel position="floating">Last Name</IonLabel>
                  <IonInput
                    value={this.state.lastName}
                    onIonChange={(e) => {
                      this.setState({ lastName: e.detail.value! });
                    }}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={this.state.email}
                    onIonChange={(e) => {
                      this.setState({ email: e.detail.value! });
                    }}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={this.state.password}
                    onIonChange={(e) => {
                      this.setState({ password: e.detail.value! });
                    }}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
          <br></br>
          <IonButton
            color="dark"
            expand="full"
            size="large"
            onClick={this.signup}
          >
            Sign Up
          </IonButton>
          <br></br>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="noUnderline">
              Login
            </Link>
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    isUserLoggedIn: state.loadUserReducer.isUserLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (isUserLoggedIn: boolean) => {
      dispatch(actions.loadUser(isUserLoggedIn));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
