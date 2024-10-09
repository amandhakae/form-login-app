import React, { useEffect } from "react";
import { Provider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { GoogleSignin } from '@react-native-google-signin/google-signin';  // Importar Google Sign-In
import { auth } from './src/config/firebase';  // Importando a configuração Firebase

export default function App() {
  useEffect(() => {
    // Configurar o Google Sign-In com seu Web Client ID
    GoogleSignin.configure({
      webClientId: '279539927194-8rgkbb33ibmml3o1pgdrgt2822dv4kn3.apps.googleusercontent.com', // Substitua por seu webClientId, pegue do Firebase Console
    });
  }, []);

  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}
