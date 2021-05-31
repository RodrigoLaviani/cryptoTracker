import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import CoinsItem from '../coins/CoinsItem';
import Colors from '../../res/colors';
import Storage from '../../libs/storage';

class FavoritesScreen extends Component {

    state = {
        favorites: []
    }

    getFavorites = async () => {
        try {
            const allKeys = await Storage.instance.getAllKeys();

            const keys = allKeys.filter(key => key.includes("favorite-"));

            const favorites = (await Storage.instance.multiGet(keys)).map(fav => JSON.parse(fav[1]));

            this.setState({ favorites })
        } catch (err) {
            //TODO: pantalla de error
        }
    }

    async componentDidMount() {
        this.getFavorites();

        this.props.navigation.addListener("focus", this.getFavorites);
    }

    componentWillUnmount() {
        this.props.navigation.removeListener("focus", this.getFavorites);
    }

    handlePress = (coin) => {
        this.props.navigation.navigate('FavoritesDetail', coin);
    }

    render() {
        const { favorites } = this.state;
        return (
            <View style={styles.container}>
                {favorites.length ? (
                    <View>
                        <FlatList
                            data={favorites}
                            keyExtractor={(item) => `${item.name}`}
                            renderItem={({ item }) => <CoinsItem item={item} onPress={() => this.handlePress(item)} />}
                        />
                    </View>
                ) : (
                    <FavoritesEmptyState />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    row: {
        flexDirection: 'row'
    }
})

export default FavoritesScreen;