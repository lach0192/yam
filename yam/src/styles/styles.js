import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1'
    },
    mapView: {
        alignSelf: 'stretch',
        height: '100%'
    }
});

module.exports = styles;