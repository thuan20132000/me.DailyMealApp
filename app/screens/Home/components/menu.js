import React, { useRef, useEffect, useState, useMemo } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Animated } from 'react-native'
import { COLORS } from '../../../constants/theme'

const MenuTab = ({ categoriesList, onSelect, selectedCategory = null }) => {

    const [selectedItem, setSelectedItem] = useState(null);



    const _onItemPress = (item) => {

        setSelectedItem(item);

    }


    useEffect(() => {
        setSelectedItem(categoriesList[0]);
    }, [])


    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}

        >
            {
                categoriesList.length > 0 &&
                categoriesList.map((e) => {

                    if (selectedItem?.id == e.id) {

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
                                            borderBottomColor: COLORS.primary,
                                            marginHorizontal: 6,
                                        },

                                    ]}
                                >
                                    <Text>{e.name}</Text>
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
                                    <Text>{e.name}</Text>
                                </Animated.View>

                            </TouchableOpacity>

                        )
                    }


                }
                )
            }


        </ScrollView>
    )
}


export default MenuTab


const styles = StyleSheet.create({})
