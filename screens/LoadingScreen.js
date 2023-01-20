import React  {Component} from 'react';
import{ View, ActivityIndicator} from 'react-native';
import firebase from "firebase";

export default class LoadingScreen extends Component {
    componentDidMounr(){
        this.checkIfLoggedin()
    }
    
    checkIfLoggedin = () =>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate('')
            }else{
                this.props.navigatioon.navigate('PantalladelIniciodeSesión')
            }
        })
    }

    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent:"center";
                alignItems:"center"
            }}>
                <ActivityIndicator size="large"/>
                </View>
        )
    }
}