import { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { GoogleSignin } from '@react-native-google-signin/google-signin';  // Importar Google Sign-In
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';  // Importar Firebase Google Auth

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
  });

  async function realizaLogin() {
    console.log("Fazer Login");

    if (email === "") {
      setErro({ ...erro, email: true });
      return;
    }
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário logado", user);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  }

  // Função para login com Google
  async function signInWithGoogle() {
    try {
      // Verificar se os serviços do Google Play estão disponíveis
      await GoogleSignin.hasPlayServices();
      // Fazer o login com o Google
      const { idToken } = await GoogleSignin.signIn();
      // Criar a credencial do Firebase usando o token do Google
      const googleCredential = GoogleAuthProvider.credential(idToken);
      // Fazer o login no Firebase com as credenciais do Google
      await signInWithCredential(auth, googleCredential);
      Alert.alert('Login bem-sucedido!', 'Você está logado com sua conta Google.');
      navigation.navigate("HomeScreen");  // Navegar para a HomeScreen após login bem-sucedido
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      Alert.alert('Erro ao fazer login com Google', error.message);
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.Containerlogo}>
        {/* Utilizar uma imagem no Expo ou uma alternativa apropriada */}
        <div>
          <img
            src="assets/logo1.png"
            style={{ textAlign: "center" }}
            width={"100%"}
          />
        </div>
      </View>

      <View style={styles.ContainerForm}>
        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 20 }}>
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
          <Button onPress={realizaLogin} mode="contained" style={{ backgroundColor: "#a547bf" }}>
            Fazer Login
          </Button>
        </View>

        {/* Botão de Login com Google */}
        <Button
          onPress={signInWithGoogle}
          mode="contained"
          style={{ backgroundColor: "#4285F4", marginTop: 20 }}
        >
          Fazer Login com Google
        </Button>

        <Button
          onPress={() => navigation.navigate("RegisterScreen")}
          style={{ color: "#a547bf", marginTop: 20 }}
        >
          Faça seu cadastro
        </Button>
      </View>
    </Surface>
  );
}
