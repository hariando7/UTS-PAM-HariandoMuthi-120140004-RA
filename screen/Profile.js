import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';

const Profile = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text
                    ><Feather name="home" size={24} color="#3a1cff" /></Text>
                    </TouchableOpacity>
                    {/* <FontAwesome5 name="user" size={24} color="#3a1cff" /> */}
                    {/* <Text style={styles.headerProfile}>Hariando Muthi</Text> */}
                </View>

                <View>
                    <Text style={styles.header}>Profile</Text>
                </View>

                <View style={styles.detail}>
                    <Text style={styles.memutar}>Profile Mahasiswa</Text>
                    <Image
                        style={{ width: 160, height: 220, borderRadius: 10, marginTop: 25 }}
                        source={require('../assets/FotoProfile.jpeg')}
                    />
                    <Text style={styles.teks}>{"\n"}Hariando Muthi</Text>
                    <Text style={styles.teks}>120140004</Text>
                    <Text style={styles.teks}>Pengembangan Aplikasi Mobile RA</Text>
                    <Text style={styles.teks}>Teknik Informatika 2020</Text>
                    <Text style={styles.teks}>Institut Teknologi Sumatera</Text>
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
    header: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 0,
        textAlign: "center",
    },
    headerNama: {
        fontSize: 15,
    },
    headerProfile: {
        color: 'black',
        fontSize: 12,
        fontWeight: "bold",
        top: 28,
        marginLeft: -250,
    },
    detail: {
        margin: "auto",
        width: '100%',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    tekt: {
        fontWeight: "bold",
    },
    search: {
        color: '#ffff',
        width: '100%',
        height: 40,
        margin: 10,
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
        top: 0,
        backgroundColor: 'white',
        margin: "auto",
        width: '70%',
        padding: 40,
        borderRadius: 10,
    },
    kotak: {
        marginTop: 5,
        backgroundColor: '#E5E4E2',
        width: "100%",
        flex: 1,
        borderRadius: 10,
    },
    copyright: {
        fontWeight: 'bold',
        marginBottom: 20,
        paddingTop: 20,
        marginTop: 'auto',
        color: '#797979',
        textAlign: 'center',
    }
});
export default Profile;