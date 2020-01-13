import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../initializers/firebase';
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { NavLink } from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);

        this.state = {
            userLoggedIn: false,
            photoURL: ''
        };

    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    userLoggedIn: true,
                    photoURL: user.providerData[0].photoURL
                })
            }else{
                this.setState({
                    userLoggedIn: false,
                    photoURL: ''
                })
            }
        })
    }
    logout(){
        firebase.auth().signOut().then(console.log);

    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result=>{
            console.log(result);
        })
    }
    logInButton(){
        if(this.state.userLoggedIn) return(
            [<Avatar src={this.state.photoURL} />,<IconButton onClick={this.logout}><ExitToApp/></IconButton>]
        );
        return(<Button variant="contained" onClick={this.login} >Iniciar Sesion</Button>)
    }

    render(){
        return(
            <div className="L">
                {this.logInButton()}
            </div>
        );
    }
}
export  default withStyles({
    container:{
        display: 'flex',
        flexDirection:'row'
    },
    sombra:{
        backgroundColor: '#3498DB '
    }
})(Login); 