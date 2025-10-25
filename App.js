import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [listaNombres, setListaNombres] = useState([]);

  const longitud = nombre.length;
  const emoji =
    longitud === 0 ? '😶' :
    longitud < 3 ? '🙂🙂' :
    longitud < 4 ? '😄😄😄' :
    '🤩🤩🤩🤩🤩';

  const guardarnombre = () => {
    if (nombre.trim()) {
      setListaNombres([...listaNombres, nombre]);
      setNombre('');
    }
  };
  const eliminarUsuario = (index) => {
    const nuevaLista = listaNombres.filter((_, i) => i !== index);
    setListaNombres(nuevaLista);
  }
  return ( 
    <View style={styles.container}>
      <Text>Haz hecho click: {contador}</Text>
      <Button title="Aumenta el contador" onPress={() => setContador(c => c + 1)} />
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Hola {nombre}</Text>
      <Text>Tu nombre tiene: {longitud} {emoji} caracteres</Text>

      <View style={styles.buttonWrapper}>
        <Button title="Borrar nombre" onPress={() => setNombre('')} />
        <Button title="Guardar nombre" onPress={guardarnombre} />
      </View>

      <View style={styles.listaContainer}>
        <Text style={styles.listaTitle}>Nombres guardados:</Text>
        <FlatList
          data={listaNombres}
          renderItem={({item, index}) => (
            <View>
              <Text style={styles.listaItem}>{index + 1}. {item}</Text>
              <Button title="Limpiar lista" onPress={() => eliminarUsuario(index)} />
            </View>
          )}
          
          keyExtractor={(_, index) => index.toString()}
        />
        
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
  ,
  listaContainer: {
    marginTop: 20,
    width: '80%',
    maxHeight: 200,
  },
  listaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listaItem: {
    padding: 5,
    fontSize: 14,
  }
});