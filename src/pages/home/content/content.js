import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from '../home.style';
import homeService from '../home.service';

const HomeContent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    homeService.getProductsData()
      .then(setProducts)
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  // Filter produk berdasarkan searchTerm
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search products..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.searchInput}
        />
        <FontAwesomeIcon icon={faSearch} size={16} color="#4b5563ff" style={styles.searchIcon} />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.gridColumn}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          >
            <View style={styles.productImageWrapper}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
            </View>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeContent;