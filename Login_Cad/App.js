import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import estilo from './CSS/estilo';

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  // Função para buscar o endereço com o ViaCEP
  const buscarEndereco = async () => {
    if (cep.length !== 8) {
      Alert.alert('Erro', 'CEP deve ter 8 dígitos');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert('Erro', 'CEP não encontrado');
      } else {
        setEndereco(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(response.data.uf);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o endereço');
    }
  };

  // Função para validar o formato do email
  const validarEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Função para validar a senha
  const validarSenha = (senha) => {
    return senha.length >= 6; // Senha deve ter pelo menos 6 caracteres
  };

  // Função para realizar o cadastro
  const handleCadastro = () => {
    if (!nome || !email || !senha || !cep || !endereco || !bairro || !cidade || !estado) {
      setTimeout(() => {
        Alert.alert('Erro', 'Todos os campos são obrigatórios');
      }, 100); // Atraso de 100ms para garantir que o alerta seja chamado depois de outros processos
      return;
    }
  
    if (!validarEmail(email)) {
      setTimeout(() => {
        Alert.alert('Erro', 'Email inválido');
      }, 100);
      return;
    }
  
    if (!validarSenha(senha)) {
      setTimeout(() => {
        Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      }, 100);
      return;
    }
  
    setTimeout(() => {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    }, 100);
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Cadastro com ViaCEP</Text>

      {/* Campo para Nome Completo */}
      <TextInput
        style={estilo.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo para Email */}
      <TextInput
        style={estilo.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo para Senha */}
      <TextInput
        style={estilo.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Campo para CEP */}
      <TextInput
        style={estilo.input}
        placeholder="CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={(text) => setCep(text)}
        onBlur={buscarEndereco} // Chama a função de busca ao sair do campo
      />

      {/* Campo para Endereço */}
      <TextInput
        style={estilo.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      {/* Campo para Bairro */}
      <TextInput
        style={estilo.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />

      {/* Campo para Cidade */}
      <TextInput
        style={estilo.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      {/* Campo para Estado */}
      <TextInput
        style={estilo.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      
      <Button title="Cadastrar" 
      onPress={handleCadastro} 
      style={estilo.botao}/>

    </View>
  );
};

export default App;
