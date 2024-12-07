import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function VizualizarEstoque({ navigation }) {
  const itensEstoque = [
    {
      id: 1,
      nome: "Adubo Orgânico",
      quantidade: "200 kg",
      descricao: "Adubo para crescimento das plantas",
      dataAdicao: "01/12/2024",
      categoria: "Fertilizante",
    },
    {
      id: 2,
      nome: "Sementes de Milho",
      quantidade: "50 sacos",
      descricao: "Sementes para plantio em grande escala",
      dataAdicao: "25/11/2024",
      categoria: "Sementes",
    },
    {
      id: 3,
      nome: "Herbicida XYZ",
      quantidade: "20 litros",
      descricao: "Controle de ervas daninhas",
      dataAdicao: "20/11/2024",
      categoria: "Herbicida",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Estoque</Text>

      {itensEstoque.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
            <Text style={styles.itemText}>Descrição: {item.descricao}</Text>
            <Text style={styles.itemText}>Data de Adição: {item.dataAdicao}</Text>
            <Text style={styles.itemText}>Categoria: {item.categoria}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditarItem", { id: item.id })}
          >
            <Ionicons name="create" size={20} color="#fff" />
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        style={styles.addItemButton}
        onPress={() => navigation.navigate("AdicionarItem")}
      >
        <Ionicons name="add" size={24} color="#fff" />
        <Text style={styles.addItemButtonText}>Adicionar Novo Item</Text>
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
  itemCard: {
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
  itemInfo: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  addItemButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  addItemButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
