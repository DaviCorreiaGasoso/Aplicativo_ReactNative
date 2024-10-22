import  React from 'react';
import { Text, View } from 'react-native';
import estiloso from "./CSS/estiloso.js";


export default function App() {
  return (
    <SafeAreaView style={[estiloso.background]}>
    <View style={[estiloso.container]}>

    <Image
    source="../Imagens/icone_login.png"
    style={[estiloso.icone_login]}
    />
    
    <View style={[estiloso.inputView]}>
      <TextInput
        style={[estiloso.texto_input]}
        placeholder= "Login"
        placeholderTextColor="#003f5c"
        />
    </View>
    <View style={[estiloso.inputView]}>
      <TextInput
        style={estiloso.texto_input}
        placeholder= "Senha"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
      />
    </View>
    <TouchableOpacity style={[estiloso.botao_entrar]}>
      <Text style={estiloso.texto_botao}>Entrar</Text>
    </TouchableOpacity>
  </View>
  </SafeAreaView>
  );
}

