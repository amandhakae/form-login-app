import { useState } from "react";
import { View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
  });

  function realizaLogin() {
    console.log("Fazer Login");
    if (email === "") {
      setErro({ ...erro, email: true });
    } else {
      setErro({ ...erro, email: false });
    }
    if (senha === "") {
      setErro({ ...erro, senha: true });
    } else {
      setErro({ ...erro, senha: false });
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.Containerlogo}>
      <div><br></br><br></br><br></br>
      <img src="assets/logo.png" style={{
            textAlign: "center"
          }}width={110}
             height={75}></img>
     </div>
     </View>
       
       <View style={styles.ContainerForm}>
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        ><br></br>
          Login
        </Text>
        <TextInput
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          error={erro.email}
        />
        <TextInput
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry 
          style={styles.input}
          error={erro.senha}
        />
        <View>
          <Button onPress={realizaLogin} mode="contained" style={{backgroundColor:"#a547bf"}}>
            Fazer Login
          </Button>
        </View>
        <Button onPress={() => navigation.navigate("RegisterScreen")} style={{color:(165, 71, 191)}}>
          Faça seu cadastro
        </Button>
        </View>
      
    </Surface>
    
  );
}
