import React, { useRef } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import MaskedView from '@react-native-community/masked-view'
import { recipes } from '../../../dummy/Recipe';
import { COLORS, FONTS } from '../../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { StackActions, useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const ITEM_SIZE = 200 * 0.72;
const SPACE_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.6;

const CardItem = ({ item, translateY,onPress }) => {
    return (
        <Animated.View
            style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: width - 100,
                height: 480,
                marginHorizontal: 20,
                transform: [
                    {
                        translateY: translateY
                    }
                ],
                backgroundColor: COLORS.white,
                borderRadius: 25,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.50,
                shadowRadius: 12.35,

                elevation: 19,
                paddingBottom: 22

            }}
        >
            <Image
                source={{
                    uri: item?.imageURL
                }}
                style={{
                    width: '100%',
                    height: '60%',
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                }}
                resizeMode={'cover'}
            />
            <View
                style={{
                    marginVertical: 8,
                    alignItems: 'center',
                    padding: 12
                }}
            >
                <View>
                    <Text numberOfLines={2} style={{ textAlign: 'center', ...FONTS.h3 }}>{item?.name}</Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 8
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 5
                        }}
                    >
                        <Icon
                            name="clock-fast"
                            size={24}
                            style={{
                                marginRight: 5
                            }}
                        />
                        <Text>54 phút</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 5

                        }}
                    >
                        <Icon
                            name="account"
                            size={24}
                            style={{
                                marginRight: 5
                            }}
                        />
                        <Text>Alasa</Text>
                    </View>
                </View>
                <View>
                    <Text
                        numberOfLines={3}
                    >{item?.steps}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 8,
                            borderRadius: 22,
                            marginVertical: 6
                        }}
                        onPress={onPress}
                    >
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Xem công thức</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Animated.View>
    )
}


const BodySlider = ({ data }) => {

    const navigation = useNavigation();

    const scrollX = useRef(new Animated.Value(0)).current;

    const _onNavigateToDetail = (item) => {
        navigation.dispatch(
            StackActions.push('RecipeDetail',{item})
        )
    }
    return (

        <View
            style={{
                top: 20
            }}
        >
            <Animated.FlatList
                horizontal={true}
                data={data}
                keyExtractor={(item) => item.id.toString()}

                decelerationRate={0}
                snapToInterval={width - 60}
                contentContainerStyle={{
                    marginTop: 100,
                    alignItems: 'center'
                }}

                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    // scrollX = e.nativeEvent.contentOffset.x
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }], {
                    useNativeDriver: false
                }
                )}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * (width - 80),
                        index * (width - 80),
                        (index + 1) * (width - 80)
                    ]
                    const translateY = scrollX.interpolate({
                        inputRange: inputRange,
                        outputRange: [0, -50, 0]
                    })

                    return (
                        <CardItem
                            item={item}
                            translateY={translateY}
                            onPress={()=>_onNavigateToDetail(item)}
                        />
                    )
                }}
            />
        </View>




    )
}

export default BodySlider

const styles = StyleSheet.create({})
