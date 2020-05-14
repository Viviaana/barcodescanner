import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        let display = this.state.isLoggedIn ? 'Log in' : this.props.message;
        return(
            <View style = {styles.headStyle}>
                <Icon style={styles.icon} name="navicon" />
                <Text style = {styles.headText1}>Scan Barcode</Text>
                <Text 
                    style = {styles.headText2}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        paddingTop: 25,
        color: '#ffffff',
        fontSize: 20,
        flex: 0.3,
    },
    headText1: {
        paddingTop: 25,
        color: '#ffffff',
        fontSize: 25,
        flex: 1,
    },
    headText2: {
        paddingTop: 30,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 15,
        flex: 1
    },
    headStyle: {
        padding: 10,
        backgroundColor: '#008fff',
        height: 100,
        flexDirection: 'row'
    }
})