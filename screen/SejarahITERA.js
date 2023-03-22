import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import * as Speech from 'expo-speech';


const SejarahITERA = ({ navigation }) => {

    const speak = () => {
        const thingToSay = 'Pada tanggal 6 Oktober 2014, Presiden Republik Indonesia melalui Peraturan Presiden telah meresmikan Institut Teknologi Sumatera (itEra) di Bandarlampung dan Institut Teknologi Kalimantan (itEka) di Balikpapan sebagai Perguruan Tinggi Negeri. itera dirintis pendiriannya dan akan dikembangkan serta dibina oleh Institut Teknologi Bandung (itEbe) selama 10 tahun kedepan dengan kualitas minimal setara dengan itEbe. Program studi yang diselenggarakan oleh Institut Teknologi Sumatera adalah untuk pemenuhan kebutuhan tenaga sar-jana di Indonesia, khusunya di Sumatera.';
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
                    <Text style={styles.header}>Sejarah ITERA</Text>
                </View>

                <View>
                    <Text style={styles.headerNama}>{"\n"}Pada tanggal 6 Oktober 2014, Presiden Republik Indonesia melalui Peraturan Presiden telah meresmikan Institut Teknologi Sumatera (ITERA) di Bandarlampung dan Institut Teknologi Kalimantan (ITK) di Balikpapan sebagai Perguruan Tinggi Negeri. ITERA dirintis pendiriannya dan akan dikembangkan serta dibina oleh Institut Teknologi Bandung (ITB) selama 10 tahun kedepan dengan kualitas minimal setara dengan ITB. Program studi yang diselenggarakan oleh Institut Teknologi Sumatera adalah untuk pemenuhan kebutuhan tenaga sar-jana di Indonesia, khusunya di Sumatera. Untuk itu, Kementerian Pendidikan dan Kebudayaan memiliki program pendirian institut teknologi negeri di Sumatera. Penyusunan proposal pendirian telah dilakukan pada tahun 2011. Institut Teknologi di Sumatera tersebut telah ditetapkan akan berlokasi di Kota Baru, Kabupaten Lampung Selatan, Provinsi Lampung (SK Mendikbud No.060/P/2012). </Text>
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
        margin: 15,
        backgroundColor: "#3a1cff",
        paddingTop: 5,
        fontSize: 17,
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
export default SejarahITERA;