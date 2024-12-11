import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/telas/Inicial'; 
import CadastroPlantacao from './src/telas/CadastroPlantacao'; 
import CadastroMaquinas from './src/telas/CadastroMaquinas'; 
import CadastroFuncionarios from './src/telas/CadastroFuncionarios';
import CadastroEstoque from './src/telas/CadastroEstoque';
import GerenciarFinancas from './src/telas/GerenciarFinancas';
import Relatorios from './src/telas/Relatorios';
import VizualizarPlantacoes from './src/telas/VizualizarPlantacoes';
import VizualizarEstoque from './src/telas/VizualizarEstoque';
import CadastroColheita from './src/telas/CadastroColheita';
import PrevisaoTempo from './src/telas/PrevisaoTempo';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* TELA INICIAL*/}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA CADASTRO PLANTACAO*/}
        <Stack.Screen 
          name="CadastroPlantacao" 
          component={CadastroPlantacao} 
          options={{ title: "Cadastro do Plantio" }} 
        />
        {/* TELA CADASTRO MAQUINAS*/}
        <Stack.Screen 
          name="CadastroMaquinas" 
          component={CadastroMaquinas} 
          options={{ title: "Cadastro das Maquinas" }} 
        />
        {/* TELA CADASTRO FUNCIONARIOS*/}
        <Stack.Screen 
          name="CadastroFuncionarios" 
          component={CadastroFuncionarios} 
          options={{ title: "Cadastro de Funcionarios"  }} // Sem cabeçalho padrão
        />
        {/* TELA CADASTRO ESTOQUE*/}
        <Stack.Screen 
          name="CadastroEstoque" 
          component={CadastroEstoque} 
          options={{ title: "Cadastro do Estoque"  }} // Sem cabeçalho padrão
        />
        {/* TELA GERENCIAR FINANCAS*/}
        <Stack.Screen 
          name="GerenciarFinancas" 
          component={GerenciarFinancas} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA RELATORIOS*/}
        <Stack.Screen 
          name="Relatorios" 
          component={Relatorios} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA VIZUALIZAR PLANTACOES*/}
        <Stack.Screen 
          name="VizualizarPlantacoes" 
          component={VizualizarPlantacoes} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA VIZUALIZAR ESTOQUE*/}
        <Stack.Screen 
          name="VizualizarEstoque" 
          component={VizualizarEstoque} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA Cadastar Colheita*/}
        <Stack.Screen 
          name="CadastroColheita" 
          component={CadastroColheita} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA Previsão do tempo*/}
        <Stack.Screen 
          name="PrevisaoTempo" 
          component={PrevisaoTempo} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;