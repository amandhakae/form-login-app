import React from "react";
import { Surface, Text, Button } from "react-native-paper";
import { View, StyleSheet, Image, ScrollView } from "react-native";

// Função para obter as imagens adicionais com base no evento
const getAdditionalImages = (eventId) => {
  switch (eventId) {
    case '1':
      return [
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
      ];
    case '2':
      return [
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
      ];
    // Adicione mais casos conforme necessário
    default:
      return [
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
        require('../../assets/img/diad.png'),
      ];
  }
};

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;
  const additionalImages = getAdditionalImages(event.id); // Assumindo que o ID do evento está sendo passado corretamente

  return (
    <Surface style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: event.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.subtitle}>{event.subtitle}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.moreInfo}>{event.moreInfo}</Text> {/* Exibir mais informações */}
      </View>
      <ScrollView>
        <View style={styles.photosContainer}>
          <View style={styles.topRow}>
            {additionalImages.slice(0, 2).map((image, index) => (
              <Image
                key={index}
                source={image}
                style={styles.topImage}
              />
            ))}
          </View>
          <View style={styles.bottomRow}>
            {additionalImages.slice(2, 4).map((image, index) => (
              <Image
                key={index}
                source={image}
                style={styles.bottomImage}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Button
        onPress={() => navigation.goBack()}
        mode="contained"
        style={styles.button}
      >
        Voltar
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  moreInfo: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  photosContainer: {
    marginTop: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topImage: {
    width: '48%',
    height: 100,
    borderRadius: 8,
  },
  bottomImage: {
    width: '48%',
    height: 100,
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    borderRadius: 30,
    backgroundColor: '#6200EE',
    paddingVertical: 10,
  },
});
