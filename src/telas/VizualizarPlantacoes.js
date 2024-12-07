import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function VizualizarPlantacoes({ navigation }) {
  const plantacoes = [
    {
      id: 1,
      nome: "Plantação de Milho",
      cultura: "Milho",
      dataPlantio: "01/10/2024",
      quantidadePlantas: "20000 plantas",
    },
    {
      id: 2,
      nome: "Plantação de Soja",
      cultura: "Soja",
      dataPlantio: "15/09/2024",
      quantidadePlantas: "15000 plantas",
    },
    {
      id: 3,
      nome: "Plantação de Café",
      cultura: "Café",
      dataPlantio: "20/08/2024",
      quantidadePlantas: "5000 plantas",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Resumo das Plantações</Text>

      {plantacoes.map((plantacao) => (
        <View key={plantacao.id} style={styles.plantacaoCard}>
          <View style={styles.plantacaoInfo}>
            <Text style={styles.plantacaoTitle}>{plantacao.nome}</Text>
            <Text style={styles.plantacaoText}>Cultura: {plantacao.cultura}</Text>
            <Text style={styles.plantacaoText}>Data de Plantio: {plantacao.dataPlantio}</Text>
            <Text style={styles.plantacaoText}>Quantidade: {plantacao.quantidadePlantas}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("EditarPlantacao", { id: plantacao.id })}
            >
              <Ionicons name="create" size={20} color="#fff" />
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("RelatoriosPlantacao", { id: plantacao.id })}
            >
              <FontAwesome5 name="file-alt" size={20} color="#fff" />
              <Text style={styles.buttonText}>Relatório</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AdicionarInsumos", { id: plantacao.id })}
            >
              <FontAwesome5 name="plus" size={20} color="#fff" />
              <Text style={styles.buttonText}>Adicionar Insumos</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.addPlantacaoButton}
        onPress={() => navigation.navigate("CadastroPlantacao")}
      >
        <Ionicons name="add" size={20} color="#fff" />
        <Text style={styles.addPlantacaoButtonText}>Cadastrar Nova Plantação</Text>
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
  plantacaoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: "#4CAF50",
  },
  plantacaoInfo: {
    marginBottom: 15,
  },
  plantacaoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  plantacaoText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  addPlantacaoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  addPlantacaoButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
