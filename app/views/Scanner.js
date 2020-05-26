import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Header } from '../sections/Header.js';
import UseCam from '../sections/UseCam';
import { connect } from 'react-redux';
import {addBarcode} from '../../actions';


class Scanner extends React.Component {

    render(){
        let barcodeHeader = this.props.barcode === ' ' ? 'Use your camera ' : this.props.barcode;
        let titleHeader = this.props.title === ' ' ? 'to scan the barcode' : this.props.title;
        const data = this.props.history
        return(
            <View style = {styles.container}>
                <View style = {styles.top}>
                    <Text style = {styles.topText}>{barcodeHeader} </Text>
                    <Text style = {styles.topText}>{titleHeader} </Text>
                </View>
                <View style = {styles.cam}>
                    <UseCam />
                </View>
                <View style = {styles.bottom}>
                <Button title="Go to Details" 
                onPress={() => this.props.navigation.navigate('Details')
                }/>
                </View> 
                <View style = {styles.list}>
                    <FlatList 
                        data={data}
                        renderItem={({ item }) => (
                        <Text>{item.key}</Text>
                        )}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    top: {
        flex: 1,
        backgroundColor: '#cccccc',
        width: 'auto',
        alignItems: 'center',
        zIndex: 2
    },
    topText:{
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        paddingTop: 5
    },
    cam: {
        flex: 4,
        backgroundColor: '#cccccc',
      },
    bottom: {
        flex: 1,
        backgroundColor: 'transparent',
        width: 300,
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    list: {
        flex: 2,
        backgroundColor: '#cccccc',
        width: 'auto',
        marginTop: 10,
    }

  });
  const mapStateToProps = state =>{
      return {barcode: state.showBarcode.barcode,
             title: state.showTitle.title,
             history: state.addHistory.history,
            };
  }

export default connect(mapStateToProps, {addBarcode})(Scanner);


{/* <Text>Barcode = {this.props.barcode}</Text>
<TextInput onChangeText={text => this.setState({barcodeText: text})} />
<TouchableOpacity onPress={() => this.props.addBarcode(this.state.barcodeText)}><Text>Press Me</Text></TouchableOpacity> */}


