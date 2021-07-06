import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, Animated, Image } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS } from '../../constants/theme';



const FirstRoute = () => (
    <View style={{ backgroundColor: '#ff4081', flex: 1 }} >
        <Text>dfdsfd</Text>
    </View>
);

const SecondRoute = () => (
    <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
);

const ThirdRoute = () => (
    <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
);


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,

});



const RecipeDetail = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Second' },
    ]);



    // RENDER
    function _renderTabBar(props) {

        return (
            <TabBar {...props}


                // labelStyle={{
                //     color: COLORS.primary
                // }}
                // tabStyle={{
                //     backgroundColor: COLORS.primary
                // }}
                // renderLabel={({ route, focused, color }) => (
                //     <Text style={{ color: 'white', margin: 8 }}>
                //         {route.title}
                //     </Text>
                // )}

                activeColor={'red'}
                tabStyle={{
                    backgroundColor: COLORS.white,
                }}
                indicatorContainerStyle={{
                    backgroundColor: 'red'
                }}
                inactiveColor={'gray'}
            />
        )
    }

    return (
        // <ScrollView

        // // alwaysBounceVertical={false}
        // >
        <ScrollView
            contentContainerStyle={{
                backgroundColor: COLORS.white,
                height: layout.height
            }}
        >
            <View
                style={{
                    flex: 1,
                    height: '100%'
                }}
            >
                <View
                    style={{
                        height: 200,
                        backgroundColor: 'coral'
                    }}
                >
                    <Image
                        source={{
                            uri: `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574`
                        }}
                        style={{
                            width: '100%',
                            height: 200
                        }}
                    />
                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={_renderTabBar}
                />
            </View>
        </ScrollView>
        // </ScrollView>

    )
}

export default RecipeDetail

const styles = StyleSheet.create({})
