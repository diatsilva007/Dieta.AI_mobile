import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    ScrollView
} from 'react-native';
import { colors } from '../../constants/colors';
import { Header } from '../../components/header';
import { Input } from '../../components/input'

export default function step() {
    return (
        <View style={styles.container}>
            <Header
                step='step 1'
                title='Vamos começar'
            />

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Nome:</Text>
                <Input />

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    content: {
        paddingLeft: 16,
        paddingRight: 16,
    },

    label: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8,
    }
})