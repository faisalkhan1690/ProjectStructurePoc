/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// import { inject, observer } from 'mobx-react/native';

// @inject('HomeScreenStore')
// @observer
class HomeScreenComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      countValue:0
    }
  }
  

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.rootStyle}>

            <TouchableOpacity
               onPress={()=> this.getNewValue()}>
              <Text>Click to get Value</Text>
            </TouchableOpacity>
            

            <Text>This is the value={this.state.countValue}</Text>
            </View>
        </SafeAreaView>
    );
  }

  getNewValue(){
    this.setState({countValue:this.state.countValue+1});
  }
};

const styles = StyleSheet.create({
  rootStyle: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default HomeScreenComponent;