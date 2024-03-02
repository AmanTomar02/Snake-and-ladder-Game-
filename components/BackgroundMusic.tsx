import React from "react";
import Sound from "react-native-sound";

const BackgroundMusic: React.FC = () => {



    var sound = new Sound('background_music.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

        // Play the sound with an onEnd callback
        sound.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    })



    return null; // This component doesn't render anything
};

export default BackgroundMusic;