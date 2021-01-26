import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen:HomeScreen},
  WriteStory: {screen:WriteStory},
  ReadStory: {screen:ReadStory},
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomeScreen"){ 
        return(<Image style={{ width: 32, height: 32 }}  source={require('./assets/home.png')} />)
      } else if(routeName === "WriteStory"){ 
        return(<Image style={{ width: 32, height: 32 }}  source={require('./assets/write.png')} />)
      }else if(routeName === "ReadStory"){ 
        return(<Image style={{ width: 32, height: 32 }}  source={require('./assets/read.png')} />)
      }
    }
  })
});

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator },
});


const AppContainer = createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
