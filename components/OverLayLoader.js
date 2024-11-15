
import React, { useState, useEffect } from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OverLayLoader = ({ loading }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#f69f2d', 'red', 'blue', 'green']; // Colors of the ActivityIndicator

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 100); // Change color every 1000 milliseconds
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={loading}
      onRequestClose={() => {}}
    >
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color={colors[colorIndex]} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.5)' // Semi-transparent background
  }
});

export default OverLayLoader;
