import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
// import { View, Image } from 'react-native';


const Detailitem = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="home" size={24} color="#3a1cff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <FontAwesome5 name="user" size={24} color="#3a1cff" />
                    </TouchableOpacity>
                    <Text style={styles.headerProfile}>Hariando Muthi</Text>
                </View>

                <View style={styles.cardItems}>
                    <Text style={styles.daftarLagu}>📝Detail Item ITERA SKUYY📝</Text>
                    <View style={styles.cardITERA}>
                        <TouchableOpacity onPress={() => navigation.navigate('SejarahITERA')}>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 10 }}
                                source={require('../assets/iteraGerbang.png')}
                            />
                            <Text style={styles.textContent}>Sejarah berdirinya ITERA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('FasilitasITERA')}>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 10 }}
                                source={require('../assets/fasilitas.jpeg')}
                            />
                            <Text style={styles.textContent}>Fasilitas ITERA</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.cardITERA2}>
                        <TouchableOpacity onPress={() => navigation.navigate('MarsITERA')}>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 10 }}
                                source={require('../assets/musik.jpg')}
                            />
                            <Text style={styles.textContent}>Lagu Mars ITERA</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.search}
                    >Kembali Home</Text></TouchableOpacity>
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
        top: -15,
        marginBottom: -65,
        backgroundColor: 'white',
        margin: "auto",
        width: '90%',
        padding: 20,
        borderRadius: 10,
    },
    daftarLagu: {
        color: "#373737",
        fontSize: 15,
        fontWeight: "bold",
        top: 0,
        textAlign: 'center',
    },
    cardItems: {
        top: 50,
        margin: "auto",
        width: '85%',
        borderRadius: 10,
        marginBottom: 80
    },
    cardITERA: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: "auto",
        width: '100%',
        display: "flex",
        marginBottom: 5,
        borderRadius: 10,
    },
    cardITERA2: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 5,
        borderRadius: 10,
    },
    textContent: {
        fontSize: 12,
        textAlign: 'center',
    },
    kotak: {
        marginTop: 50,
        backgroundColor: '#E5E4E2',
        width: "100%",
        flex: 1,
        borderRadius: 10,
    },
    copyright: {
        fontWeight: 'bold',
        marginBottom: 25,
        paddingTop: 20,
        marginTop: 'auto',
        color: '#797979',
        textAlign: 'center',
    }
});
export default Detailitem;