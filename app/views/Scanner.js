import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert  } from 'react-native';
import { Header } from '../sections/Header.js';
import { UseCam } from '../sections/UseCam';

export class Scanner extends React.Component {
    render(){
        return(
            <View>
                <Header message = 'Logged in' />
            <View style = {styles.top}>
                <Text style = {styles.topText}>Use your camera to scan the barcode</Text>
            </View>
            <View style = {styles.cam}>
                <UseCam />
            </View>
            <View style = {styles.bottom}>
                <Button title="Key in Barcode" onPress={() => Alert.alert('Enter the Barcode')}/>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    top: {
      backgroundColor: '#cccccc',
      width: 'auto',
      height: 200,
      alignItems: 'center'
    },
    topText:{
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 25,
        paddingTop: 10
    },
    cam: {
        backgroundColor: '#cccccc',
        height: 300,
        marginTop: 10,
        marginBottom: 10
      },
    bottom: {
        backgroundColor: '#ffffff',
        width: 'auto',
        height: 200,
        marginTop: 10,

    }

  });
  