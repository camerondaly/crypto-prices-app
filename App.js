import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import axios from 'axios';
import AssetRow from './AssetRow.js';
import Header from './Header.js';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { RefreshControl } from 'react-native';

export default function App() {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  function APIGet() {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setAssets(res.data);
    }).catch(error => alert('Error occurred fetching data from coingecko API.'));
  } [];

  useEffect(() => {
    APIGet()
  })

  const onRefresh = React.useCallback(() => {
    APIGet()
  })
  /*
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setAssets(res.data);
    }).catch(error => alert('Error occurred fetching data from coingecko API.'));
  }, []);
  */

  const handleChange = (text) => {
    setSearch(text)
  }

  const filteredAssets = assets.filter(asset => 
    asset.name.toLowerCase().includes(search.toString().toLowerCase())
  )

  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true}/>
      <Header/>
      <ScrollView
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <TextInput 
          type="text"
          style={styles.searchbar}
          placeholder="Search:"
          placeholderTextColor='#b3b3b3'
          color='#e4e6eb'
          textAlign="center"
          value={search}
          onChangeText={text => handleChange(text)}
          clearButtonMode='while-editing'
          keyboardAppearance='dark'
          >
        </TextInput>
        {filteredAssets.map(asset => {
          return (
            <AssetRow
            key={asset.id}
            name={asset.name}
            image={asset.image}
            symbol={asset.symbol}
            price={asset.current_price}
            priceChange={asset.price_change_percentage_24h}
            />
          )
        })}
      </ScrollView>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242526',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchbar: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    fontSize: 18,
    backgroundColor: '#3a3b3c',
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
  }
});
