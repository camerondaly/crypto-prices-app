import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const AssetRow = ({ name, image, symbol, price, priceChange }) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.asseticon} source={{ uri: image}} />
          <Text style={styles.text}>{name} - {symbol}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.text}>${price.toLocaleString(undefined, {'minimumFractionDigits':2})}</Text>
          {priceChange < 0 ? (
              <Text style={styles.redtext}>{priceChange.toFixed(2)}%</Text>
            ) : (
              <Text style={styles.greentext}>{priceChange.toFixed(2)}%</Text>
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
    height: 80,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: '#18191a',
    marginBottom: 1,
    maxWidth: '100%',
  },
  left: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignContent: 'flex-end',
  },  
  asseticon: {
    width: 55,
    height: 55,
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: '#e4e6eb',
  },
  redtext: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#DD2F2F',
    borderRadius: 20,
    overflow: 'hidden',
  },
  greentext: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#05B858',
    borderRadius: 20,
    overflow: 'hidden',
  },
})
