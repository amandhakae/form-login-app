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
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
    repetirSenha: false,
    nome: false,
    cep: false,
    cidade: false,
    estado: false,
  });
  
  function realizaRegistro() {
    console.log("Fazer Registro");

    if (nome === "") {
      setErro({ ...erro, nome: true });
      return;
    }
    setErro({ ...erro, nome: false });
    if (email === "") {
      setErro({ ...erro, email: true });
      return;
    }
    setErro({ ...erro, email: false });
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return;
    }
    setErro({ ...erro, senha: false });
    if (repetirSenha === "") {
      setErro({ ...erro, repetirSenha: true });
      return;
    }
    setErro({ ...erro, repetirSenha: false });
    if (cep === "") {
      setErro({ ...erro, cep: true });
      return;
    }
    setErro({ ...erro, cep: false });
    if (cidade === "") {
      setErro({ ...erro, cidade: true });
      return;
    }
    setErro({ ...erro, cidade: false });
    if (estado === "") {
      setErro({ ...erro, estado: true });
      return;
    }
    setErro({ ...erro, estado: false });

    if (senha !== repetirSenha) {
      setErro({ ...erro, senha: true, repetirSenha: true });
      return;
    }
    setErro({ ...erro, senha: false, repetirSenha: false });
   cadastrarNoFirebase();
  }

    async function cadastrarNoFirebase(){
      try{
          const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
          const user = userCredential.user;
          console.log("Usuário cadastrado", user)
        } catch (error) {
          console.log(error);
      }
    }

  function buscaCEP() {
    console.log("Busca CEP");
    let cepLimpo = cep.replace("-", "").trim();
    if (cepLimpo.length < 8) return;
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json()) 
      .then((dados) => {
        console.log(dados);
        setLogradouro(dados.logradouro);
        setCidade(dados.localidade);
        setEstado(dados.uf);
      })
      .catch((erro) => {
        console.error(erro);
        setErro("CEP não encontrado");
      });
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineSmall">Faça seu Registro</Text>
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
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Text variant="headlineSmall">Dados pessoais</Text>
          <TextInput
            placeholder="Digite seu CEP"
            value={cep}
            onChangeText={setCep}
            onBlur={buscaCEP} 
            keyboardType="numeric" 
            style={styles.input}
            maxLength={8} 
            error={erro.cep}
          />
          <TextInput
            placeholder="Logradouro"
            value={logradouro}
            onChangeText={setLogradouro}
            style={styles.input}
            error={erro.logradouro}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Cidade"
              value={cidade}
              onChangeText={setCidade}
              style={{
                ...styles.input, 
                width: "70%",
              }}
              error={erro.cidade}
            />
            <TextInput
              placeholder="Estado"
              value={estado}
              onChangeText={setEstado}
              style={{
                ...styles.input,
                width: "30%",
              }}
              maxLength={2} 
              error={erro.estado}
            />
          </View>
        </View>
        <Button onPress={realizaRegistro} mode="outlined">
          Registrar
        </Button>
        <Button onPress={() => navigation.navigate("LoginScreen")}>
          Voltar ao login
        </Button>
      </View>
    </Surface>
  );
}
