import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
 
export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');

  const longitud = nombre.length;
  const emoji =
    longitud === 0 ? '😶' :
    longitud < 3 ? '🙂🙂' :
    longitud < 4 ? '😄😄😄' :
    '🤩🤩🤩🤩🤩';

  return ( 
    <View style={styles.container}>
      <Text>Haz hecho click: {contador}</Text>
      <Button title="Aumenta el contador" onPress={() => setContador(c => c + 1)} />
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre} //Atrapa el nombre escrito
      />

      <Text>Hola {nombre}</Text>

      <Text>Tu nombre tiene: {longitud} {emoji} caracteres</Text>

      <View style={styles.buttonWrapper}>
        <Button title="Borrar nombre" onPress={() => setNombre('')} />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 240,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  buttonWrapper: {
    marginTop: 10,
    width: 200,
  }
});