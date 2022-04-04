import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';


const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: 'white'}}>
        <Text style={{...style.title, color: 'primary'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: 'white', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: 'primary',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};