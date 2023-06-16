import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Congrats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congrats ✅</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0f0f0f',
  },
  subtitle: {
    fontSize: 24,
    color: '#777',
    marginBottom: 24,
  },
  link: {
    fontSize: 32,
    color: '#0000FF',
  },
});
export default Congrats;
