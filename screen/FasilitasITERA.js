import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import * as Speech from 'expo-speech';


const FasilitasITERA = ({ navigation }) => {

    const speak = () => {
        const thingToSay = 'Selain memiliki lokasi yang strategis, karena berada tepat berdampingan dengan akses Tol Trans Sumatera, saat ini ITERA terus melengkapi berbagai fasilitas, mulai dari fasilitas perkuliahan seperti gedung perkuliahan, laboratorium teknik, asrama mahasiswa, hingga fasilitas pendukung lain termasuk Pembangkit Listrik Tenaga Surya (PLTS). Banyak lagi fasilitas lain yang akan dibangun di kampus ini. Pembangunan fasilitas tersebut dilakukan melalui kerja sama dengan berbagai kementerian, BUMN, dan swasta. Misalnya saja, akan dibangun Sport Center seluas 50 hektar di dalam lingkungan kampus. Pembangunan tersebut dilakukan atas kerja sama ITERA dengan Kementerian Pemuda dan Olahraga. Kemudian ITERA juga sedang membangun Kebun Raya seluas 75 ha di dalam lingkungan kampus sebagai pusat konservasi flora Sumatera.';
        Speech.speak(thingToSay);
    };
    const stopPlay = () => {
        Speech.stop();
    }

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

                <View>
                    <Text style={styles.header}>Fasilitas ITERA</Text>
                </View>

                <View>


                </View>

                <View>
                    <Text style={styles.headerNama}>{'\n'}{'\n'}Selain memiliki lokasi yang strategis, karena berada tepat berdampingan dengan akses Tol Trans Sumatera, saat ini ITERA terus melengkapi berbagai fasilitas, mulai dari fasilitas perkuliahan seperti gedung perkuliahan, laboratorium teknik, asrama mahasiswa, hingga fasilitas pendukung lain termasuk Pembangkit Listrik Tenaga Surya (PLTS) Banyak lagi fasilitas lain yang akan dibangun di kampus ini. Pembangunan fasilitas tersebut dilakukan melalui kerja sama dengan berbagai kementerian, BUMN, dan swasta. Misalnya saja, akan dibangun Sport Center seluas 50 hektar di dalam lingkungan kampus. Pembangunan tersebut dilakukan atas kerja sama ITERA dengan Kementerian Pemuda dan Olahraga. Kemudian ITERA juga sedang membangun Kebun Raya seluas 75 ha di dalam lingkungan kampus sebagai pusat konservasi flora Sumatera.</Text>
                </View>

                <View style={styles.card}>
                    <Button title="Speech Mulai" onPress={speak} color="#3a1cff" />
                    <Button title="Speech Berhenti" onPress={stopPlay} color="#3a1cff" />
                    <TouchableOpacity onPress={() => navigation.navigate('Detailitem')}><Text style={styles.search}
                    >Kembali</Text></TouchableOpacity>
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
        marginTop: 20,
        textAlign: "center",
    },
    headerNama: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
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
        top: 20,
        backgroundColor: 'white',
        margin: "auto",
        width: '90%',
        padding: 20,
        borderRadius: 10,
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
export default FasilitasITERA;