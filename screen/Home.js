import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
                        <Text>
                            <Feather name="info" size={24} color="#3a1cff" />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text>
                            <FontAwesome5 name="user" size={24} color="#3a1cff" />
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerProfile}>Hariando Muthi</Text>
                </View>

                <View>
                    <Text style={styles.header}>📌ITERA SKUYY📌</Text>
                </View>

                <View style={styles.Hero}>
                    <Image
                        source={{
                            uri: "https://assets.digination.id/photo/2021/12/09/1323882165.png",
                        }}
                        style={{ width: 200, height: 200, marginTop: 120, textAlign: "center" }}
                    />
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detailitem')}><Text style={styles.search}
                    >Selanjutnya</Text></TouchableOpacity>
                </View>

                <View style={styles.kotak}>
                    <Text style={styles.copyright}>©Copyright Hariando Muthi - 120140004</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // Header style
    header: {
        color: 'black',
        fontSize: 30,
        fontWeight: "bold",
        top: 75,
        textAlign: "center",
    },
    headerProfile: {
        color: 'black',
        fontSize: 12,
        fontWeight: "bold",
        top: 28,
        marginLeft: -250,
    },
    search: {
        color: '#ffff',
        width: '100%',
        height: 40,
        margin: 20,
        backgroundColor: "#3a1cff",
        paddingTop: 5,
        fontSize: 20,
        borderRadius: 5,
        alignSelf: "center",
        textAlign: "center",
        fontweight: "Bold"
    },
    // Container Style
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white',
        overflow: "hidden",
        alignItems: "center",
    },
    top: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 40,
        paddingTop: 60,
        justifyContent: 'space-between'
    },
    // Card style
    card: {
        top: 5,
        backgroundColor: 'white',
        margin: "auto",
        width: '90%',
        padding: 35,
        borderRadius: 10,
    },
    kotak: {
        marginTop: 35,
        backgroundColor: '#E5E4E2',
        width: "100%",
        flex: 1,
        borderRadius: 10,
    },
    copyright: {
        fontWeight: 'bold',
        marginBottom: 25,
        paddingTop: 18,
        marginTop: 'auto',
        color: '#797979',
        textAlign: 'center',
    }
});
export default Home;