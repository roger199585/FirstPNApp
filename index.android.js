/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
/*
  你所需要用到的標籤要先在這裡定義
*/
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class FirstPNApp extends Component {
  //constructor(props) {
  //  super(props)
  //}
  // 系統預設圍上方那樣  若要自給複寫須記得加入super(props)
  
  
  constructor(props) {
    super(props)
    this.state = {
      text: 'Corn',
      text2: 'haha'
      //若此處將text指定為固定值  則畫面上只能限是此質無法進行改變
      //因此如果你要讓你的textinput可以更改上面的職的話須加入onchangetext    
      
    }
  }
  onPress = () => {
    console.log('Hello Cor123n~')
  }
  // onPress can't work
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello I'm Corn
        </Text>
        
        <TextInput 
          style={{backgroundColor: 'black', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(text) => this.setState({text})} value={this.state.text}></TextInput>
        <Text> Hello! {this.state.text} {this.state.text2} ~ </Text>
        <TextInput 
          style={{backgroundColor: 'gray', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(text2) => this.setState({text2})} value={this.state.text2}></TextInput>
        <Text> Hello! {this.state.text2} ~</Text>
        
        <Text style={styles.welcome} onPress={this.onPress} >
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstPNApp', () => FirstPNApp);
