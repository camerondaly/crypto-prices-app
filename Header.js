import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return(
    <View style={styles.container}>
      <LinearGradient
        colors={['#00245B', '#00194A', '#000E39']}
        style={styles.headertext}
      >
        <Text style={styles.headertext}>
          Live Crypto Prices
        </Text>
      </LinearGradient>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomEndRadius: 90,
    overflow: 'hidden',
    height: 70,
  },
  headertext: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    color: '#fff',
  },
})
