import React from 'react';
import {Text, StyleSheet, View, Image , Pressable} from 'react-native';

import logo from '../assets/ll.png'
import logo1 from '../assets/p.jpg'
const OnBoardScreenL = () => {
  return (
    

    
    <View style={{
      
      flexDirection: "row"
    }}> 
   <view style={{
      left:0,
      flexDirection: "cols",
      alignItems:'center',
      alignContent:'center',
      backgroundColor:'whitesmoke'
    }}>
      <Text  style={
          {
            alignItems:'center',
            textAlign:'center',
            marginStart:20
          }

      }><b><h2>Client</h2></b></Text><br/>
       <Image source={logo}  style={{
      width: 150,
      height: 150,
     
      position: "center",
      justifyContent: 'space-between',
      left: 0,
      marginTop: 50,}}/>  
      <Pressable onPress={() => navigation.navigate()}>
          <View style={styles.btn}>
            <Text style={{color: 'white'}}><b>Enter</b></Text>
          </View>
        </Pressable>
    </view>
     <view style={{
       right: 0,
      flexDirection: "cols",
      backgroundColor:'white'
    }}>
      <Text style={
          {
            alignItems:'center',
            textAlign:'center',
            marginStart:20
          }

      }><b><h2>Station Lavage</h2></b></Text><br/>
       <Image source={logo1}  style={{
    width: 150,
    marginStart:10,
    height: 150,
    
    position: "center",
    justifyContent: 'space-between',
    right: 0,
    marginTop: 50,}}/>
    <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.btn}>
            <Text style={{color: 'white'}}><b>Enter</b></Text>
          </View>
        </Pressable>
       </view>  
   
  </View>
      
   
  );
};

const styles = StyleSheet.create({
  logo:{
    width:100,
    height:100,
  },
  btn: {
    height: 50,
    width: 150,
    marginStart:20,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd:20,
    marginBottom:30
  },
  logoContainer:{
    alignContent:'flex-start',
    flexDirection:'row',
    alignItems:'center',
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    marginBottom:20
    },
  
});

export default OnBoardScreenL;