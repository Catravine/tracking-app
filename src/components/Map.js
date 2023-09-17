import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { PolyLine } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + i * 0.001,
      longitude: -122.03121 + i * 0.001
    })
  }

  return (
    <MapView 
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <PolyLine coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;

// const startWatching = async () => {
//   try {
//     const { granted } = await requestPermissionsAsync();
//     if (!granted) {
//       throw new Error('Location permission not granted');
//     }
//   } catch (e) {
//     setErr(e);
//   }
// };

// You will need to update the import:

// import { requestForegroundPermissionsAsync } from 'expo-location';

// As well as the request in the startWatching method:

// const { granted } = await requestForegroundPermissionsAsync();