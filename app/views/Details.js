import React from 'react';
import {StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

class Details extends React.Component {
  render(){
    const data = this.props.history
  return (
    <View style = {styles.container}>
      <View style = {styles.button}>
        <Button title="Return to Scanner" 
                onPress={() => this.props.navigation.navigate('Scanner')
                }/>
        </View>
      <View style = {styles.list}></View>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
        <Text style = {styles.listitems}>{item.key}</Text>
        )}/>
    </View>
  );
}}

const styles = StyleSheet.create({
container:{
  backgroundColor: 'white',
  flex: 1
},
list: {
  backgroundColor: 'white',
  width: 'auto',
  marginTop: 10,
},
listitems:{
  color: '#234567'
},
button:{
  alignSelf: "center"
}

});
const mapStateToProps = state =>{
return {history: state.addHistory.history,
};
}

export default connect(mapStateToProps)(Details);
