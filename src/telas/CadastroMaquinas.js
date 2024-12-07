import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function CadastroMaquinas({ navigation }) {
  // State para os campos do formulário
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [ano, setAno] = useState("");
  const [gastoMensal, setGastoMensal] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const isFormValid = () => {
    return nome && tipo && fabricante && ano && gastoMensal;
  };

  const handleSave = () => {
    if (isFormValid()) {
      Alert.alert("Sucesso", "Máquina cadastrada com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Preencha todos os campos antes de salvar!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Cadastro de Máquinas</Text>

      {/* Imagem de Máquina */}
      <Image
        source={require("../../assets/maquinas.jpg")} // Substitua pelo caminho correto para sua imagem
        style={styles.image}
        resizeMode="cover"
      />

      {/* Campo Nome da Máquina */}
      <View style={styles.inputGroup}>
        <Ionicons name="construct" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome da Máquina"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* Campo Tipo */}
      <View style={styles.inputGroup}>
        <FontAwesome5 name="tractor" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tipo de Máquina (ex: Trator, Colheitadeira)"
          placeholderTextColor="#aaa"
          value={tipo}
          onChangeText={setTipo}
        />
      </View>

      {/* Campo Fabricante */}
      <View style={styles.inputGroup}>
        <Ionicons name="business" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Fabricante"
          placeholderTextColor="#aaa"
          value={fabricante}
          onChangeText={setFabricante}
        />
      </View>

      {/* Campo Ano de Fabricação */}
      <View style={styles.inputGroup}>
        <Ionicons name="calendar" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Ano de Fabricação"
          placeholderTextColor="#aaa"
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
        />
      </View>

      {/* Campo Gasto Mensal */}
      <View style={styles.inputGroup}>
        <Ionicons name="cash" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Gasto Mensal (em R$)"
          placeholderTextColor="#aaa"
          value={gastoMensal}
          onChangeText={setGastoMensal}
          keyboardType="numeric"
        />
      </View>

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        {/* Botão Salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>

        {/* Botão Cancelar */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F1F8E9",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FF5252",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});