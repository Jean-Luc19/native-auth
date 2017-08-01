import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfZlxSRAUi_kI3acd9druwKf7VlCikv64',
      authDomain: 'auth-7816b.firebaseapp.com',
      databaseURL: 'https://auth-7816b.firebaseio.com',
      projectId: 'auth-7816b',
      storageBucket: 'auth-7816b.appspot.com',
      messagingSenderId: '724296661770'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;
      default:
       return (
         <View style={styles.spinnerStyle}>
           <Spinner size={'large'} />
         </View>
       );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    marginTop: 200
  }
};

export default App;
