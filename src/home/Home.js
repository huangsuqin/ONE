import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Home from './Second'
import First from './First'
import Third from './Third'
import ToolBar from '../common/ToolBar'
export default class Find extends Component {

  constructor(props) {
    super(props);
  //this._onPressButton = this._onPressButton.bind(this);
    this.state = {};
  }

  /**
   *配置跳转路由
   */
    renderSceneAndroid(route, navigator){

      console.log(route)
      console.log(route.id)

     _navigator = navigator;
    

       
          
      if(route.id === 'main'){
          return (
             <First navigator={navigator} route={route}/>
       )
      }else if(route.id === 'second'){
       return (
          <Home navigator={navigator} route={route}/>
          )
      }else if(route.id === 'third'){
       return (
          <Third navigator={navigator} route={route}/>
          )
      }
          
     
  }

  render() {
    return (
       <Navigator
         initialRoute={{ title: '首页', id:'main'}}
         renderScene={this.renderSceneAndroid}
        />
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

