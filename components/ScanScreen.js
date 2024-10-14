import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Scanned Product */}
      <View style={styles.scanContainer}>
        <View style={styles.overlay}>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6vCjQW2YEwPaTgstYIINiwcVL1byYe8HHe~EGDkEkwgA-RyVbPrCV5YBbo478xW4k0vhxi3r-kqVqBQQ4-8No-S3Kn47kl8nzRN9tknHoNZQEtGkIz5nOn-Z9SfEEg5yF4Fh96JX-wjkSkIxRlVUR8xDZ3VHm7tZ62II045EQ30Ophj9MiLX8Zt0ZouOzyl8XPqbSnesDynLbfp6JNUUEyrhXj7QmJwcwe-QziYUO70EmqFgP64Gm8NOXVOw3X5vP16~iig8Tnly12Oz~X~snhQlwTjrWKZzOl8KOgvWlu01R3GxnnZE-nEzuz8tLwGovA2EVAEjUQJFtOfrvDNdQ__' }} // Juice Bottle Image URL
            style={styles.productImage}
          />
        </View>
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6vCjQW2YEwPaTgstYIINiwcVL1byYe8HHe~EGDkEkwgA-RyVbPrCV5YBbo478xW4k0vhxi3r-kqVqBQQ4-8No-S3Kn47kl8nzRN9tknHoNZQEtGkIz5nOn-Z9SfEEg5yF4Fh96JX-wjkSkIxRlVUR8xDZ3VHm7tZ62II045EQ30Ophj9MiLX8Zt0ZouOzyl8XPqbSnesDynLbfp6JNUUEyrhXj7QmJwcwe-QziYUO70EmqFgP64Gm8NOXVOw3X5vP16~iig8Tnly12Oz~X~snhQlwTjrWKZzOl8KOgvWlu01R3GxnnZE-nEzuz8tLwGovA2EVAEjUQJFtOfrvDNdQ__' }} // Thumbnail image
          style={styles.thumbnail}
        />
        <View style={styles.productText}>
          <Text style={styles.owner}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 10,
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  productText: {
    flex: 1,
    marginLeft: 15,
  },
  owner: {
    fontSize: 14,
    color: '#999',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#5C89F7',
    padding: 10,
    borderRadius: 10,
  },
});
