import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';
import Colors from '../../res/colors';

class CoinsScreen extends Component {

    state = {
        coins: [],
        coinsFiltered: [],
        loading: false
    }

    componentDidMount = () => {
        this.getCoinst()
    }

    getCoinst = async () => {
        this.setState({ loading: true });
        const coins = await Http.instance.get("https://api.coinlore.net/api/tickers/");

        this.setState({ coins: coins.data, coinsFiltered: coins.data, loading: false })
    }

    handlePress = (coin) => {
        this.props.navigation.navigate('CoinDetail', coin);
    }

    handlerSearch = (textInput) => {
        const { coins } = this.state;
        const coinsFiltered = coins.filter(coin => {
            return coin.name.toLowerCase().includes(textInput.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(textInput.toLowerCase());
        });
        this.setState({ coinsFiltered })
    }

    render() {

        const { coinsFiltered, loading } = this.state;

        return (
            <View style={styles.container}>
                { loading ?
                    <ActivityIndicator
                        color={Colors.white}
                        size="large"
                        style={styles.loader} />
                    :
                    <View>
                        <CoinsSearch onChange={text => this.handlerSearch(text)}></CoinsSearch>
                        <FlatList
                            data={coinsFiltered}
                            keyExtractor={(item) => `${item.name}`}
                            renderItem={({ item }) =>
                                <CoinsItem item={item} onPress={() => this.handlePress(item)}></CoinsItem>
                            }
                        ></FlatList>
                    </View>
                }

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    title: {
        color: Colors.white,
        textAlign: "center"
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: Colors.white,
        textAlign: "center"
    },
    loader: {
        marginTop: 60
    }
})

export default CoinsScreen;