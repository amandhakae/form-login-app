import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 1000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Surface style={styles.container}>
      <View style={styles.header}>
        <Button
          onPress={() => navigation.navigate("PerfilScreen")}
          mode="contained"
          style={styles.profileButton}
        >
          <MaterialCommunityIcons name="account" size={24} color="#a547bf" />
        </Button>
      </View>

      <View style={styles.innerContainer}>
        {/* Espaço centralizado para conteúdo adicional */}
      </View>
      
      <View style={styles.footer}>
        <Button
          onPress={() => navigation.navigate("EventsScreen")}
          mode="contained"
          style={styles.button}
        >
          <MaterialCommunityIcons name="calendar" size={24} color="#a547bf" />
        </Button>

        <Button
          onPress={() => navigation.navigate("AppScreen")}
          mode="contained"
          style={styles.button}
        >
          <MaterialCommunityIcons name="apps" size={24} color="#a547bf" />
        </Button>

        <Button
          onPress={() => navigation.navigate("BankScreen")}
          mode="contained"
          style={styles.button}
        >
          <MaterialCommunityIcons name="bank" size={24} color="#a547bf" />
        </Button>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Fundo cinza claro
  },
  header: {
    position: 'absolute',
    top: 10, // Posição do botão na parte superior da tela
    right: 10, // Alinhado à direita
    zIndex: 1, // Certifique-se de que o botão fique acima de outros componentes
  },
  profileButton: {
    backgroundColor: '#ffffff', // Fundo branco para o botão do perfil
    borderRadius: 50, // Botão circular
    padding: 10, // Espaçamento interno
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: '#ffffff', // Fundo branco para o rodapé
    borderTopWidth: 1,
    borderTopColor: '#cccccc', // Cor da borda superior cinza claro
  },
  button: {
    borderRadius: 8, // Cantos arredondados
    backgroundColor: '#ffffff', // Fundo branco para os botões
    flex: 1,
    marginHorizontal: 5, // Espaçamento entre os botões
  },
});
