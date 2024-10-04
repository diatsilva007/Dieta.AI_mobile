import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView
} from 'react-native';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { colors } from '../../constants/colors';
import { Header } from '@/components/header';

export default function create() {
  return (
    <View style={styles.container}>
      <Header 
        step='Passo 2'
        title='Finalizando dieta'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
})