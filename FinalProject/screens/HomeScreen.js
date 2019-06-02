import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, FlatList, ScrollView, Button, Image } from 'react-native';
import TabBar from '../components/TabBar';

export default class ProfileScreen extends Component {

	static navigationOptions = {
    header: null
  };

  state = {
    firstName: null,
    lastName: null,
    email: null,
    profilePictureUri: null,
    dogImages: []
  };

  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }

  getUser = async () => {
    try {
      const session = JSON.parse(await AsyncStorage.getItem('session'));
      const { navigation } = this.props;

      if (session === null) {
        navigation.navigate('LoginScreen');
        return;
      }

      this.setState({
        firstName: session.firstName,
        lastName: session.lastName,
        email: session.email,
        profilePictureUri: session.profilePictureUri
      });
    } catch (error) {
      alert('Ocurrió un error al cargar los datos.');
    }
  };

  async getRandomDogImages() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random/30');
    let responseJson = await response.json();
    return responseJson.message;
  }

  componentDidMount() {
		this.getUser();

    this.getRandomDogImages()
        .then(dogImages => {
            this.setState({
              dogImages: dogImages
            });
        }).catch(error => {
            alert('Ocurrió un error al cargar las imágenes.');
        });
  }

  _renderDogImage(item, index) {
    return (<View key={index}>
      <Image
        style={styles.imgDog}
        source={{uri: item}}
      />
    </View>);
  }

  _keyExtractor = (item, index) => index;

	render() {
		return (
      <View style={styles.container}>
        <Text style={styles.lblHome}>Inicio</Text>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <FlatList 
            data={this.state.dogImages}
            numColumns={3}
            renderItem={({item, index}) => this._renderDogImage(item, index)}
            keyExtractor={this._keyExtractor}
          />
        </ScrollView>
        <TabBar selected="home"/>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lblHome: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15
  },
  scrollContentContainer: {
		backgroundColor: '#fff',
		paddingVertical: 5,
    paddingHorizontal: 5
	},
  imgDog: {
    flex: 1,
    width: 86, 
    height: 86,
    borderRadius: 8,
		margin: 15
  }
});