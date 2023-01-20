import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Índice') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CrearHistoria') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Índice" component={Feed} />
            <Tab.Screen name="CrearHistoria" component={CreateStory} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea: {
        marginTop: Platform.05 === "android" ? StatusBar.currentHeight: RfValue(35)
    },
    appTitle:{
        flex: 0.07,
        flexDirection:"row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems:"center",
        alignItems:"center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color: "white",
        justifyContent: "center"
    },
    appTitleText:{
        color: "white",
        fontSize: RfValue(28)
    },
    cardContainer: {
         flex: 0.85
    }

    
})

export default BottomTabNavigator
