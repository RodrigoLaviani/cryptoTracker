import React from 'react';
import { View, Text, Image, StyleSheet, Platform, Pressable } from 'react-native';
import Colors from '../../res/colors';

const CoinsItem = ({ item, onPress }) => {

    const getImgArrow = () => {
        if (item.percent_change_1h > 0) {
            return require('../../assets/arrow_up.png');
        } else {
            return require('../../assets/arrow_down.png');
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image style={styles.imageIcon} source={getImgArrow()} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        borderColor: Colors.zircon,
        borderBottomWidth: 1,
        paddingLeft: Platform.OS == 'ios' ? 16 : 16,
        marginLeft: Platform.OS == 'ios' ? 16 : 0
    },
    row: {
        flexDirection: "row"
    },
    symbolText: {
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 12
    },
    nameText: {
        color: '#FFF',
        fontSize: 14,
        marginRight: 12,
        paddingTop: 1
    },
    priceText: {
        color: '#FFF',
        fontSize: 14
    },
    percentText: {
        color: '#FFF',
        fontSize: 12,
        paddingTop: 1,
        marginRight: 8
    },
    imageIcon: {
        width: 22,
        height: 22
    }
})

export default CoinsItem;