import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

import { fetchMyMeetups } from './actions';
import Colors from './../../../constants/Colors';
import styles from './styles/HomeScreen';

// @connect(state => ({
//     myMeetups: state.home.myMeetups,
//   }),
//   { fetchMyMeetups }(HomeScreen)
// )

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Eric Besnier, lui-même !',
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="home"
        size={25}
        color={tintColor}
      />
    ),
  };

  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    console.log('HomeScreen/render', this.props.myMeetups);
    const {
      myMeetups: {
        isFetched,
        data,
        error,
      },
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }

    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer} />
        <MyMeetupsList meetups={data} />
      </View>
    );
  }
}

// Le container a pour but de faire le lien entre le state géré par Redux et les props du component.
// Il définit également des fonctions qui dispatchent des actions afin de mettre à jour le state.
//
// - mapStateToProps a pour rôle de retourner le state qui sera “attaché” aux props du component.
// - mapDispatchToProps, quant à elle, définit plusieurs fonctions qui seront accessible via les props du component.
// Celles-ci ont pour but de dispatcher une action.
// enfin, on “ connecte “ le container à son component.
// Le state et les fonctions définies plus haut seront ainsi accessibles par le component “connecté” (ici HomeScreen) via ses props

const mapStateToProps = (state) => ({
  myMeetups: state.home.myMeetups,
});

const mapDispatchToProps = () => fetchMyMeetups;

const Container = connect(
  state => mapStateToProps(state),
  { fetchMyMeetups }
)(HomeScreen);

export default Container;

// export default connect(
//   state => ({
//     myMeetups: state.home.myMeetups,
//   }),
//   { fetchMyMeetups })(HomeScreen);
