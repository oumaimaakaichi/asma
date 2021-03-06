import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import OnBoardScreenL from './scrren3';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'whitesmoke'}}>
      <StatusBar translucent  />

      {/* Onboarding Image */}
      <Image
        source={require('../assets/logo1.jpg')}
        style={styles.image}
      />
      

      {/* Indicator container */}
      

      {/* Title and text container */}
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>Welcome to Aghsalni</Text>
          
        </View>

        {/* Text container */}
        <View style={{marginTop: 10}}>
          
          <Text style={styles.textStyle}>visit in just a few clicks</Text>
        </View>
      </View>
<br/>
      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        {/* button */}
        <Pressable onPress={() => navigation.navigate('OnBoardScreenL')}>
          <View style={styles.btn}>
            <Text style={{color: 'white'}}><b>Get Started</b></Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    
    height: 400,
    width: '100%',
    borderBottomLeftRadius: 150,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: 'black',
  },
  btn: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 30, fontWeight: 'bold' ,  fontFamily: 'monospace'},
  textStyle: {fontSize: 15, color: 'grey' ,fontWeight: '500'},
});
export default OnBoardScreen;