import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../../../constants/theme'

const Instruction = () => {


    const [instructions, setInstructions] = useState([
        "“Bloom” the yeast by sprinkling the sugar and yeast in the warm water. Let sit for 10 minutes, until bubbles form on the surface.",
        "In a large bowl, combine the flour and salt. Make a well in the middle and add the olive oil and bloomed yeast mixture. Using a spoon, mix until a shaggy dough begins to form.",
        "Once the flour is mostly hydrated, turn the dough out onto a clean work surface and knead for 10-15 minutes. The dough should be soft, smooth, and bouncy. Form the dough into a taut round.",
        "Grease a clean, large bowl with olive oil and place the dough inside, turning to coat with the oil. Cover with plastic wrap. Let rise for at least an hour, or up to 24 hours.",
        "Punch down the dough and turn it out onto a lightly floured work surface. Knead for another minute or so, then cut into 4 equal portions and shape into rounds.",
    ])

    return (
        <View>
            <FlatList
                data={instructions}
                renderItem={({ item, index, separators }) => (
                    <View
                        style={{
                            display: 'flex',
                       
                            width: '96%',
                            backgroundColor: COLORS.white,
                            marginVertical: 4,
                            alignSelf:'center',
                            padding:8,
                            borderRadius:6

                        }}
                    >
                        <Text style={{ textAlign: 'left',fontWeight:'500' }}>{index + 1}.  {item}</Text>
                    </View>
                )}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default Instruction

const styles = StyleSheet.create({})
