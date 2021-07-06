import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../constants/theme'

const Review = () => {


    const [reviews, setReviews] = useState([
        {
            id: 1,
            review: 'It is very good.',
            image_url: "iamge",
            rate: 5,
            user: {
                name: "Alex",
                avatar_url: 'avatar url',

            },
            created_at: new Date(),
            updated_at: new Date()
        }
    ])


    return (
        <View>
            <FlatList
                data={reviews}
                renderItem={({ item, index, separators }) => (
                    <View
                        style={{
                            display: 'flex',

                            width: '96%',
                            backgroundColor: COLORS.white,
                            marginVertical: 4,
                            alignSelf: 'center',
                            padding: 8,
                            borderRadius: 6

                        }}
                    >
                        <Text style={{ textAlign: 'left', fontWeight: '500' }}>{index + 1}.  {item}</Text>
                    </View>
                )}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default Review

const styles = StyleSheet.create({})
