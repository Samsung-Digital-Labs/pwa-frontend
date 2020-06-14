import React,{Component} from 'react';
import {connect} from 'react-redux';
import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';

import * as actions from '../../actions/actions';
import { Redirect } from 'react-router-dom';

interface Props{
    history:any,
    isUserLoggedIn:boolean,
    loadUser:any
}

interface State{
    email:string,
    password:string
}

class Login extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    login=()=>{
        const user={
            email:this.state.email,
            password:this.state.password
        }

        // api request
        
        if(true){
            this.props.loadUser(true);

            // console.log(JSON.parse(JSON.stringify(this.props)))
            // this.props.history.push("/home");
        }
        else{
            window.alert("wrong credentials!");
        }
    }
    
    render(){
        // console.log("email is "+this.state.email);
        // console.log("pass is "+this.state.password);

        // console.log("user logged in",this.props.isUserLoggedIn);

        if(this.props.isUserLoggedIn){
            return <Redirect to="/home"></Redirect>
        }
        else{
            return(
                <div className="ion-text-center">
                    <h1>Login</h1>
                    <br></br>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput value={this.state.email} onIonChange={ e => {this.setState({email:e.detail.value!})} }></IonInput>
                    </IonItem>
                    <br></br>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" value={this.state.password} onIonChange={ e => {this.setState({password:e.detail.value!})} }></IonInput>
                    </IonItem>
                    <br></br>
                    <IonButton onClick={this.login}>Login</IonButton>
                </div>
            );
        }
    }
}
const mapStateToProps=(state:any)=>{
    return{
        isUserLoggedIn:state.loadUserReducer.isUserLoggedIn
    }
}

const mapDispatchToProps=(dispatch:any)=>{
    return{
        loadUser:(isUserLoggedIn:boolean)=>{
            dispatch(actions.loadUser(isUserLoggedIn))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);