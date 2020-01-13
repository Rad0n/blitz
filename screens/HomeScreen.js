import React, { Component } from 'react';
import {View , Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class HomeScreen extends Component{
  render(){
    return(

      ///<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('./crop.png')} style={styles.backgroundImage} blurRadius={3} imageStyle={{ opacity: 0.5 }} >
        <View style={{flex:2,     justifyContent: 'center'}}>
          <Text style={styles.title}>CropDex</Text>
        </View>
        
        <View style={{flex:1}}>
          <TouchableOpacity onPress={this.chooseImage} style={styles.button}
            onPress={() => this.props.navigation.navigate('Database')}>
            <Text style={styles.buttonText}>Database</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.chooseImage} style={styles.button}
            onPress={() => this.props.navigation.navigate('Select Image')}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(00,0,0,.9)'
  },
  button: {
    
    width: Dimensions.get('window').width/1.5,
    height: Dimensions.get('window').width /10,
    backgroundColor:'white',
    borderRadius: 20,
    justifyContent: "center",
    margin: 5,
    borderWidth:2,
    borderColor:'white',
    backgroundColor:'black'

  },

  buttonText: {
    textAlign: 'center',
    fontFamily: "Arial Rounded MT Bold",
    color:"white",
   
  },

  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: Dimensions.get('window').width /10,
    color:'white'
  }

})


