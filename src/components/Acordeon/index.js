import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon } from "@rneui/themed";
import { useState } from 'react';

export default function Acordeon({ title, ...props }) {
    const [open, setOpen] = useState(false)

    return (
        <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
            <View style={open ? styles.headerOpen : styles.headerClosed}>
                <TouchableOpacity onPress={() => {
                    setOpen(!open)
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                        <Text style={styles.headerTitle}>{title}</Text>
                        <Icon name={open ? 'chevron-up' : 'chevron-down'} type='feather' color="#999EA3" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                display: open ? "flex" : "none",
                ...styles.children
            }}>
                {props.children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: '#fff',
        borderColor: '#E3E3E3',
        borderRadius: 15,
        borderWidth: 1
    },
    headerOpen: {
        backgroundColor: "#E3E3E3",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerClosed: {
        backgroundColor: "#E3E3E3",
        borderRadius: 20,
    },
    headerTitle: {
        color: '#323232',
        fontWeight: "600",
        fontFamily: 'Metropolis-Bold',
        fontSize: 16,
        marginTop: 2
    },
    children: {
        padding: 15,
        borderColor: "#E3E3E3",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderTopWidth: 0
    }
});
