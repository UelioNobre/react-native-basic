import { StyleSheet, View, Pressable, Text } from 'react-native'

export default function Button({ label }) {
  return (
    <View
      style={styles.buttonContainer}
    >
      <Pressable
        style={styles.button}
        onPress={
          () => alert('Voce pressionou um botão')
        }
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonIcon: {
    paddingRight: 8
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16
  }
});