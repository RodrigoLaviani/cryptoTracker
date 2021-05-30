import React, { Component } from 'react';
import { View, Text, Image, SectionList, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import Http from '../../libs/http';
import Colors from '../../res/colors';
import CoinMarketItem from '../coinDetail/CoinMarketItem'
import Storage from '../../libs/storage';

class CoinDetailSreen extends Component {

    state = {
        coin: {},
        markets: [],
        isFavorite: false
    }

    toogleFavorite = () => {
        if (this.state.isFavorite) {
            this.removeFavorite();
        } else {
            this.addFavorite();
        }
    }

    addFavorite = async () => {
        const coin = JSON.stringify(this.state.coin);
        const key = `favorite-${this.state.coin.id}`;

        const stored = await Storage.instance.store(key, coin);

        if (stored) {
            this.setState({ isFavorite: true });
        }
    }

    removeFavorite = async () => {
        Alert.alert("Remove favorite", "Are you sure?", [
            {
                text: "Cancel",
                onPress: () => { },
                style: "cancel"
            },
            {
                text: "Remove",
                onPress: async () => {
                    const key = `favorite-${this.state.coin.id}`;

                    const isRemove = await Storage.instance.remove(key);

                    if (isRemove) {
                        this.setState({ isFavorite: false });
                    }
                },
                style: "destructive"
            }
        ])
    }

    getFavorite = async () => {
        try {
            const key = `favorite-${this.state.coin.id}`;
            const favStr = await Storage.instance.get(key);

            if (favStr != null) {
                this.setState({ isFavorite: true })
            }
            //TODO manejar error con error y mostrar pantalla de error
        } catch (error) {

        }
    }

    getSymbolIcon = (name) => {
        if (name) {
            const symbol = name.toLowerCase().replace(" ", "-");
            return `https://c1.coinlore.com/img/16x16/${symbol}.png`;
        }
    };

    getSections = (coin) => {
        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            },
        ]

        return sections;
    }

    getMarket = async (coinId) => {
        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
        const markets = await Http.instance.get(url);
        this.setState({ markets })
    }


    componentDidMount() {
        const coin = this.props.route.params;

        this.props.navigation.setOptions({ title: coin.symbol })

        this.getMarket(coin.id);

        this.setState({ coin }, () => this.getFavorite());
    }

    render() {

        const { coin, markets, isFavorite } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <View style={styles.row}>
                        <Image style={styles.iconImage} source={{ uri: this.getSymbolIcon(coin.name) }} />
                        <Text style={styles.titleText}>{coin.name}</Text>
                    </View>
                    <Pressable
                        onPress={() => this.toogleFavorite()}
                        style={[
                            styles.btnFavorite,
                            isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd
                        ]}>
                        <Text style={styles.btnFavoriteText}>{isFavorite ? "Remove favorite" : "Add favorite"}</Text>
                    </Pressable>
                </View>
                <View>
                    <SectionList
                        sections={this.getSections(coin)}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) =>
                            <View style={styles.sectionItem}>
                                <Text style={styles.itemText}>{item}</Text>
                            </View>
                        }
                        renderSectionHeader={({ section }) =>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionText}>{section.title}</Text>
                            </View>
                        }
                    />
                </View>
                <Text style={styles.marketsTitle}>Markets</Text>
                <FlatList
                    style={styles.list}
                    keyExtractor={(item) => `${item.name}-${item.quote}-${item.base}`}
                    data={markets}
                    renderItem={({ item }) => <CoinMarketItem item={item} />}
                    horizontal={true}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    subHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 16,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    iconImage: {
        width: 25,
        height: 25
    },
    titleText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
        marginLeft: 8
    },
    sectionHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 8
    },
    sectionItem: {
        padding: 8
    },
    itemText: {
        color: '#FFF',
        fontSize: 14
    },
    sectionText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold'
    },
    list: {
        maxHeight: 80,
        margin: 5
    },
    marketsTitle: {
        color: '#FFF',
        fontSize: 16,
        padding: 8,
        fontWeight: 'bold'
    },
    btnFavorite: {
        padding: 8,
        borderRadius: 8
    },
    btnFavoriteText: {
        color: Colors.white,
    },
    btnFavoriteAdd: {
        backgroundColor: Colors.picton
    },
    btnFavoriteRemove: {
        backgroundColor: Colors.carmine
    }
})

export default CoinDetailSreen;
