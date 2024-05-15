import { Image } from "expo-image";
import { useEffect } from "react";
import { View } from "react-native";
import { Button, Text, Surface } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate("LoginScreen")
    }, 1000)

  }, [])

  return (


    <Surface style={styles.container}>
      <View style={styles.innerContainer} >
        <Image


          source={require("./../../assets/logo.png")}
          style={{ width: 150, height: 100 }}
        />
      </View>

    </Surface >
  );
}
