import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

export default function ProductItem({ product }: ProductProps) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: product.imageUrl
        }}
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
          <Text>Pkr {product.originalPrice}</Text>
          <Text>Pkr {product.discountPrice}</Text>
          <Text>{product.offerPercentage}% off</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 150,
    // resizeMode: 'contain',
  },
});
