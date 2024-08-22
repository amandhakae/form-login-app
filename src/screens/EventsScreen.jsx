import React from "react";
import { Surface, Text, Button, Card, IconButton } from "react-native-paper";
import { View, ScrollView, StyleSheet } from "react-native";
export default function EventsScreen({ navigation }) {
  const handleEventPress = (event) => {
    navigation.navigate('EventDetails', { event });
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Confira os eventos mais recentes</Text>
      </View>

      <ScrollView contentContainerStyle={styles.eventsContainer}>
        {events.map((event, index) => (
          <Card key={index} style={styles.eventCard} onPress={() => handleEventPress(event)}>
            <Card.Cover
              source={{ uri: event.image }}
              style={styles.cardImage}
            />
            <Card.Title
              title={event.title}
              subtitle={event.subtitle}
              left={(props) => (
                <IconButton
                  {...props}
                  icon={event.icon}
                  style={styles.cardIcon}
                />
              )}
              titleStyle={styles.cardTitle}
              subtitleStyle={styles.cardSubtitle}
            />
            <Card.Content>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventDescription}>
                {event.description}
              </Text>
            </Card.Content>
          </Card>
        ))}
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

const events = [
  {
    title: "Terceiras Intenções 2024",
    subtitle: "Luna Live, Joinville",
    image: "assets/img/image.png",
    date: "21 de junho de 2024",
    description: "O Terceiras Intenções já tem data marcada e como todo ano a atração nacional é sensacional, o melhor cantor e show da atualidade, Mc Livinho.",
    icon: "laptop",
  },
  {
    title: "Dia D Pijama Terceirão Bonja",
    subtitle: "Colégio Bonja - Bom Jesus, Joinville",
    image: "assets/img/diad.png",
    date: "22 de agosto de 2024",
    description: "Os alunos do Bonja passam por mais um dia D, nesse mês de agosto será o Dia D Pijama!!",
    icon: "guitar-electric",
  },
  {
    title: "Arraiá Senac",
    subtitle: "Faculdade Senac, Joinville",
    image: "assets/img/arraia.png",
    date: "12 de julho de 2024",
    description: "Vai ter festança boa demais no Senac! Prepare o seu chapéu de palha e venha se divertir na nossa Festa Julina.",
    icon: "leaf",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Cor de fundo suave
  },
  subtitleContainer: {
    paddingHorizontal: 16,
    marginVertical: 24, // Aumenta o espaço acima e abaixo do título
    backgroundColor: '#6200EE',
    borderRadius: 8,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  subtitle: {
    fontSize: 16, // Reduz o tamanho da fonte
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  eventsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 80, // Espaço adicional no final para o botão
  },
  eventCard: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 6, // Sombra mais destacada
    backgroundColor: '#FFFFFF', // Fundo do card branco
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  eventDate: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 16,
    color: '#333',
  },
  cardIcon: {
    alignSelf: 'center', // Centraliza o ícone no card
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    borderRadius: 30, // Botão arredondado
    backgroundColor: '#6200EE', // Cor de fundo do botão
    paddingVertical: 10,
  },
});
