import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CategoryAPI from '../../controller/API/CategoryAPI'
import categories from '../../dummy/Category'
import CategoryMenu from '../../model/CategoryModel'
import Header from '../components/Header'
import MenuTab from './components/menu'

const Home = (props) => {

    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState(null);

    const _onSelectCategory = (category) => {
        let cat = new CategoryMenu(category);
        setSelectedCategory(cat)
    }

    useEffect(() => {
        setCategoriesList(categories);
    }, []);


    return (
        <SafeAreaView>
            <Header />

            {/* Menu */}
            <MenuTab
                categoriesList={categories}
                onSelect={_onSelectCategory}
                selectedCategory={selectedCategory}
            />

            {/*  */}

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
