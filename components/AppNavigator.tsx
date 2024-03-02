import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../components/StartPage';
import SettingsPage from '../components/SettingsPage';
import GameBoard from '../components/GameBoard';
import BackgroundMusic from './BackgroundMusic';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <BackgroundMusic />
            <Stack.Navigator initialRouteName="StartPage">
                <Stack.Screen name="StartPage" component={StartPage} options={{
                    title: "SNAKE AND LADDER",
                    headerStyle: {
                        backgroundColor: '#a7c957',
                    }, headerTitleStyle: {
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        fontWeight: 'bold'
                    }

                }} />

                <Stack.Screen name="Settings" component={SettingsPage}
                    options={{
                        title: "Settings",
                        headerStyle: {
                            backgroundColor: '#a7c957',
                        }, headerTitleStyle: {
                            fontWeight: 'bold'
                        }

                    }} />

                <Stack.Screen name="GameBoard" component={GameBoard}
                    options={{
                        title: "GAME TIME",
                        headerStyle: {
                            backgroundColor: '#a7c957',
                        }, headerTitleStyle: {
                            fontWeight: 'bold'
                        }

                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
