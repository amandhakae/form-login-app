import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface, Button } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {
  return (
    <Surface style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Configurações</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Aqui você pode configurar suas preferências.</Text>
        {/* Adicione outros elementos e configurações aqui */}
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#a547bf',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 20,
  },
});
