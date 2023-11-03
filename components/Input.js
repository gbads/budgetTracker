import { Text, View, StyleSheet, Image } from 'react-native';

export default function Input() {
  return (
    <View style={styles.container}>
      <Image style={styles.add} source={require('../assets/iconmonstr-plus-circle-filled-240.png')} />
      <Text style={styles.paragraph}>
        Add Income/Expense
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 0,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  add: {
    height: 30,
    width: 30,
  }
});
