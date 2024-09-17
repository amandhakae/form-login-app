// RegisterScreen.js
import { View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [nome, setNome] = useState("");
  const [escola, setEscola] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
    repetirSenha: false,
    nome: false,
    escola: false,
  });

  async function realizaRegistro() {
    console.log("Fazer Registro");

    // Validação dos campos
    if (nome === "") {
      setErro({ ...erro, nome: true });
      return;
    }
    if (email === "") {
      setErro({ ...erro, email: true });
      return;
    }
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return;
    }
    if (repetirSenha === "") {
      setErro({ ...erro, repetirSenha: true });
      return;
    }
    if (senha !== repetirSenha) {
      setErro({ ...erro, senha: true, repetirSenha: true });
      return;
    }
    if (escola === "") {
      setErro({ ...erro, escola: true });
      return;
    }

    // Limpa os erros antes de tentar registrar
    setErro({
      email: false,
      senha: false,
      repetirSenha: false,
      nome: false,
      escola: false,
    });

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário cadastrado", user);

      // Navegar para a tela principal ou para outra tela após o registro
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Erro ao registrar:", error.message);
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.ContainerForm1}>
          <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 20 }}>
            Faça seu Registro
          </Text>

          <TextInput
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            error={erro.nome}
          />

          <TextInput
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            error={erro.email}
          />
          <TextInput
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
            error={erro.senha}
          />
          <TextInput
            placeholder="Repita sua senha"
            value={repetirSenha}
            onChangeText={setRepetirSenha}
            secureTextEntry
            style={styles.input}
            error={erro.repetirSenha}
          />
          <TextInput
            placeholder="Digite sua Escola"
            value={escola}
            onChangeText={setEscola}
            style={styles.input}
            error={erro.escola}
          />

          <Button onPress={realizaRegistro} style={{ backgroundColor: "#a547bf" }} mode="outlined">
            Registrar
          </Button>
          <Button onPress={() => navigation.navigate("LoginScreen")}>
            Voltar ao login
          </Button>
        </View>
      </View>
    </Surface>
  );
}
