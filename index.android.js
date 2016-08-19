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
  TouchableOpacity,
  //ScrollView
  Image
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
      result: '',
      BMI_list: [],
      result_list: [],
      input_num: '',
      bgc: true
      //若此處將text指定為固定值  則畫面上只能限是此質無法進行改變
      //因此如果你要讓你的textinput可以更改上面的職的話須加入onchangetext    
    }
  }
  onPress = () => {
    console.log('Hello Corn~')
    this.setState({bgc: !this.state.bgc})
  }
  
  // when you press this button it will calculate the bmi for you
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
      <View style={[
        styles.container, 
        this.state.bgc && styles.button1, 
        !this.state.bgc && styles.button2
        ]}>
        
        {/*buttons to change the background color*/}
        {/*TouchableOpacity is the button in react native*/}
        <TouchableOpacity onPress={this.onPress} style={styles.button_bg}>
          <Text style={{color: 'red', textAlign: 'center'}}>
            Change background to red
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.onPress} style={styles.button_bg}>
          <Text style={{color: 'cyan', textAlign: 'center'}}>
            Change background to cyan
          </Text>
        </TouchableOpacity>
        
        <Text>
          React native start
        </Text>
        
        {/*two input box for us to type in some text*/}
        <TextInput 
          style={{backgroundColor: 'black', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(text) => this.setState({text})} value={this.state.text}></TextInput>
        <Text> Hello! {this.state.text} {this.state.text2} ~ </Text>
        <TextInput 
          style={{backgroundColor: 'gray', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(text2) => this.setState({text2})} value={this.state.text2}></TextInput>
        <Text> Hello! {this.state.text2} ~</Text>{/*Show the text*/}
        
        {/*You can calculate you BMI here*/}
        <Text>
          Your Height :
        </Text>
        <TextInput 
          style={{backgroundColor: 'black', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(height) => this.setState({height})} value={`${this.state.height}`}>
        </TextInput>
          
        <Text>
          Your Weight :
        </Text>
        <TextInput 
          style={{backgroundColor: 'gray', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(weight) => this.setState({weight})} value={`${this.state.weight}`}>
        </TextInput>
        
        <Text> Your BMI is  {`${this.state.BMI}`}</Text>
        <Text>{`${this.state.result}`}</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text onPress={this.onPress2}>
            Press me
          </Text>
        </TouchableOpacity>
        
        {/*
        not finish yet
        <ScrollView contentContainerStyle={styles.contentContainer}></ScrollView>
        */}
        
        {/*Show picture*/}
        <TextInput 
          style={{backgroundColor: 'gray', color: 'white', textAlign: 'center', width: 120, height:40}}
          onChangeText = {(input_num) => this.setState({input_num})} value={`${this.state.input_num}`}></TextInput>
        <Text></Text>
        <Image
          style={styles.picture}
          source={{uri: `https://pokeadvisor.com/img/mon/${this.state.input_num}.png`}}
        />
        
        {/*introduction of react nation*/}
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
  picture: {
    width: 90, 
    height: 70
  },
  button1: {
    backgroundColor: 'red',
  },
  
  button_bg: {
    backgroundColor: 'purple',
    height: 40,
    width: 120,
    borderRadius: 30,
    borderColor: 'white'
  },
  
  button2: {
    backgroundColor: 'cyan'
  }
});

AppRegistry.registerComponent('FirstPNApp', () => FirstPNApp);
