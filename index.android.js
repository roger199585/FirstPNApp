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
  TextInput,
  TouchableOpacity
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
      text2: 'haha',
      height: 0,
      weight: 0,
      BMI: 0,
      result: ''
      //若此處將text指定為固定值  則畫面上只能限是此質無法進行改變
      //因此如果你要讓你的textinput可以更改上面的職的話須加入onchangetext    
    }
  }
  onPress = () => {
    console.log('Hello Corn~')
  }
  
  onPress2 = () => {
    var h = this.state.height / 100
    var w = this.state.weight
    var bmi = w / (h * h)
    var result = ''
    if (bmi > 25)
      result = '有點重阿'
    else if (bmi <= 25 && bmi > 20)
      result = '臭魯蛇'
    else 
      result = '幹!你還是人嗎?'
    this.setState({BMI: bmi})
    this.setState({result})
  }
  // onPress can't work
  // The way to solve it is to open Debug JS Remotely on the virtual machine
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
        
        {/*You can calculate you BMI here*/}
        <Text>
          Your Height :
        </Text>
        <TextInput 
          style={{backgroundColor: 'black', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(height) => this.setState({height})} value={`${this.state.height}`}></TextInput>
          
        <Text>
          Your Weight :
        </Text>
        <TextInput 
          style={{backgroundColor: 'gray', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(weight) => this.setState({weight})} value={`${this.state.weight}`}></TextInput>
        <Text> Your BMI is  {`${this.state.BMI}`}</Text>
        <Text>{`${this.state.result}`}</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text onPress={this.onPress2}>
            Press me
          </Text>
          {/*TouchableOpacity is the button in react native*/}
        </TouchableOpacity>
        
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
