import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/fundo3.jpg")} // Substitua pelo caminho correto
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
          {/* Cabeçalho */}
          <Text style={styles.header}>Bem-vindo ao Gerenciador Agrícola</Text>

          {/* Previsão do Tempo */}
          <View style={styles.weatherContainer}>
            <Ionicons name="cloud" size={40} color="#4CAF50" />
            <View style={styles.weatherDetails}>
              <Text style={styles.weatherText}>Previsão: Ensolarado</Text>
              <Text style={styles.weatherText}>Temperatura: 25°C</Text>
              <Text style={styles.weatherText}>Próxima chuva em: 2 dias</Text>
            </View>
          </View>

          {/* Resumo das Plantações e Lucro Total */}
          <View style={styles.summaryContainer}>
            <View style={styles.summaryItem}>
              <Ionicons name="leaf" size={30} color="#4CAF50" />
              <Text style={styles.summaryText}>10 Plantações</Text>
            </View>
            <View style={styles.summaryItem}>
              <Ionicons name="cash" size={30} color="#4CAF50" />
              <Text style={styles.summaryText} numberOfLines={2} ellipsizeMode="tail">
                Lucro: 
                R$15,000
              </Text>
            </View>
          </View>

          {/* Ações Rápidas */}
          <View style={styles.quickActionsContainer}>
            {/* Botao Cadastrar Plantio */}
            <TouchableOpacity 
              style={styles.quickActionButton}
              onPress = {() => navigation.navigate("CadastroPlantacao")}
            >
              <FontAwesome5 name="seedling" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Cadastrar Plantio</Text>
            {/* Botao Cadastrar Maquinas */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickActionButton}
              onPress = {() => navigation.navigate("CadastroMaquinas")}
            >
              <FontAwesome5 name="tractor" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Cadastrar Máquinas</Text>
            {/* Botao Cadastrar Funcionarios */}
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickActionButton}
              onPress = {() => navigation.navigate("CadastroFuncionarios")}
            >
              <FontAwesome5 name="users" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Cadastrar Funcionários</Text>
            </TouchableOpacity>
          </View>

        {/* Espaçamento entre os dois grupos de botões */}
        <View style={{ height: 20 }} /> 

        <View style={styles.quickActionsContainer}>
          {/* Botao Cadastrar Colheita */}  
          <TouchableOpacity 
            style={styles.quickActionButton}
            onPress = {() => navigation.navigate("CadastroColheita")}
          >
            <FontAwesome5 name="warehouse" size={24} color="#fff" />
            <Text style={styles.quickActionText}>Cadastrar Colheita</Text>
          </TouchableOpacity>
          {/* Botao Gerenciar Fincancas */}
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress = {() => navigation.navigate("GerenciarFinancas")}
          >
            <FontAwesome5 name="money-check-alt" size={24} color="#fff" />
            <Text style={styles.quickActionText}>Gerenciar Finanças</Text>
          </TouchableOpacity>
          {/* Botao Cadastrar Estoque */}
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress = {() => navigation.navigate("CadastroEstoque")}
          >
            <FontAwesome5 name="calendar-alt" size={24} color="#fff" />
            <Text style={styles.quickActionText}>Cadastrar Estoque</Text>
          </TouchableOpacity>
        </View>

        {/* Resumo das Plantações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo das Plantações</Text>
          {/* Botao Vizualizar Plantacoes */}
          <TouchableOpacity 
            style={styles.plantationButton}
            onPress = {() => navigation.navigate("VizualizarPlantacoes")}
          >
            <Ionicons name="leaf" size={30} color="#4CAF50" />
            <Text style={styles.plantationText}>Visualizar Plantações</Text>
          </TouchableOpacity>
        </View>

        {/* Estoque */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estoque</Text>
          {/* Botao Vizualizar Estoque */}
          <TouchableOpacity
            style={styles.stockButton}
            onPress = {() => navigation.navigate("VizualizarEstoque")}
          >
            <Text style={styles.stockButtonText}>Visualizar Estoque</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Cor sólida de fundo
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  weatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  weatherDetails: {
    marginLeft: 15,
  },
  weatherText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    flexShrink: 1, // Faz o texto se ajustar ao container
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickActionButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Adiciona sombra para realçar o texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  section: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  stockButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  stockButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  plantationButton: {
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  plantationText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
  },
});