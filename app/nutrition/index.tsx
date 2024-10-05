import { View, Text, StyleSheet } from 'react-native';

import { useDataStore } from '@/store/data';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { colors } from '@/constants/colors';

export default function nutrition() {

  const user = useDataStore(state => state.user)

  const { data, isFetching, error } = useQuery({
    queryKey: ['nutrition'],
    queryFn: async () => {
      try {
        if (!user) {
          throw new Error('Filed load nutrition');
        }

        const response = await api.post("/create", {
          name: user.name,
          age: user.age,
          gender: user.gender,
          height: user.height,
          weight: user.weight,
          objective: user.objective,
          level: user.level
        })

        console.log(response.data);
        return response.data;

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

  return (
    <View>
      <Text>TEST PAGE</Text>
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

});