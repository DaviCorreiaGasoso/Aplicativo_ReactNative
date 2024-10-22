import { StyleSheet } from 'react-native';

const estiloso = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    icone_login: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },
    
    inputView: {
        width: 300, // Ajustado para um valor mais razoável
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1, // Adicionado para definir a largura da borda
    },
    
    texto_input: {
        height: 50,
        color: 'black',
        flex: 1,
        borderColor: 'azure',
    },
    
    botao_entrar: {
        width: 300, // Ajustado para um valor mais razoável
        backgroundColor: 'red',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    
    texto_botao: {
        color: 'white',
    },
    
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});

export default estiloso;