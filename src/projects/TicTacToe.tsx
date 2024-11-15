import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import Icons from '../components/Icons';

export default function TicTacToe() {
  
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner(`Game draw!`);
    }
  };

  const onItemChange = (index: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      });
    }

    if (gameState[index] === "empty") {
      gameState[index] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return Snackbar.show({
        text: "Position is already filled",
        backgroundColor: "red",
        textColor: "#FFFFFF"
      })
    }

    checkIsWinner()

  };

  return (
    <SafeAreaView>
      {
        gameWinner ? (
          <View>
            <Text>{gameWinner}</Text>
          </View>
        ) : (
          <View>
            <Text>Player {isCross ? 'X' : 'O'}'s turn</Text>
          </View>
        )
      }
      <FlatList
      numColumns={3}
      data={gameState}
      renderItem={({item, index}) => (
        <Pressable
        key={index}
        onPress={() => onItemChange(index)}
        >
          <Icons name={item} />
        </Pressable>
      )}
      />

      <Pressable
      onPress={reloadGame}
      >
        <Text>{gameWinner ? "Start new game" : "Reload game"}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
