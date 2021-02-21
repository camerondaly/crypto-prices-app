import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return(
    <View style={styles.container}>
      <LinearGradient
        colors={['#42275a', '#734b6d']}
        start={{ x: 0, y: 1 }}
        style={styles.headertext}
      >
        <Text style={styles.headertext}>
          Crypto Prices
        </Text>
      </LinearGradient>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 69,
  },
  headertext: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    color: '#e4e6eb',
  },
})
