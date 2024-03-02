import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const StartPage: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.thumbnail} source={require('../assets/images/snakesnladders-header-thumbnail.png')} />
            </View>
            <TouchableOpacity style={styles.newGmaeButton} onPress={() => navigation.navigate('GameBoard')}>
                <Text style={styles.buttonText}>New Game</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('Settings')}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 8 }}>
                    <Text style={styles.buttonText}>Settings</Text>
                    <Image style={styles.settingimg} source={require('../assets/images/setting.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBEAD2'
    },

    titleContainer: {
        marginBottom: 30
    },

    newGmaeButton: {
        marginTop: 16,
        paddingHorizontal: 40,
        paddingVertical: 8,
        backgroundColor: '#DBEAD2',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'darkblue',
        elevation: 10
    },

    settingButton: {
        marginTop: 16,
        backgroundColor: '#DBEAD2',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'darkblue',
        elevation: 10
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'darkblue',
        textAlign: 'center',
    },

    thumbnail: {
        height: 300,
        width: 300,
    },

    settingimg: {
        height: 40,
        width: 40,
        marginLeft: 10,
    },

});

export default StartPage;
