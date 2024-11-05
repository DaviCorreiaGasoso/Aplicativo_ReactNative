import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
   container: {
     flex: 1,
     paddingVertical: 12,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 20,
   },

   titulo: {
      fontSize: 24,
      fontWeight: 'bold',         
      color: '#333',
   },

   input: {
     width: '100%',
     height: 40,
     borderColor: '#ccc',
     borderWidth: 1,
     borderRadius: 5,
     marginBottom: 15,
     paddingLeft: 10,
   },

   botao: {
      backgroundColor: '#ff0000',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
 });
export default estilo;