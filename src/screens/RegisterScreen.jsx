import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [repetirsenha, setRepetirSenha] = useState("");


  function realizaCadastro() {
    console.log("Fazer Cadastro");
  }
  
  return (
    <View>
      <Text>Faça seu Cadastro</Text>
      <TextInput
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite sua senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry 
      />
      <TextInput
        placeholder="Confira sua senha"
        onChangeText={setRepetirSenha}
        value={repetirsenha}
        secureTextEntry 
      />
      <View style={{
            paddingVertical: 20,
          }}>
        <Text>Dados pessoais</Text>
      
      <TextInput
        placeholder="Logradouro"
        onChangeText={setLogradouro}
        value={logradouro} 
      />
      <TextInput
        placeholder="CEP"
        onChangeText={setCep}
        value={cep} 
      />
      <TextInput
        placeholder="Cidade"
        onChangeText={setCidade}
        value={cidade} 
      />
      <TextInput
        placeholder="Estado"
        onChangeText={setEstado}
        value={estado} 
      />
      </View>
      <Button onPress={realizaCadastro}>Cadastrar</Button>
      <Button onPress={() => navigation.navigate("LoginScreen")}>
        Faça seu Login
      </Button>
    </View>
  );
}
