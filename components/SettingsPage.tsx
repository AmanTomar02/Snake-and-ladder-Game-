import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { VolumeManager } from 'react-native-volume-manager';

const SettingsPage: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [volume, setVolume] = useState(0.5)
    const [isMuted, setIsMute] = useState(false)

    useEffect(() => {
        VolumeManager.showNativeVolumeUI({ enabled: true })
        const initVolume = async () => {
            const { volume } = await VolumeManager.getVolume()
            setVolume(volume)
            setIsMute(volume === 0)
        }
        initVolume();

    }, [])

    const handleVolumeChange = async (value: number) => {
        await VolumeManager.setVolume(value);
        setVolume(value);
        setIsMute(value === 0);
    };




    const handleSlidingComplete = (value: number) => {
        VolumeManager.setVolume(value)

    }

    const toggleMute = async () => {
        const newVolume = isMuted ? 0.5 : 0; // Set to 0.5 to unmute
        await VolumeManager.setVolume(newVolume);
        setVolume(newVolume);
        setIsMute(!isMuted);
    }

    return (
        <View style={styles.container}>

            <View style={styles.Imgcontainer}>

                <Image style={styles.Img} source={require('../assets/images/settingPage2.png')} />


                <View style={styles.boxContainer}>

                    <Text style={styles.headingTxt}>Volume manager</Text>

                    <View style={{
                        flex: 1, justifyContent: 'center'
                    }}>
                        < View style={styles.musicContainer} >
                            <Image style={styles.musicImg} source={require('../assets/images/music.png')} tintColor="#00D2FF" />
                            <Text style={styles.musicManagerTxt} >Music :</Text>
                        </View>

                        <Slider
                            minimumValue={0}
                            maximumValue={100}
                            value={volume}
                            onValueChange={handleVolumeChange}
                            onSlidingComplete={handleSlidingComplete}
                            thumbTintColor='black'
                            maximumTrackTintColor='darkblue'
                            minimumTrackTintColor="#00D2FF"

                        />

                        <TouchableOpacity onPress={toggleMute}>
                            <Image style={styles.muteImg} source={require('../assets/images/mute.png')} tintColor="red" alt='mute' />
                        </TouchableOpacity>



                    </View>

                </View >

                <Image style={styles.Img} source={require('../assets/images/settingPage1.png')} />

            </View>




        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBEAD2'
    },
    boxContainer: {
        borderColor: 'black',
        borderWidth: 2,
        height: 300,
        width: 350,
        borderRadius: 17,
        backgroundColor: "#DBEAD2",
        elevation: 10,

    },
    headingTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 20,
        color: 'black',
        borderColor: 'black',
        justifyContent: "center",
        textAlign: 'center'
    },

    musicContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,

    },

    musicManagerTxt: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },

    musicImg: {
        height: 36,
        width: 28
    },
    muteImg: {
        marginLeft: 150,
        marginTop: 25,
        height: 40,
        width: 55

    },
    Imgcontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    Img: {
        height: 210,
        width: 210,
        margin: 20

    }
});

export default SettingsPage;
