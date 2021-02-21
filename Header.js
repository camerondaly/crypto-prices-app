import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return(
    <View style={styles.container}>
      <LinearGradient
        colors={['#4568dc', '#b06ab3']}
        location={[0, 1]}
        start={[0.1, 0.2]}
        end={[1.0, 0.2]}
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
    overflow: 'hidden',
  },
  headertext: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    color: '#e4e6eb',
  },
})
