import { StyleSheet } from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: Colors.blackPearl,
        borderColor: Colors.white,
        borderRadius: 10,
        borderWidth: 0.3,
        margin: 15,
        width: 160,
        height: 40,
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Helvetica,Verdana,sans-serif',
        padding: 10
    },
    button: {
        marginTop: 20,
        padding: 8,
        width: 160,
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#272c40'
    },
    textButton: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styles;