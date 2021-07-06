import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Ingredient = () => {


    const [ingredients, setIngredients] = useState([
        {
            id: 1,
            title: "Sugar 1 spoon"
        },
        {
            id: 2,
            title: "15ml water"
        },
        {
            id: 3,
            title: '1 teaspoon sugar.'
        },
        {
            id: 4,
            title: '7 cups all-purpose flour, plus more for dusting.'
        },
        {
            id: 5,
            title: '6 tablespoons extra virgin olive oil, plus more for greasing.'
        }
    ]);

    return (
        <View>
            <FlatList
                data={ingredients}
                renderItem={({ item, index, separators }) => (
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 8,
                            paddingHorizontal: 12,

                        }}
                    >
                        <Icon
                            name={'hand-o-right'}
                            size={24}
                        />
                        <View style={{ backgroundColor: 'white', marginLeft: 10,marginRight:6, borderRadius: 12, padding: 6 }}>
                            <Text style={{ textAlign: 'left' }}>{item.title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Ingredient

const styles = StyleSheet.create({})
