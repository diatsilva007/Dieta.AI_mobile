import { View, 
    StyleSheet, 
    Pressable, 
    Text, 
    SafeAreaView, 
    Platform, 
    StatusBar } 
    from "react-native";

import { Feather } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

export function Header(){
    return(
        <SafeAreaView style={styles.container}>
            <Text></Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({  
    container:{
        backgroundColor: '#FFF',
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        marginBottom: 14,
        paddingTop: 70,
    }
})