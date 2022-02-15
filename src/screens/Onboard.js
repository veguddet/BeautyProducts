import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import {COLORS, icons, images} from '../constants';

const Onboard = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar 
         barStyle='dark-content'
         backgroundColor={COLORS.homeBackground}
         translucent={false}
        />
      <Image source={images.Product5} style={styles.banner} />
      <Text style={styles.textBanner}>
        {'Let Us Reward \nYou, '}
        <Text style={styles.textBannerBold}>{'Naturally!!'}</Text>
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonContainer}>
        <Image source={icons.next} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.homeBackground,
  },
  banner: {
    width: '100%',
    height: '60%',
    // marginTop: '20%',
    // resizeMode: 'contain',
  },
  textBanner: {
    textAlign: 'center',
    fontSize: 30,
    color: COLORS.black,
    lineHeight: 50,
    letterSpacing: 0.5,
    marginTop: '4%',
  },
  textBannerBold: {
    fontWeight: 'bold',
   // fontSize: 34,
    color: COLORS.darkGreen,
  },
  buttonContainer: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.blackColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonIcon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
});

export default Onboard;
