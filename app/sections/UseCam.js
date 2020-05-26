'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import { addBarcode } from '../../actions';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class UseCam extends Component {
  _onBarCodeRead = (e) => {
    if (e.data != this.props.barcode){
      console.log(e.data)
      console.log(this.props.barcode)
    this.props.addBarcode(e.data)
    // console.log("All barcodes: " + this.props.history)
    }
}
    
    render() {
        return (
            <View style={styles.container}>
            <RNCamera
              style={styles.preview}
              googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL}
              type={RNCamera.Constants.Type.back}
              onBarCodeRead={this._onBarCodeRead}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              // onGoogleVisionBarcodesDetected={({ barcodes }) => {
              //   console.log(barcodes);
              // }}
            >
              {({ camera, status, recordAudioPermissionStatus }) => {
                if (status !== 'READY') return <PendingView />;
                return (
                  <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    {/* <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                      <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity> */}
                  </View>
                );
              }}
            </RNCamera>
          </View>
        );
      }
    
      takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
      };
    }
    
     const styles = StyleSheet.create({
      container: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
    });
    



const mapStateToProps = state => {
  return {
    barcode: state.showBarcode.barcode,
    history: state.addHistory.history,
  }
}

export default connect(mapStateToProps, {
  addBarcode
})(UseCam);

