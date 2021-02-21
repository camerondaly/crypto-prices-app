import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Text, View, StyleSheet, Image, Modal } from 'react-native';

const AssetRow = ({ name, image, symbol, price, marketCap, priceChange, volume }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <View>
        <Modal
          animationType='slide'
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
          transparent={true}
        >
          <Pressable 
            style={styles.modal}
            onPress={() => {
              setModalVisible(!modalVisible);
          }}>
            <View style={styles.left}>
              <Image style={styles.modalasseticon} source={{ uri: image}} />
              <Text style={styles.modalname}>{name.replace('Token', '')} - {symbol.toUpperCase()}</Text>
            </View>
            <View style={styles.modalcontent}>
              <Text style={styles.text}>Current Price: ${price.toLocaleString()}</Text>
              {priceChange < 0 ? (
                  <Text style={styles.redtext}>{priceChange.toFixed(2)}%</Text>
                ) : (
                  <Text style={styles.greentext}>{priceChange.toFixed(2)}%</Text>
                )
              }
            </View>
            <View>
              <Text style={styles.text}>Volume: ${volume.toLocaleString()}</Text>
            </View>
            <View>
              <Text style={styles.text}> Market Cap: ${marketCap.toLocaleString()}</Text>
            </View>
          </Pressable>
        </Modal>
        <Pressable 
          style={styles.container}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.left}>
            <Image style={styles.asseticon} source={{ uri: image}} />
            <Text style={styles.text}>{name.replace('Token', '')} - {symbol.toUpperCase()}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>${price.toLocaleString()}</Text>
            {priceChange < 0 ? (
                <Text style={styles.redtext}>{priceChange.toFixed(2)}%</Text>
              ) : (
                <Text style={styles.greentext}>{priceChange.toFixed(2)}%</Text>
              )
            }
          </View>
        </Pressable>
      </View>
    ) 
}

export default AssetRow

const styles = StyleSheet.create({
  modal: {
    height: 50,
    flex: 1,
    marginVertical: 200,
    marginHorizontal: 20,
    backgroundColor: '#242526',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 50
  },
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
  modalasseticon: {
    width: 120,
    height: 120,
  },
  modalname: {
    fontSize: 20,
    color: '#e4e6eb',
    padding: 10,
  },
  modalcontent:{
    flexDirection: 'row',
    fontSize: 20,
    color: '#e4e6eb',
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: '#e4e6eb',
  },
  redtext: {
    fontSize: 16,
    padding: 10,
    backgroundColor: 'rgb(255,80,0)',
    borderRadius: 20,
    overflow: 'hidden',
  },
  greentext: {
    fontSize: 16,
    padding: 10,
    backgroundColor: 'rgb(0,200,5)',
    borderRadius: 20,
    overflow: 'hidden',
  },
})
