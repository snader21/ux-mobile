import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MusicSetupScreen = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [showWarning, setShowWarning] = useState(true); 

  const platforms = [
    { label: 'Spotify', value: 'spotify' },
    { label: 'Amazon Music', value: 'amazonMusic' },
    { label: 'Youtube Music', value: 'youtubeMusic' },
  ];

  return (
    <LinearGradient colors={['#fff', '#fff']} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          A continuación podrás vincular tu plataforma de música favorita
        </Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPlatform}
          onValueChange={(itemValue) => setSelectedPlatform(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona una opción" value="" />
          {platforms.map((platform) => (
            <Picker.Item key={platform.value} label={platform.label} value={platform.value} />
          ))}
        </Picker>
        {selectedPlatform === '' && (
          <Text style={styles.errorText}>
            <FontAwesome name="exclamation-circle" size={14} color="red" /> Selecciona una opción para continuar
          </Text>
        )}
      </View>

      {showWarning && (
        <View style={styles.warningContainer}>
          <FontAwesome name="exclamation-triangle" size={18} color="white" style={styles.icon} />
          <Text style={styles.warningText}>Luego podrás asociar la música en la creación de la alarma</Text>
          <TouchableOpacity onPress={() => setShowWarning(false)}>
            <FontAwesome name="times" size={18} color="white" />
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>GUARDAR</Text>
        <FontAwesome name="arrow-right" size={18} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default MusicSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  titleContainer: {
    backgroundColor: '#2A2D97',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#2A2D97',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 80,
  },
  picker: {
    height: 50,
    color: '#2A2D97',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  warningContainer: {
    flexDirection: 'row',
    backgroundColor: '#F305A0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginRight: 8,
  },
  warningText: {
    color: 'white',
    flex: 1,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#2A2D97',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
});
