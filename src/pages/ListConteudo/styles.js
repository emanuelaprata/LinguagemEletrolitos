import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        display: "flex",
        backgroundColor: '#fafafa'
    },
    screenContent: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 14
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        marginStart: 16,
        fontFamily: 'Metropolis-Bold',
    },
    ImageBackground: {
        flex: 1,
        width: null,
        height: null
    },
    cardContainer: {
        flex: 1,
        height: 150,
        paddingStart: 15,
        borderRadius:4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 21,
        fontFamily: 'Metropolis-Bold',
    },
    cardSubtitle: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5
    },
    cardDetailContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
    },
});