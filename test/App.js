/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import placeImage from './src/assets/image.jpg';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }
  placeNameChangedHandler = val => {
    this.setState ({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
              key: Math.random(),   
              name: prevState.placeName,
              image: {
                uri: "https://media.wired.com/photos/5b2991d80da4a86262ab0b87/master/pass/GettyImages-954876578.jpg"
              } 
            })
      }
    })
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key != key;
        })
      }
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer} >
          <PlaceInput 
              onChangeText={this.placeNameChangedHandler}
              value={this.state.placeName} />
          <Button
              style={styles.placeButton}
              title="Add"
              onPress={this.placeSubmitHandler} />
        </View>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeButton: {
    width: "30%"
  },
  
});
