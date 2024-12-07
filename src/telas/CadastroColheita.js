import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CadastroColheita({ navigation }) {
  const [nomeColheita, setNomeColheita] = useState("");
  const [dataColheita, setDataColheita] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCadastro = () => {
    if (!nomeColheita || !dataColheita || !quantidade) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    Alert.alert("Sucesso", "Colheita cadastrada com sucesso!");
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Cadastro de Colheita</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="leaf" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome da Colheita"
          value={nomeColheita}
          onChangeText={setNomeColheita}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="calendar" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data da Colheita (DD/MM/AAAA)"
          value={dataColheita}
          onChangeText={setDataColheita}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="stats-chart" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Quantidade (kg)"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="clipboard" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Descrição (opcional)"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar Colheita</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#E8F5E9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
