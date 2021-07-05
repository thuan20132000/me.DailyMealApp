import React, { useRef, useEffect, useState, useMemo } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated, TouchableHighlight, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { COLORS } from '../../../constants/theme'

const MenuTab = ({ categoriesList, onSelect, selectedCategory = null,setSelectedCategory }) => {


    const _refAnimated = useRef(new Animated.Value(0)).current;
    const scrollX = useRef(new Animated.Value(0)).current;
    const _refScroll = useRef();

    const _onItemPress = (item) => {
        setSelectedCategory(item)
    }

    useEffect(() => {
        Animated.sequence([
            Animated.timing(_refAnimated,
                {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: false
                }),
            Animated.timing(_refAnimated,
                {
                    toValue: 1,
                    duration: 280,
                    useNativeDriver: false
                })
        ]).start();
    }, [selectedCategory])



    // scrollX.addListener((val) => {
    //     console.warn(val)
    // })


    return (
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={_refScroll}
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
            scrollEventThrottle={16}
            pagingEnabled

        >
            {
                categoriesList.length > 0 &&
                categoriesList.map((e) => {

                    if (selectedCategory?.id == e.id) {
                        let color = _refAnimated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [COLORS.lightGray, COLORS.primary]
                        })

                        let size = _refAnimated.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '100%']
                        })
                        let fontSize = _refAnimated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [16, 18]
                        })

                        return (
                            <TouchableOpacity
                                key={e.id.toString()}

                                onPress={() => _onItemPress(e)}
                                activeOpacity={0.8}
                                onLayout={(event) => {
                                    event.target.measure(
                                        (x, y, width) => {
                                            let screenWidth = Dimensions.get('screen').width;
                                            _refScroll.current.scrollTo({ x: x - screenWidth / 2, animated: true })

                                        },
                                    );
                                }}
                            >
                                <Animated.View
                                    style={[
                                        {
                                            padding: 8,
                                            marginHorizontal: 6,
                                        },

                                    ]}
                                >
                                    <Animated.Text style={{ color: COLORS.primary, fontSize: fontSize, fontWeight: '500' }}>
                                        {e.name}
                                    </Animated.Text>
                                    <Animated.View
                                        style={{
                                            backgroundColor: 'coral',
                                            height: 2,
                                            width: size,
                                            marginVertical: 6
                                        }}
                                    />
                                </Animated.View>

                            </TouchableOpacity>

                        )

                    } else {
                        return (
                            <TouchableOpacity
                                key={e.id.toString()}

                                onPress={() => _onItemPress(e)}
                            >
                                <Animated.View
                                    style={[
                                        {
                                            padding: 8,
                                            borderBottomWidth: 2,
                                            borderBottomColor: COLORS.transparent,
                                            marginHorizontal: 6
                                        },

                                    ]}
                                >
                                    <Text style={{ color: COLORS.black }}>{e.name}</Text>
                                </Animated.View>

                            </TouchableOpacity>

                        )
                    }


                }
                )
            }


        </Animated.ScrollView>
    )
}


export default MenuTab


const styles = StyleSheet.create({})
