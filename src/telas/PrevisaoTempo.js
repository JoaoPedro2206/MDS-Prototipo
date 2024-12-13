import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ClimaSemana({ navigation }) {
  // Dados simulados da previsão do tempo da semana
  const previsao = [
    {
      data: "2024-12-09",
      temperatura: 28,
      descricao: "Céu claro",
      icon: "01d", // Ícone do tempo (pode ser modificado)
    },
    {
      data: "2024-12-10",
      temperatura: 30,
      descricao: "Parcialmente nublado",
      icon: "02d",
    },
    {
      data: "2024-12-11",
      temperatura: 25,
      descricao: "Chuva leve",
      icon: "03d",
    },
    {
      data: "2024-12-12",
      temperatura: 27,
      descricao: "Nuvens dispersas",
      icon: "04d",
    },
    {
      data: "2024-12-13",
      temperatura: 26,
      descricao: "Chuva moderada",
      icon: "09d",
    },
    {
      data: "2024-12-14",
      temperatura: 29,
      descricao: "Céu limpo",
      icon: "01d",
    },
    {
      data: "2024-12-15",
      temperatura: 31,
      descricao: "Sol forte",
      icon: "01d",
    },
  ];

  // Função para formatar a data
  const formatarData = (data) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date(data).toLocaleDateString("pt-BR", options);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Previsão do Clima para a Semana</Text>

      {previsao.map((dia, index) => (
        <View key={index} style={styles.cardClima}>
          <Text style={styles.dataClima}>{formatarData(dia.data)}</Text>
          <View style={styles.climaInfo}>
            <Image
              style={styles.iconClima}
              source={{
                uri: `http://openweathermap.org/img/wn/${dia.icon}@2x.png`,
              }}
            />
            <Text style={styles.temperatura}>{dia.temperatura}°C</Text>
          </View>
          <Text style={styles.descricaoClima}>{dia.descricao}</Text>
        </View>
      ))}
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
  cardClima: {
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
  dataClima: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  climaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconClima: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  temperatura: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  descricaoClima: {
    fontSize: 16,
    color: "#666",
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
