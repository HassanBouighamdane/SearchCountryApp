import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageDeRecherche from './PageDeRecherche'
import ResultatsDeRecherche from './ResutlatsDeRecherche';


const Pile=createStackNavigator();
function MaPile(){
  return (
  <Pile.Navigator>
    <Pile.Screen name='Accueil' component={PageDeRecherche}/>
    <Pile.Screen name='Resultats' component={ResultatsDeRecherche}/>
  </Pile.Navigator>);
}

export default class App extends Component<Props>{
  render(){
   // return React.createElement(Text,{style:styles.description},"Rechercher des pays!");
   return(
    <React.StrictMode>
      <NavigationContainer>
    <MaPile/>
   </NavigationContainer>
    </React.StrictMode>
   );

  }
}

const styles = StyleSheet.create({
  description:{
    fontSize:18,
    textAlign:'center',
    color:'#656565',
    marginTop:65,
  },
});
