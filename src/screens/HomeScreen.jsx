import { Button, Text, Surface } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
  return (
    
     <Surface style={styles.container}>
      <pre>
      <Text>Bem vinda(o) ao nosso app</Text>
      </pre>
      
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
      >
        Login
      </Button>
      </Surface>
  );
}
