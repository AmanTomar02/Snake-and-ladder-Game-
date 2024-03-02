import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Image, Pressable } from 'react-native';
import PlayerToken from './PlayerToken';


const GameBoard: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [playerPosition, setPlayerPosition] = useState(1);
    const [diceValue, setDiceValue] = useState<number | null>(1);


    const ladders: Record<number, number> = {
        8: 13,
        18: 65,
        27: 46,
        60: 61,
        68: 89,


    };

    const snakes: Record<number, number> = {
        // Define snake positions
        48: 28,
        67: 24,
        83: 19,
        79: 59,
        96: 76,
        74: 52,

    };



    const diceImages: Record<number, any> = {
        1: require('../assets/images/1.png'),
        2: require('../assets/images/2.png'),
        3: require('../assets/images/3.png'),
        4: require('../assets/images/4.png'),
        5: require('../assets/images/5.png'),
        6: require('../assets/images/6.png'),
    };

    const handleRollDice = () => {
        const diceValue = Math.floor(Math.random() * 6) + 1
        setDiceValue(diceValue)

        const newPosition = playerPosition + diceValue;

        if (ladders[newPosition]) {

            setPlayerPosition(ladders[newPosition])

        } else if (snakes[newPosition]) {

            setPlayerPosition(snakes[newPosition])

        } else {
            setPlayerPosition(newPosition <= 100 ? newPosition : playerPosition)
        }

        if (newPosition === 100) {
            Alert.alert('Congratulations!', 'You have reached the end of the game!', [
                {
                    text: 'OK',
                    onPress: () => resetGame(),
                },
            ]);
        }
        console.log("Dice : ", diceValue, "position : ", newPosition)
    }



    const renderBoard = () => {
        let alternateColor = true;
        const row = []

        for (let i = 9; i >= 0; i--) {

            const cells: any[] = [];
            const startNumber = i % 2 === 0 ? i * 10 + 1 : (i + 1) * 10;
            for (let j = 0; j < 10; j++) {
                const cellNumber = i % 2 === 0 ? startNumber + j : startNumber - j;

                const cellcolor = alternateColor ? '#FFFF00' : '#a7c957';
                alternateColor = !alternateColor

                cells.push(
                    <View key={cellNumber} style={[styles.cell, { backgroundColor: cellcolor }]}>
                        <Text>{cellNumber}</Text>
                    </View>
                );
            }

            alternateColor = !alternateColor

            row.push(
                <View
                    key={i} style={styles.row}>
                    {cells}
                </View>
            )
        }
        return row;
    }


    const resetGame = () => {
        setPlayerPosition(1);
        setDiceValue(1);
    };


    return (
        <View style={styles.container}>


            <View style={styles.boardContainer}>
                {renderBoard()}
                < Image style={styles.image} source={require('../assets/images/snake-ladder.png')} />
                <PlayerToken position={playerPosition} imgSource={require('../assets/images/redToken.png')}/>
            </View>

            <Pressable onPress={handleRollDice}>
                <Image style={styles.diceImage} source={diceValue ? diceImages[diceValue] : null} />
            </Pressable>


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBEAD2',
    },
    row: {
        flexDirection: 'row'
    },
    cell: {

        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    rollButton: {
        marginTop: 20,
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: 'lightgreen',
        borderRadius: 100,
        borderColor: 'green',
        borderWidth: 2,
        elevation: 10
    },
    boardContainer: {

        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    otherOption: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'skyblue',
        borderRadius: 20,
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,

    },
    otheroptionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    diceValueContainer: {
        marginTop: 10,
    },
    image: {
        width: '96.9%',
        height: '96.9%',
        position: 'absolute',
    },
    diceImage: {
        width: 150,
        height: 150,
    },


});

export default GameBoard;
