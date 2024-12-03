import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function GerenciarFinancas({ navigation }) {
  // Dados fictícios
  const maquinas = 5; // Quantidade de máquinas
  const gastoMaquinas = 4500; // Gasto mensal estimado em R$

  const funcionarios = 10; // Quantidade de funcionários
  const gastoFuncionarios = 15000; // Gasto mensal estimado em R$

  const produtosEstoque = 20; // Quantidade de produtos no estoque
  const gastoEstoque = 8000; // Gasto mensal estimado com o estoque

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Gerenciar Finanças</Text>

      {/* Informações sobre Máquinas */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome5 name="tractor" size={24} color="#4CAF50" />
          <Text style={styles.cardTitle}>Máquinas</Text>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome5 name="edit" size={20} color="#fff" />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardText}>Quantidade: {maquinas}</Text>
        <Text style={styles.cardText}>Gasto Mensal: R${gastoMaquinas.toFixed(2)}</Text>
      </View>

      {/* Informações sobre Funcionários */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome5 name="users" size={24} color="#4CAF50" />
          <Text style={styles.cardTitle}>Funcionários</Text>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome5 name="edit" size={20} color="#fff" />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardText}>Quantidade: {funcionarios}</Text>
        <Text style={styles.cardText}>Gasto Mensal: R${gastoFuncionarios.toFixed(2)}</Text>
      </View>

      {/* Resumo do Estoque */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome5 name="warehouse" size={24} color="#4CAF50" />
          <Text style={styles.cardTitle}>Estoque</Text>
        </View>
        <Text style={styles.cardText}>Quantidade de Produtos: {produtosEstoque}</Text>
        <Text style={styles.cardText}>Gasto Mensal: R${gastoEstoque.toFixed(2)}</Text>
      </View>

      {/* Botões de Ação */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert("Cadastrar outro gasto!")}
        >
          <Ionicons name="add-circle" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Cadastrar Outro Gasto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Voltar</Text>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  cardText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
