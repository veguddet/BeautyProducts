import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, dummyData, icons, images} from '../constants';

const Home = ({naviagtion}) => {
  
  const renderCat = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: index == 0 ? 0 : 60,
          justifyContent: 'center',
          height: 40,
          //     backgroundColor: COLORS.whiteColor,
          //     borderRadius: 20,
          //     marginLeft: 20,
          //    justifyContent: 'center',
          // padding: 20,
        }}>
        <Text
          style={{
            // fontWeight: '400',
            fontSize: index == 0 ? 22 : 18,
            color: index == 0 ? COLORS.textColor : COLORS.greyColor,
          }}>
          {item.label}
        </Text>
        {index == 0 && (
          <View
            style={{
              width: '100%',
              height: 0.8,
              marginTop: 8,
              backgroundColor: COLORS.blackColor,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  const renderProduct = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.whiteColor,
          borderRadius: 20,
          marginLeft: 20,
        }}>
        <Image
          source={item.image}
          style={{
            height: '65%',
            width: 250,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // marginTop: 20,
            // resizeMode: 'contain',
          }}
        />
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 22,
              color: COLORS.DEFAULT_BLACK,
              fontWeight: '500',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.greyColor,
              marginTop: 5,
            }}>
            {item.description}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.DEFAULT_BLACK,
              marginTop: 5,
              fontWeight: '700',
            }}>
            {item.price}
          </Text>
        </View>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: COLORS.blackColor,
            borderRadius: 30,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 18,
            right: 18,
          }}>
          <Image
            source={icons.bag1}
            style={{
              height: 25,
              width: 25,
              tintColor: COLORS.DEFAULT_WHITE,
              resizeMode: 'contain',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderPopular = (item, index) => {
    return (
      <TouchableOpacity
          // onPress={() => naviagtion.navigate('Product')}
        style={{
          borderRadius: 20,
          marginLeft: 20,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <Image
          source={item.image}
          style={{
            height: 80,
            width: 80,
            backgroundColor: COLORS.DEFAULT_WHITE,
            borderRadius: 20,
            marginTop: 10,
          }}
        />
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.DEFAULT_BLACK,
              fontWeight: '500',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.greyColor,
              marginTop: 5,
            }}>
            {item.description}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.DEFAULT_BLACK,
            marginTop: 5,
            marginLeft: 30,
            fontWeight: '700',
          }}>
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.homeBackground}
        translucent={false}
      />
      <View style={styles.header}>
        <Image source={images.UserProfile6} style={styles.profile} />
        <View style={{flexDirection: 'row'}}>
          <Image source={icons.search} style={styles.search} />
          <Image source={icons.menu5} style={styles.menu} />
        </View>
      </View>
      <View style={styles.catContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyData.Category}
          renderItem={({item, index}) => renderCat(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.productContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyData.Products}
          renderItem={({item, index}) => renderProduct(item, index)}
          keyExtractor={(item, index) => index.toString()}
          // keyExtractor={item => `${item.id}`}
        />
      </View>
      <View style={styles.popularContainer}>
        <Text style={styles.popularHeader}>{'Popular'}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData.Products}
          renderItem={({item, index}) => renderPopular(item, index)}
          keyExtractor={(item, index) => index.toString()}
          // keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems: 'center',
    backgroundColor: COLORS.homeBackground,
  },
  header: {
    width: '100%',
    paddingTop: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  search: {
    height: 25,
    width: 25,
  },
  menu: {
    height: 25,
    width: 25,
    marginLeft: 25,
  },
  catContainer: {
    height: 40,
    marginTop: 20,
    paddingLeft: 20,
  },
  productContainer: {
    width: '100%',
    height: '55%',
    marginTop: 30,
    paddingRight: 20,
  },
  popularContainer: {
    flex: 1,
    width: '100%',
    // height: '30%',
    // backgroundColor: COLORS.DEFAULT_WHITE,
  },
  popularHeader: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.DEFAULT_BLACK,
  },
});

export default Home;
