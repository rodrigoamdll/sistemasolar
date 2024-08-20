import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableOpacity, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Información de cada planeta
const planets = [
  { 
    name: 'Sol', 
    size: '1,391,000 km', 
    mass: '1.989 × 10^30 kg', 
    distance: '0 km (centro del sistema solar)', 
    uniqueCharacteristics: 'Es la estrella en el centro del sistema solar.', 
    image: require('./src/img/sun.jpg') 
  },
  { 
    name: 'Mercurio', 
    size: '4,880 km', 
    mass: '3.301 × 10^23 kg', 
    distance: '57.9 million km', 
    uniqueCharacteristics: 'Es el planeta más cercano al Sol y el más pequeño del sistema solar.', 
    image: require('./src/img/mercurio.jpg') 
  },
  { 
    name: 'Venus', 
    size: '12,104 km', 
    mass: '4.867 × 10^24 kg', 
    distance: '108.2 million km', 
    uniqueCharacteristics: 'Tiene una atmósfera densa y es el planeta más caliente del sistema solar.', 
    image: require('./src/img/venus.jpg') 
  },
  { 
    name: 'Marte', 
    size: '6,779 km', 
    mass: '6.417 × 10^23 kg', 
    distance: '227.9 million km', 
    uniqueCharacteristics: 'Conocido como el planeta rojo debido a su superficie rica en óxido de hierro.', 
    image: require('./src/img/marte.jpg') 
  },
  { 
    name: 'Tierra', 
    size: '12,742 km', 
    mass: '5.972 × 10^24 kg', 
    distance: '149.6 million km', 
    uniqueCharacteristics: 'El único planeta conocido que alberga vida.', 
    image: require('./src/img/tierra.jpg') 
  },
  { 
    name: 'Luna', 
    size: '3,474 km', 
    mass: '7.348 × 10^22 kg', 
    distance: '384,400 km', 
    uniqueCharacteristics: 'El único satélite natural de la Tierra.', 
    image: require('./src/img/luna.jpg') 
  },
  { 
    name: 'Saturno', 
    size: '116,460 km', 
    mass: '5.683 × 10^26 kg', 
    distance: '1.2 billion km', 
    uniqueCharacteristics: 'Famoso por sus anillos brillantes y extensos.', 
    image: require('./src/img/saturno.jpg') 
  },
  { 
    name: 'Neptuno', 
    size: '49,244 km', 
    mass: '1.024 × 10^26 kg', 
    distance: '4.5 billion km', 
    uniqueCharacteristics: 'Conocido por sus fuertes vientos y su color azul intenso.', 
    image: require('./src/img/neptuno.jpg') 
  },
  { 
    name: 'Urano', 
    size: '50,724 km', 
    mass: '8.681 × 10^25 kg', 
    distance: '2.9 billion km', 
    uniqueCharacteristics: 'Tiene una inclinación extrema, lo que lo hace girar de lado.', 
    image: require('./src/img/urano.jpg') 
  },
  { 
    name: 'Júpiter', 
    size: '139,820 km', 
    mass: '1.898 × 10^27 kg', 
    distance: '778.5 million km', 
    uniqueCharacteristics: 'El planeta más grande de nuestro sistema solar.', 
    image: require('./src/img/jupiter.jpg') 
  },
];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState({});

  const handlePlanetPress = (planet) => {
    setSelectedPlanet(planet);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explora el Sistema Solar</Text>
      <ScrollView horizontal contentContainerStyle={styles.carousel}>
        {planets.map((planet, index) => (
          <TouchableOpacity key={index} onPress={() => handlePlanetPress(planet)}>
            <Image source={planet.image} style={styles.planet} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal transparent={true} visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <View style={styles.imageContainer}>
              <Image source={selectedPlanet.image} style={styles.modalImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalTitle}>{selectedPlanet.name}</Text>
              <Text style={styles.modalInfo}>Tamaño: {selectedPlanet.size}</Text>
              <Text style={styles.modalInfo}>Masa: {selectedPlanet.mass}</Text>
              <Text style={styles.modalInfo}>Distancia al Sol: {selectedPlanet.distance}</Text>
              <Text style={styles.modalInfo}>Características Únicas: {selectedPlanet.uniqueCharacteristics}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 100,  
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  carousel: {
    alignItems: 'center',
  },
  planet: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro para el modal
  },
  modalContent: {
    backgroundColor: 'transparent', // Fondo transparente para el contenedor de la imagen
    width: '80%',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#000', // Fondo oscuro para la imagen
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  textContainer: {
    backgroundColor: '#fff', // Fondo blanco para el texto y el botón
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInfo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 18,
    color: '#007BFF',
  },
});

export default App;
