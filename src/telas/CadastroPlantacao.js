import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function CadastroPlantacao({ navigation }) {
  // State para os campos do formulário
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [dataPlantio, setDataPlantio] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const isFormValid = () => {
    return nome && tipo && dataPlantio && quantidade && localizacao;
  };

  const handleSave = () => {
    if (isFormValid()) {
      Alert.alert("Sucesso", "Plantio cadastrado com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Preencha todos os campos antes de salvar!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Cadastro de Plantio</Text>

      {/* Imagem de Plantação */}
      <Image
        source={require("../../assets/plantacao2.jpg")} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Campo Nome da Plantação */}
      <View style={styles.inputGroup}>
        <Ionicons name="leaf" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome da Plantação"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* Campo Tipo de Cultura */}
      <View style={styles.inputGroup}>
        <FontAwesome5 name="seedling" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tipo de Cultura (ex: Milho, Soja)"
          placeholderTextColor="#aaa"
          value={tipo}
          onChangeText={setTipo}
        />
      </View>

      {/* Campo Data de Plantio */}
      <View style={styles.inputGroup}>
        <Ionicons name="calendar" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data de Plantio (dd/mm/aaaa)"
          placeholderTextColor="#aaa"
          value={dataPlantio}
          onChangeText={setDataPlantio}
          keyboardType="numeric"
        />
      </View>

      {/* Campo Quantidade de Plantas */}
      <View style={styles.inputGroup}>
        <Ionicons name="stats-chart" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Quantidade de Plantas"
          placeholderTextColor="#aaa"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      {/* Campo Localização */}
      <View style={styles.inputGroup}>
        <Ionicons name="location" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Localização do Plantio"
          placeholderTextColor="#aaa"
          value={localizacao}
          onChangeText={setLocalizacao}
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