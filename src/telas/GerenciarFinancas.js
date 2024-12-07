import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function GerenciarFinancas({ navigation }) {
  // Dados fictícios
  const maquinas = 5; // Quantidade de máquinas
  const gastoMaquinas = 4500; // Gasto mensal estimado em R$

  const funcionarios = 10; // Quantidade de funcionários
  const gastoFuncionarios = 15000; // Gasto mensal estimado em R$

  const insumos = 25; // Quantidade de insumos
  const gastoInsumos = 12000; // Gasto mensal estimado com insumos

  const faturamentoMensal = 30000; // Faturamento mensal estimado em R$
  const lucroMensal = faturamentoMensal - (gastoMaquinas + gastoFuncionarios + gastoInsumos); // Lucro mensal estimado

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
        <View style={styles.cardContent}>
          <FontAwesome5 name="cogs" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Quantidade: {maquinas}</Text>
        </View>
        <View style={styles.cardContent}>
          <FontAwesome5 name="dollar-sign" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Gasto Mensal: R${gastoMaquinas.toFixed(2)}</Text>
        </View>
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
        <View style={styles.cardContent}>
          <FontAwesome5 name="user-friends" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Quantidade: {funcionarios}</Text>
        </View>
        <View style={styles.cardContent}>
          <FontAwesome5 name="dollar-sign" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Gasto Mensal: R${gastoFuncionarios.toFixed(2)}</Text>
        </View>
      </View>

      {/* Informações sobre Gastos com Insumos */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome5 name="seedling" size={24} color="#4CAF50" />
          <Text style={styles.cardTitle}>Gastos com Insumos</Text>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome5 name="edit" size={20} color="#fff" />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContent}>
          <FontAwesome5 name="box" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Quantidade: {insumos}</Text>
        </View>
        <View style={styles.cardContent}>
          <FontAwesome5 name="dollar-sign" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Gasto Mensal: R${gastoInsumos.toFixed(2)}</Text>
        </View>
      </View>

      {/* Informações Financeiras Gerais */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome5 name="money-bill-wave" size={24} color="#4CAF50" />
          <Text style={styles.cardTitle}>Financeiro</Text>
        </View>
        <View style={styles.cardContent}>
          <FontAwesome5 name="hand-holding-usd" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Faturamento Mensal: R${faturamentoMensal.toFixed(2)}</Text>
        </View>
        <View style={styles.cardContent}>
          <FontAwesome5 name="piggy-bank" size={18} color="#4CAF50" />
          <Text style={styles.cardText}>Lucro Mensal: R${lucroMensal.toFixed(2)}</Text>
        </View>
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
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
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
