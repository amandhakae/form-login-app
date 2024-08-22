import React, { createContext, useState, useContext } from 'react';

const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [balance, setBalance] = useState(1356.00); // Saldo inicial
  const [creditCardBalance, setCreditCardBalance] = useState(1094.80); // Fatura do cartão
  const [creditCardLimit, setCreditCardLimit] = useState(730.00); // Limite do cartão

  return (
    <BankContext.Provider value={{ balance, setBalance, creditCardBalance, setCreditCardBalance, creditCardLimit, setCreditCardLimit }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => useContext(BankContext);
