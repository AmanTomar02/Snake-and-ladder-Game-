import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing, withSpring, withSequence } from 'react-native-reanimated';


interface PlayerTokenProps {
    position: number;
    imgSource: any;
}

const PlayerToken: React.FC<PlayerTokenProps> = ({ position, imgSource }) => {
    const left = useSharedValue(0);
    const bottom = useSharedValue(0);



    useEffect(() => {
        const row = Math.floor((position - 1) / 10);
        const col = (row % 2 === 0) ? (position - 1) % 10 : 9 - (position - 1) % 10;

        left.value = withTiming(col * 40 + 1, {
            duration: 500,
            easing: Easing.linear,

        })
        bottom.value = withTiming(row * 40 + 4, {
            duration: 500,
            easing: Easing.linear,
        })
    }, [position]);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            left: left.value,
            bottom: bottom.value,
            
        };
    });

    return <Animated.View style={[styles.token, animatedStyle]} >
        <Image source={imgSource} style={styles.tokenImg} />
    </Animated.View>;
};


const styles = StyleSheet.create({
    token: {
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    tokenImg: {
        height: 40,
        width: 38,
    },
});

export default PlayerToken;
