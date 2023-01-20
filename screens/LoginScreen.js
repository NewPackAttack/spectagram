import React  {Component} from 'react';
import{Text, View} from 'react-native';

export default class LoginScreen extends Component {
    signinWithGoogleAsync = async () => {
        try{
            const result = await this.signinWithGoogleAsync.loginAsync({
                behaviour:"web",
                iosClientId:"519094801323-robi8lm3e07nrel3rp1f2orba3e7locm.apps.googleusercontent.com",
                scopes:["profile", "email"],
            })
        }
    }
    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent:"center";
                alignItems:"center"
            }}>
                <Text>Cargando</Text>
                </View>
        )
    }
}