import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/colors";
import CustomCheckbox from "../components/ui/CustomCheckBox";
import CustomPicker from "../components/ui/CustomPicker";
import CustomButton from "../components/ui/CustomButton";
import CustomAlert from "../components/ui/CustomAlert";
import { FontAwesome } from "@expo/vector-icons";

function MathChallengeSetupScreen() {
  const [selectedCategories, setSelectedCategories] = useState({
    logica: true,
    seriesNumericas: false,
    fracciones: false,
    geometria: true,
    adivinanzas: true,
  });

  const [difficulty, setDifficulty] = useState(3);
  const [resolveTime, setResolveTime] = useState("15 segundos");
  const [alarmOffTime, setAlarmOffTime] = useState("5 minutos");
  const [showWarning, setShowWarning] = useState(true);

  const categories = [
    { label: "Lógica", key: "logica" },
    { label: "Series numéricas", key: "seriesNumericas" },
    { label: "Fracciones", key: "fracciones" },
    { label: "Geometría", key: "geometria" },
    { label: "Adivinanzas", key: "adivinanzas" },
  ];

  const resolveTimeOptions = [
    { label: "15 segundos", value: "15 segundos" },
    { label: "30 segundos", value: "30 segundos" },
    { label: "1 minuto", value: "1 minuto" },
  ];

  const alarmOffTimeOptions = [
    { label: "5 minutos", value: "5 minutos" },
    { label: "10 minutos", value: "10 minutos" },
    { label: "15 minutos", value: "15 minutos" },
  ];

  const handleCategoryChange = (key, value) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleStarPress = (rating) => {
    setDifficulty(rating);
  };

  return (
    <LinearGradient
      colors={[Colors.primaryWhite, Colors.primaryWhite]}
      style={styles.rootScreen}
    >
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          {categories.map((category) => (
            <View key={category.key} style={styles.checkboxRow}>
              <Text style={styles.label}>{category.label}</Text>
              <CustomCheckbox
                initialValue={selectedCategories[category.key]}
                onCheckChange={(value) => handleCategoryChange(category.key, value)}
              />
            </View>
          ))}
        </View>

        <View style={styles.difficultyContainer}>
          <Text style={styles.label}>Dificultad</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                <FontAwesome
                  name={star <= difficulty ? "star" : "star-o"}
                  size={32}
                  color={star <= difficulty ? Colors.primaryBlue : Colors.primaryCyan}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Tiempo para resolver**</Text>
          <CustomPicker
            items={resolveTimeOptions}
            value={resolveTime}
            onValueChange={setResolveTime}
          />
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Apagar la alarma después de**</Text>
          <CustomPicker
            items={alarmOffTimeOptions}
            value={alarmOffTime}
            onValueChange={setAlarmOffTime}
          />
        </View>

        {showWarning && (
          <CustomAlert onClose={() => setShowWarning(false)} />
        )}

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>GUARDAR</Text>
        <FontAwesome name="arrow-right" size={18} color="white" />
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default MathChallengeSetupScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 16,
    width: "90%",
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    color: Colors.primaryBlue,
    fontSize: 16,
    marginBottom: 8
  },
  difficultyContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: "row",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  errorContainer: {
    marginBottom: 16,
    backgroundColor: Colors.errorPink,
    padding: 12,
    borderRadius: 4,
  },
  errorText: {
    color: Colors.primaryWhite,
    fontSize: 14,
    textAlign: "center",
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
