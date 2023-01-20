import * as React from "react";
import{createSwitchNavigator, createAppContainer} from "react-navigation";

import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/Loadingscreen";
import DashboardScreen from "./screens/DashBoardScreen"

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

export default function App() {
  return (
   <AppNavigator/>
  );
}