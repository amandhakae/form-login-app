import React, { useState, useEffect } from 'react';
import { Surface, Text, Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PixScreen({ navigation }) {
  const [pixAmount, setPixAmount] = useState('');
  const [pixType, setPixType] = useState('send'); 
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [balance, setBalance] = useState(0); 

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem('balance');
        if (storedBalance !== null) {
          setBalance(parseFloat(storedBalance));
        } else {
          setBalance(1356.00); 
        }
      } catch (error) {
        console.error('Erro ao carregar o saldo:', error);
      }
    };

    loadBalance();
  }, []);

  const handlePixTransaction = async () => {
    const amountValue = parseFloat(pixAmount);
    if (!isNaN(amountValue) && amountValue > 0) {
      try {
        let newBalance;
        if (pixType === 'send') {
          if (amountValue <= balance) {
            newBalance = balance - amountValue;
            setTransactionStatus('Pix enviado com sucesso!');
          } else {
            setTransactionStatus('Erro: Saldo insuficiente para enviar.');
            return;
          }
        } else if (pixType === 'receive') {
          newBalance = balance + amountValue;
          setTransactionStatus('Pix recebido com sucesso!');
        }

        await AsyncStorage.setItem('balance', newBalance.toFixed(2));
        setBalance(newBalance);
        setPixAmount('');
      } catch (error) {
        setTransactionStatus('Erro ao atualizar o saldo.');
        console.error('Erro ao salvar o saldo:', error);
      }
    } else {
      setTransactionStatus('Erro: Verifique o valor inserido.');
    }
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pix</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Valor"
          mode="outlined"
          keyboardType="numeric"
          value={pixAmount}
          onChangeText={setPixAmount}
          style={styles.input}
        />
        <View style={styles.radioGroup}>
          <Button
            mode={pixType === 'send' ? 'contained' : 'outlined'}
            onPress={() => setPixType('send')}
            style={[styles.radioButton, pixType === 'send' && styles.radioButtonActive]}
            color={pixType === 'send' ? '#fff' : '#a547bf'} 
          >
            Enviar
          </Button>
          <Button
            mode={pixType === 'receive' ? 'contained' : 'outlined'}
            onPress={() => setPixType('receive')}
            style={[styles.radioButton, styles.radioButtonReceive, pixType === 'receive' && styles.radioButtonActive]}
            color={pixType === 'receive' ? '#fff' : '#a547bf'} 
            contentStyle={styles.buttonContent} 
          >
            Receber
          </Button>
        </View>
        <Button
          mode="contained"
          onPress={handlePixTransaction}
          style={styles.button}
          color="#fff" // Cor do texto do botão
        >
          {pixType === 'send' ? 'Enviar Pix' : 'Receber Pix'}
        </Button>
        {transactionStatus && (
          <Text style={styles.status}>{transactionStatus}</Text>
        )}
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Atual:</Text>
        <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
      </View>
      <View style={styles.bottomActions}>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={styles.bottomButton}
          color="#fff" // Cor do texto do botão
        >
          Voltar
        </Button>
      </View>
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
    backgroundColor: '#a547bf', // Cor do cabeçalho
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ajusta a distribuição dos botões
    marginBottom: 20,
  },
  radioButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5, // Adiciona borda arredondada
    height: 50, // Altura do botão
  },
  radioButtonActive: {
    backgroundColor: '#a547bf', // Cor de fundo do botão ativo
  },
  radioButtonReceive: {
    backgroundColor: '#a547bf',
    fontColor: '#fff'
    
  },
  button: {
    marginTop: 10,
    backgroundColor: '#a547bf', // Cor do botão
    height: 50, // Altura do botão
    borderRadius: 5, // Adiciona borda arredondada
  },
  buttonContent: {
    paddingVertical: 8, // Adiciona padding vertical aos botões
  },
  status: {
    marginTop: 20,
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#444',
    fontSize: 16,
    marginBottom: 5,
  },
  balanceAmount: {
    color: '#a547bf', // Cor do saldo
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomActions: {
    marginTop: 20,
    alignItems: 'center',
  },
  bottomButton: {
    backgroundColor: '#a547bf', // Cor do botão "Voltar"
  },
});
