import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
    TouchableHighlight
} from 'react-native';
import ToolBar from './common/ToolBar'
import Config from './Config'

export default class Register extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      data:null,
    };
  }

  _register(){
      let {username,password} = this.state
      if(username==''||username==undefined){
          ToastAndroid.show('用户名不能为空', ToastAndroid.SHORT);
          return;
      }

      if(password==''||password==undefined){
          ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
          return;
      }
     // 需要检验
     this.fetchData();
  }

  // 获取数据方法
  fetchData() {
    const {username,password} = this.state
      fetch(Config.registerUrl,{
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`username=${username}&password=${password}`
      })
      .then((response) => response.json())
      .then((responseData) =>{
        console.log(responseData)
        if(responseData.code === 0){
          ToastAndroid.show('注册成功', ToastAndroid.SHORT)

          this.props.navigator.push(
            {
              id:'login',
              title:'登录',
              params: {
                username: username
              }
            }
          )

        }else{
          ToastAndroid.show(responseData.msg, ToastAndroid.SHORT)
        }
     // }) {


// .then((response) => response.json())
//         .then((responseData) => {
           // console.log(response)
            //const authToken = response.headers.get("Auth-Token");
            //if(authToken){
              // Alert.alert('',authToken);
              // storage.save({
              //   key: 'loginState',  //注意:请不要在key中使用_下划线符号!
              //   rawData: { 
              //     from: 'some other site',
              //     userid: this.state.username,
              //     token: authToken
              //   },
              //   // 如果不指定过期时间，则会使用defaultExpires参数
              //   // 如果设为null，则永不过期
              //   expires: 1000 * 3600
              // });  

              // this.props.navigator.push({
              //       title: '首页',
              //       id: 'main'
              // })

            // }else{
            //   Alert.alert('','错误');
            // }
      })
      .done();
    }



  render() {
    return (
      <View>
          <ToolBar navigator={this.props.navigator} route={this.props.route}/>

          <View>
            <TextInput placeholder='用户名' placeholderTextColor="#aaa"
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}/>

            <TextInput placeholder='密码' placeholderTextColor="#aaa"
             secureTextEntry={true}
             value={this.state.password}
             onChangeText={(password) => this.setState({password})}/>

              <View style={{marginTop: 32,marginLeft: 16,marginRight:16,elevation: 4,backgroundColor:'#ff9800'}}>
                  <TouchableHighlight
                      onPress={() => this._register()}
                      underlayColor={'#999'}
                      style={{height: 48,alignItems: 'center',justifyContent:'center'}}>
                      <Text style={{fontSize: 16,color: 'white',fontWeight: '300',}}>注        册</Text>
                  </TouchableHighlight>
              </View>

          </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'red',
    height: 56,
    elevation: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    backgroundColor: "#666",
    height: 40,
    borderRadius: 8,
    marginLeft:10,
    marginRight:10,
    marginTop:30,      
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff'
  },
  options: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop:30
  },
  unlogin: {
      color: '#63B8FF',
      marginLeft: 10
  },
  newUser: {
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'row',
      textAlign: 'right',
      marginRight: 10,
      color: '#63B8FF'
  }
});