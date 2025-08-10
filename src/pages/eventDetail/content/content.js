import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from '../home.style';
import homeService from '../home.service';

const ProductDetailContent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    homeService.getProductsData()
      .then(setProducts)
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search products..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={[styles.searchInput]}
        />

        <FontAwesomeIcon icon={faSearch} size={16} style={styles.searchIcon} />        
        
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={() => setSearchTerm('')} style={ styles.clearInput }>
            <FontAwesomeIcon icon={faTimes} size={16} />
          </TouchableOpacity>
        )}
      </View>

      {filteredProducts.length === 0 ? (
        <View style={ styles.noProductContainer }>
          <Text style={ styles.noProductText }>Product not found</Text>
        </View>
      ) : (
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
      )}
    </View>
  );
};

export default ProductDetailContent;