import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert,} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const CadastroPlantacao = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [dataPlantio, setDataPlantio] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [area, setArea] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const handleSalvar = () => {
    if (!nome || !tipo || !area) {a
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Lógica de salvamento aqui
    Alert.alert("Sucesso", "Plantação cadastrada com sucesso!");
    navigation.goBack(); // Retorna para a tela anterior
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar Plantação</Text>

      {/* Nome da plantação */}
      <Text style={styles.label}>Nome da Plantação *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Milho Safrinha"
        value={nome}
        onChangeText={setNome}
      />

      {/* Tipo de cultura */}
      <Text style={styles.label}>Tipo de Cultura *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Milho, Soja, Trigo"
        value={tipo}
        onChangeText={setTipo}
      />

      {/* Data de Plantio */}
      <Text style={styles.label}>Data de Plantio *</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setMostrarCalendario(true)}
      >
        <Text>{dataPlantio.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {mostrarCalendario && (
        <DateTimePicker
          value={dataPlantio}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setMostrarCalendario(false);
            if (selectedDate) setDataPlantio(selectedDate);
          }}
        />
      )}

      {/* Área plantada */}
      <Text style={styles.label}>Área Plantada (em hectares) *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 10"
        value={area}
        onChangeText={setArea}
        keyboardType="numeric"
      />

      {/* Observações */}
      <Text style={styles.label}>Observações</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Informações adicionais sobre a plantação"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline
      />

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#E57373",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CadastroPlantacao;
