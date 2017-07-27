import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfZlxSRAUi_kI3acd9druwKf7VlCikv64',
      authDomain: 'auth-7816b.firebaseapp.com',
      databaseURL: 'https://auth-7816b.firebaseio.com',
      projectId: 'auth-7816b',
      storageBucket: 'auth-7816b.appspot.com',
      messagingSenderId: '724296661770'
    })
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
