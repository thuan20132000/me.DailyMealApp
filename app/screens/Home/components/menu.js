import React, { useRef, useEffect, useState, useMemo } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated, TouchableHighlight, TouchableWithoutFeedback, Dimensions, FlatList } from 'react-native'
import { COLORS } from '../../../constants/theme'

const MenuTab = ({ categoriesList, onSelect, selectedCategory = null, setSelectedCategory }) => {


    const _refAnimated = useRef(new Animated.Value(0)).current;
    const scrollX = useRef(new Animated.Value(0)).current;
    const _refScroll = useRef();

    const _onItemPress = (item, index) => {
        setSelectedCategory(item);
        _refScroll.current.scrollToIndex({ index: index, animated: true, viewPosition: 0.5 })
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
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={_refScroll}
            data={categoriesList}
            scrollEventThrottle={16}
            pagingEnabled

            renderItem={({ item, index }) => {
                if (selectedCategory?.id == item.id) {
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
                            key={item.id.toString()}

                            onPress={() => _onItemPress(item, index)}
                            activeOpacity={0.8}

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
                                    {item.name}
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
                            key={item.id.toString()}
                            onPress={() => _onItemPress(item, index)}
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
                                <Text style={{ color: COLORS.black }}>{item.name}</Text>
                            </Animated.View>

                        </TouchableOpacity>

                    )
                }


            }
            }

        />



    )
}


export default MenuTab


const styles = StyleSheet.create({})
