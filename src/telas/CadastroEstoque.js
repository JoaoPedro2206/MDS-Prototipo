import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function CadastroEstoque({ navigation }) {
  // State para os campos do formulário
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAdicao, setDataAdicao] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const isFormValid = () => {
    return produto && quantidade && categoria && dataAdicao;
  };

  const handleSave = () => {
    if (isFormValid()) {
      Alert.alert("Sucesso", "Estoque cadastrado com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Preencha todos os campos antes de salvar!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Cadastro de Estoque</Text>

      {/* Imagem */}
      <Image
        source={require("../../assets/estoque.jpg")} // Substitua pelo caminho correto
        style={styles.image}
        resizeMode="cover"
      />

      {/* Campo Nome do Produto */}
      <View style={styles.inputGroup}>
        <Ionicons name="cube" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          placeholderTextColor="#aaa"
          value={produto}
          onChangeText={setProduto}
        />
      </View>

      {/* Campo Quantidade */}
      <View style={styles.inputGroup}>
        <Ionicons name="stats-chart" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#aaa"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      {/* Campo Categoria */}
      <View style={styles.inputGroup}>
        <Ionicons name="list" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          placeholderTextColor="#aaa"
          value={categoria}
          onChangeText={setCategoria}
        />
      </View>

      {/* Campo Data de Adição */}
      <View style={styles.inputGroup}>
        <Ionicons name="calendar" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data de Adição (DD/MM/AAAA)"
          placeholderTextColor="#aaa"
          value={dataAdicao}
          onChangeText={setDataAdicao}
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
