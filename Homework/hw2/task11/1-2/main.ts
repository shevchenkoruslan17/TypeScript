type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
    [key: string]: string | number | string[];
};

type RecipesResponse = {
    recipes: Recipe[];
};

const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '30');

const target2 = document.getElementsByClassName('target')[0] as HTMLDivElement;

fetch(url)
    .then(res => res.json())
    .then((recipesObject: RecipesResponse) => {
        const { recipes } = recipesObject;

        for (const recipe of recipes) {
            const recipeDiv = document.createElement('div');

            for (const recipeKey in recipe) {
                const value = recipe[recipeKey];

                if (Array.isArray(value)) {
                    const arrayAndTitleDiv = document.createElement('div');

                    const title = document.createElement('div');
                    title.innerText = `${recipeKey}:`;

                    const ol = document.createElement('ol');

                    for (const item of value) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }

                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);

                } else {
                    if (recipeKey !== 'image') {
                        const keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey}: ${value}`;
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }

            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);

            target.appendChild(recipeDiv);
        }
    });
