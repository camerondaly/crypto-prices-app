import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const AssetRow = ({ name, image, symbol, price, priceChange }) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text >{name}</Text>
          <Image style={styles.asseticon} source={{ uri: image}} />
          <Text>{symbol}</Text>
        </View>
        <View style={styles.right}>
          <Text>{price}</Text>
          {priceChange < 0 ? (
              <Text style={{backgroundColor: 'red'}}>{priceChange.toFixed(2)}%</Text>
            ) : (
              <Text style={{backgroundColor: 'green'}}>{priceChange.toFixed(2)}%</Text>
            )
          }
        </View>
      </View>
    )
}

export default AssetRow

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20,
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  asseticon: {
    width: 50,
    height: 50,
  }
})
