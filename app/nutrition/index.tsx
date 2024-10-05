import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

import { useDataStore } from '@/store/data';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { colors } from '@/constants/colors';
import { Data } from '@/types/data';
import { Link } from 'expo-router';
import { coolDownAsync } from 'expo-web-browser';

interface ResponseData {
  data: Data;
}

export default function nutrition() {

  const user = useDataStore(state => state.user)

  const { data, isFetching, error } = useQuery({
    queryKey: ['nutrition'],
    queryFn: async () => {
      try {
        if (!user) {
          throw new Error('Filed load nutrition');
        }

        const response = await api.get<ResponseData>("/teste")
        /*const response = await api.post("/create", {
          name: user.name,
          age: user.age,
          gender: user.gender,
          height: user.height,
          weight: user.weight,
          objective: user.objective,
          level: user.level
        })*/

        return response.data.data;

      } catch (err) {
        console.error(err);
      };
    }
  });

  if (isFetching) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Estamos gerando sua dieta!</Text>
        <Text style={styles.loadingText}>Consultando IA...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Falha ao gerar dieta!</Text>
        <Link href="/">
          <Text style={styles.loadingText}>Tente novamente</Text>
        </Link>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>

        <View style={styles.contentHeader}>
          <Text style={styles.title}>Minha dieta</Text>

          <Pressable style={styles.buttonShare}>
            <Text style={styles.buttonShareText}>Compartilhar</Text>
          </Pressable>
        </View>

      </View>

      <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
        {data && Object.keys(data).length > 0 && (
          <>
            <Text style={styles.name}>Nome: {data.nome}</Text>
            <Text style={styles.objective}>Foco: {data.objetivo}</Text>

            <Text style={styles.lable}>Refeições:</Text>
          </>
        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  loading: {
    flex: 1,
    backgroundColor: colors.background,
  },

  loadingText: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: colors.background,
    flex: 1,

  },

  containerHeader: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingTop: 60,
    paddingBottom: 20,
    marginBottom: 16,
  },

  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.background
  },

  buttonShare: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4,
  },

  buttonShareText: {
    color: colors.white,
    fontWeight: '500'
  },

  name: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },

  objective: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 24
  },

  lable: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }

});