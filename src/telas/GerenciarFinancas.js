import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function GerenciarFinancas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TELA GERENCIAR FINANCAS</Text>
      <Button
        title="Voltar para a Tela Inicial"
        onPress={() => navigation.goBack()} // Volta para a tela anterior
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
