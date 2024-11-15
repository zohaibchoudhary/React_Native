import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../projects/Navigation';

import { PRODUCTS_LIST } from '../data/constants';
import Seperator from '../components/Seperator';
import ProductItem from '../components/ProductItem';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Seperator}
      renderItem={({item}) => (
        <Pressable
        onPress={() => navigation.navigate('Details', {
          product: item
        })}
        >
          <ProductItem product={item} />
        </Pressable>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home