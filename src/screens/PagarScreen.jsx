import React, { useState, useEffect } from 'react';
import { Surface, Text, Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaymentScreen({ navigation }) {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentDescription, setPaymentDescription] = useState('');
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [balance, setBalance] = useState(0); // Inicialmente 0, será carregado do AsyncStorage

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem('balance');
        if (storedBalance !== null) {
          setBalance(parseFloat(storedBalance));
        } else {
          setBalance(1356.00); // Saldo inicial padrão
        }
      } catch (error) {
        console.error('Erro ao carregar o saldo:', error);
      }
    };

    loadBalance();
  }, []);

  const handlePayment = async () => {
    const amountValue = parseFloat(paymentAmount);
    if (!isNaN(amountValue) && amountValue > 0 && amountValue <= balance && paymentDescription) {
      try {
        const newBalance = balance - amountValue;
        await AsyncStorage.setItem('balance', newBalance.toFixed(2));
        setBalance(newBalance);
        setTransactionStatus('Pagamento realizado com sucesso!');
        setPaymentAmount('');
        setPaymentDescription('');
      } catch (error) {
        setTransactionStatus('Erro ao atualizar o saldo.');
        console.error('Erro ao salvar o saldo:', error);
      }
    } else {
      setTransactionStatus('Erro: Verifique os dados inseridos ou saldo insuficiente.');
    }
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Realizar Pagamento</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Descrição do Pagamento"
          mode="outlined"
          value={paymentDescription}
          onChangeText={setPaymentDescription}
          style={styles.input}
        />
        <TextInput
          label="Valor"
          mode="outlined"
          keyboardType="numeric"
          value={paymentAmount}
          onChangeText={setPaymentAmount}
          style={styles.input}
        />
        <Button mode="contained" onPress={handlePayment} style={styles.button}>
          Pagar
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
        <Button mode="contained" onPress={() => navigation.goBack()}>
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
    backgroundColor: '#5e2c80',
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
},
});