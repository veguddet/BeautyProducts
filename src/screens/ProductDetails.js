// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Offers = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Offers Screen</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create ({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
// export default Offers;

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { COLORS, icons, images, dummyData } from '../constants'

const ProductDetails = ({route,navigation}) => {
 // const {name, tags, size, image, price, reviews} = route.params.item

 const renderTags = (item,index) => {
     return(
         <View
         style={{
             height: 100,
             width: 100,
             backgroundColor: COLORS.whiteColor,
             borderRadius: 30,
             marginLeft: index == 0 ? 0 : 20,
             alignItems: 'center',
             justifyContent: 'center',
         }}
        >
            <Image
            source={item.image}
            style={{
                height: 70,
                width: 70,
                resizeMode: 'contain',
            }}
            />
         </View>
     )
 }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <Image 
                      source={icons.back2}
                      style={styles.backArrow}
                    />
                </TouchableOpacity>
                <Image 
                    source={icons.menu3}
                    style={styles.menu}
                />
            </View>
            <Image 
            source={images.Product1}
            style={styles.productImage}
            />
            <View
            style={styles.listContainer}
            >
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dummyData.tags}
                renderItem={({ item,index }) => renderTags(item,index)}
                keyExtractor={(item,index) => index.toString()}
                />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.productDetailContainer}>
                    <View style={styles.productNameContainer}>
                        <Text style={styles.productName}>Beardo Facewash</Text>
                        <Text style={styles.productSize}>Size: 125ml</Text>
                    </View>
                    <Text style={styles.productReview}>34 Reviews</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.productPrice}>$9.99</Text>
                    <TouchableOpacity
                    style={styles.cartButton}
                    >
                        <Text style={styles.cartButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    backArrow: {
        height: 40,
        width: 40,
    },
    menu: {
        height: 35,
        width: 35,
    },
    productImage: {
        marginTop: '5%',
        height: '50%',
        width: '100%',
       // resizeMode: 'contain',
    },
    listContainer: {
        width: '100%',
        top: 20,
        alignItems: 'center',
    },
    bottomContainer: {
        width: '100%',
        backgroundColor: COLORS.whiteColor,
        padding: 30,
        flex: 1,
        marginTop: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    productDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productNameContainer: {},
    productName: {
        fontSize: 20,
        color: COLORS.blackColor,
        fontWeight: '500',
    },
    productSize: {
        fontSize: 15,
        color: COLORS.greyColor,
        top: 10,
    },
    productReview: {
        fontSize: 15,
        color: COLORS.blackColor,
       // fontWeight: '500',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       // top: 40,
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 27,
        fontWeight: '700',
        color: COLORS.blackColor,
    },
    cartButton: {
        height: 50,
        width: '50%',
        backgroundColor: COLORS.blackColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartButtonText: {
        fontSize: 18,
        color: COLORS.whiteColor,
    },
})

export default ProductDetails
