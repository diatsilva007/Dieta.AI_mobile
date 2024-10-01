import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { colors } from '../constants/colors';
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
      />

      <Text style={styles.title}>
        Dieta<Text style={{ color: colors.white }}>AI</Text>
      </Text>

      <Text style={styles.text}>
        Sua dieta personalizada com inteligência artificial
      </Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button} onPress={() => alert('Redirecting to About page')}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F232C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: colors.green,
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    width: 240,
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#0096D6',
    width: '100%',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

})