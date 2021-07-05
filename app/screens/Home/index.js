import React, { useEffect, useState, createContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CategoryAPI from '../../controller/API/CategoryAPI'
import categories from '../../dummy/Category'
import { recipes } from '../../dummy/Recipe';

import CategoryMenu from '../../model/CategoryModel'
import Header from '../components/Header'
import BodySlider from './components/BodySlider'
import MenuTab from './components/menu'
const Home = (props) => {

    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [recipeList, setRecipeList] = useState([]);


    const _onSelectCategory = (category) => {
        setSelectedCategory(category)
        let newRecipes = recipes.filter(e => e.category == category.id);
        setRecipeList(newRecipes);
    }

    useEffect(() => {
        setCategoriesList(categories);
        setSelectedCategory(categories[0])
        setRecipeList(recipes)
    }, []);

    // useEffect(() => {
    //     let newRecipes = recipeList.filter(e => e.category == selectedCategory.id);
    //     setRecipeList(newRecipes);
    // }, [selectedCategory])

    return (
        <SafeAreaView>




            <Header />


            <MenuTab
                categoriesList={categories}
                onSelect={_onSelectCategory}
                selectedCategory={selectedCategory}
                setSelectedCategory={_onSelectCategory}
            />

            {/* Menu */}


            {/* Body */}

            <BodySlider
                data={recipeList}
            />


        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
