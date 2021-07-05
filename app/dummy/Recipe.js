
import Recipe from "../model/RecipeModel"

export const recipes = [
    {
        "id": 1,
        "name": "Crock Pot Roast",
        "category":"cat1",
        "ingredients": [
            {
                "quantity": "1",
                "name": " beef roast",
                "type": "Meat"
            },
            {
                "quantity": "1 package",
                "name": "brown gravy mix",
                "type": "Baking"
            },
            {
                "quantity": "1 package",
                "name": "dried Italian salad dressing mix",
                "type": "Condiments"
            },
            {
                "quantity": "1 package",
                "name": "dry ranch dressing mix",
                "type": "Condiments"
            },
            {
                "quantity": "1/2 cup",
                "name": "water",
                "type": "Drinks"
            }
        ],
        "steps": [
            "Place beef roast in crock pot.",
            "Mix the dried mixes together in a bowl and sprinkle over the roast.",
            "Pour the water around the roast.",
            "Cook on low for 7-9 hours."
        ],
        "timers": [
            0,
            0,
            0,
            420
        ],
        "imageURL": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
        "originalURL": "https://st4.depositphotos.com/1000152/23056/i/1600/depositphotos_230562322-stock-photo-open-recipe-book-fresh-herbs.jpg"
    },
    {
        "id": 2,
        "name": "Roasted Asparagus",
        "category":"cat2",
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": " asparagus",
                "type": "Produce"
            },
            {
                "quantity": "1 1/2 tbsp",
                "name": "olive oil",
                "type": "Condiments"
            },
            {
                "quantity": "1/2 tsp",
                "name": "kosher salt",
                "type": "Baking"
            }
        ],
        "steps": [
            "Preheat oven to 425°F.",
            "Cut off the woody bottom part of the asparagus spears and discard.",
            "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
            "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
            "Sprinkle with salt.",
            "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
            "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
            "They should be tender when pierced with the tip of a knife.",
            "The tips of the spears will get very brown but watch them to prevent burning.",
            "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
        ],
        "timers": [
            0,
            0,
            0,
            0,
            0,
            0,
            10,
            0,
            0,
            0
        ],
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOisLFkSYQG4rbKJvbAOdIoWHAt2wgwpHNmblP_NbKT516SNpBBYI1iNzOtxOS6qUAuvI&usqp=CAU",
        "originalURL": "https://st4.depositphotos.com/1000152/23056/i/1600/depositphotos_230562322-stock-photo-open-recipe-book-fresh-herbs.jpg"
    },
    {
        "id": 3,
        "name": "Curried Lentils and Rice",
        "category":"cat3",
        "ingredients": [
            {
                "quantity": "1 quart",
                "name": "beef broth",
                "type": "Misc"
            },
            {
                "quantity": "1 cup",
                "name": "dried green lentils",
                "type": "Misc"
            },
            {
                "quantity": "1/2 cup",
                "name": "basmati rice",
                "type": "Misc"
            },
            {
                "quantity": "1 tsp",
                "name": "curry powder",
                "type": "Condiments"
            },
            {
                "quantity": "1 tsp",
                "name": "salt",
                "type": "Condiments"
            }
        ],
        "steps": [
            "Bring broth to a low boil.",
            "Add curry powder and salt.",
            "Cook lentils for 20 minutes.",
            "Add rice and simmer for 20 minutes.",
            "Enjoy!"
        ],
        "timers": [
            0,
            0,
            20,
            20,
            0
        ],
        "imageURL": "https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg",
        "originalURL": "https://st4.depositphotos.com/1000152/23056/i/1600/depositphotos_230562322-stock-photo-open-recipe-book-fresh-herbs.jpg"

    },
    {
        "id": 4,
        "name": "Big Night Pizza",
        "category":"cat2",
        "ingredients": [
            {
                "quantity": "5 teaspoons",
                "name": "yeast",
                "type": "Baking"
            },
            {
                "quantity": "5 cups",
                "name": "flour",
                "type": "Baking"
            },
            {
                "quantity": "4 tablespoons",
                "name": "vegetable oil",
                "type": "Baking"
            },
            {
                "quantity": "2 tablespoons",
                "name": "sugar",
                "type": "Baking"
            },
            {
                "quantity": "2 teaspoons",
                "name": "salt",
                "type": "Baking"
            },
            {
                "quantity": "2 cups",
                "name": "hot water",
                "type": "Misc"
            },
            {
                "quantity": "1/4 cup",
                "name": "pizza sauce",
                "type": "Misc"
            },
            {
                "quantity": "3/4 cup",
                "name": "mozzarella cheese",
                "type": "Dairy"
            }
        ],
        "steps": [
            "Add hot water to yeast in a large bowl and let sit for 15 minutes.",
            "Mix in oil, sugar, salt, and flour and let sit for 1 hour.",
            "Knead the dough and spread onto a pan.",
            "Spread pizza sauce and sprinkle cheese.",
            "Add any optional toppings as you wish.",
            "Bake at 400 deg Fahrenheit for 15 minutes.",
            "Enjoy!"
        ],
        "timers": [
            15,
            60,
            0,
            0,
            0,
            15,
            0
        ],
        "imageURL": "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg",
        "originalURL": "https://st4.depositphotos.com/1000152/23056/i/1600/depositphotos_230562322-stock-photo-open-recipe-book-fresh-herbs.jpg"

    },
    {
        "id": 5,
        "name": "Cranberry and Apple Stuffed Acorn Squash Recipe",
        "category":"cat1",
        "ingredients": [
            {
                "quantity": "2",
                "name": "acorn squash",
                "type": "Produce"
            },
            {
                "quantity": "1",
                "name": "boiling water",
                "type": "Drinks"
            },
            {
                "quantity": "2",
                "name": "apples chopped into 1.4 inch pieces",
                "type": "Produce"
            },
            {
                "quantity": "1/2 cup",
                "name": "dried cranberries",
                "type": "Produce"
            },
            {
                "quantity": "1 teaspoon",
                "name": "cinnamon",
                "type": "Baking"
            },
            {
                "quantity": "2 tablespoons",
                "name": "melted butter",
                "type": "Dairy"
            }
        ],
        "steps": [
            "Cut squash in half, remove seeds.",
            "Place squash in baking dish, cut-side down.",
            "Pour 1/4-inch water into dish.",
            "Bake for 30 minutes at 350 degrees F.",
            "In large bowl, combine remaining ingredients.",
            "Remove squash from oven, fill with mix.",
            "Bake for 30-40 more minutes, until squash tender.",
            "Enjoy!"
        ],
        "timers": [
            0,
            0,
            0,
            30,
            0,
            0,
            30,
            0
        ],
        "imageURL": "https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg",
        "originalURL": "https://st4.depositphotos.com/1000152/23056/i/1600/depositphotos_230562322-stock-photo-open-recipe-book-fresh-herbs.jpg"
    },

]