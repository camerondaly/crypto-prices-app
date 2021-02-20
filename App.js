import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import AssetRow from './AssetRow.js';
import { SearchBar } from 'react-native-elements';

export default function App() {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setAssets(res.data);
    }).catch(error => alert('Error occurred fetching data from coingecko API.'));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredAssets = assets.filter(asset => 
    asset.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <SearchBar 
        placeholder="Search:"
        onChangeText={handleChange}
        >
        <Text>
          Crypto Prices
        </Text>
      </SearchBar>
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
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
