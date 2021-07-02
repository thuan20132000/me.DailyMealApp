import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import icons from '../../constants/icons'
import { COLORS, SIZES } from '../../constants/theme'

const Header = ({title = `Bạn muốn nấu món gì hôm nay?`}) => {
    return (
        <View
            style={{
                display:'flex',
                height:50,
                flexDirection:'row',
                alignItems:'center',
                backgroundColor:COLORS.lightGray3
            }}
        >
            <Image
                source={icons.nearby}
                style={{
                    width:25,
                    height:25,
                    tintColor:COLORS.primary,
                    marginHorizontal:6
                }}
            />
            <Text style={{
                flex:2,
                textAlign:'center',
            }}>{title}</Text>

            <TouchableOpacity
                style={{
                    flex:1,
                    backgroundColor:COLORS.primary,
                    height:'80%',
                    alignItems:'center',
                    justifyContent:'center',
                    borderTopLeftRadius:25,
                    borderBottomLeftRadius:25
                }}
            >
                <Text style={{color:COLORS.white,fontWeight:'600'}}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
