import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = (prop) => {
    return (
        <View style={styles.bar}>
            <Text style={{color:'white', fontWeight: 'bold'}}>{prop.title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    bar: {
        height: 25,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
})