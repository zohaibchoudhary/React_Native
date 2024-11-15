import React from 'react'
import { 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../projects/Navigation'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route}: DetailsProps): React.JSX.Element {

  const {product} = route.params

  return (
    <ScrollView>
      <View>
      <Image
        source={{
          uri: product.imageUrl,
        }}
        style={styles.image}
      />

      <View>
        <Text>{product.name}</Text>

        <View>
          <View>
            <Text>{product.rating} ★</Text>
          </View>
          <Text>{product.ratingCount}</Text>
        </View>

        <View>
          <Text>Pkr{product.originalPrice}</Text>
          <Text>Pkr {product.discountPrice}</Text>
          <Text>% {product.offerPercentage} off</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 450,
    resizeMode: 'contain'
  }
})