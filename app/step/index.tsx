import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../constants/colors';
import { Header } from '../../components/header';

export default function step () {
    return(
        <View>
            <Header
            step='step 1'
            title='Vamos começar'
            />

        </View>
    )
}

