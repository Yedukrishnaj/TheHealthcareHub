// Sample recipe data (replace with actual data)
const recipes = [
  {
    name: 'Healthy Salad',
    calories: 250,
    protein: 10,
    carbs: 30,
    fats: 12,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Mixed Greens', quantity: '2 cups', unit: 'cups' },
      { name: 'Cherry Tomatoes', quantity: '1 cup', unit: 'cup' },
      { name: 'Cucumber', quantity: '1', unit: 'piece' },
      { name: 'Red Onion', quantity: '1/4', unit: 'piece' },
      { name: 'Olive Oil', quantity: '1 tablespoon', unit: 'tablespoon' },
      { name: 'Balsamic Vinegar', quantity: '1 tablespoon', unit: 'tablespoon' }
    ]
  },
  {
    name: 'Grilled Chicken',
    calories: 300,
    protein: 25,
    carbs: 5,
    fats: 18,
    vegan: false,
    vegetarian: false,
    ingredients: [
      { name: 'Chicken Breast', quantity: '1', unit: 'piece' },
      { name: 'Olive Oil', quantity: '1 tablespoon', unit: 'tablespoon' },
      { name: 'Salt', quantity: '1/2 teaspoon', unit: 'teaspoon' },
      { name: 'Black Pepper', quantity: '1/4 teaspoon', unit: 'teaspoon' }
    ]
  },
  {
    name: 'Veggie Stir-Fry',
    calories: 200,
    protein: 15,
    carbs: 20,
    fats: 8,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Assorted Vegetables', quantity: '2 cups', unit: 'cups' },
      { name: 'Tofu', quantity: '150g', unit: 'grams' },
      { name: 'Soy Sauce', quantity: '2 tablespoons', unit: 'tablespoons' },
      { name: 'Ginger', quantity: '1 teaspoon', unit: 'teaspoon' },
      { name: 'Garlic', quantity: '2 cloves', unit: 'cloves' }
    ]
  },
  {
    name: 'Quinoa Bowl',
    calories: 350,
    protein: 12,
    carbs: 45,
    fats: 15,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Quinoa', quantity: '1 cup', unit: 'cup' },
      { name: 'Mixed Vegetables', quantity: '1.5 cups', unit: 'cups' },
      { name: 'Avocado', quantity: '1/2', unit: 'piece' },
      { name: 'Lemon Juice', quantity: '2 tablespoons', unit: 'tablespoons' },
      { name: 'Olive Oil', quantity: '1 tablespoon', unit: 'tablespoon' }
    ]
  },
  {
    name: 'Pasta Primavera',
    calories: 400,
    protein: 15,
    carbs: 60,
    fats: 10,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Whole Wheat Pasta', quantity: '2 cups', unit: 'cups' },
      { name: 'Assorted Vegetables', quantity: '2 cups', unit: 'cups' },
      { name: 'Tomato Sauce', quantity: '1/2 cup', unit: 'cup' },
      { name: 'Olive Oil', quantity: '1 tablespoon', unit: 'tablespoon' },
      { name: 'Basil', quantity: '1/4 cup', unit: 'cup' }
    ]
  },
  {
    name: 'Tofu Scramble',
    calories: 280,
    protein: 20,
    carbs: 10,
    fats: 18,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Tofu', quantity: '200g', unit: 'grams' },
      { name: 'Bell Pepper', quantity: '1', unit: 'piece' },
      { name: 'Spinach', quantity: '1 cup', unit: 'cup' },
      { name: 'Turmeric', quantity: '1/2 teaspoon', unit: 'teaspoon' },
      { name: 'Nutritional Yeast', quantity: '2 tablespoons', unit: 'tablespoons' }
    ]
  },
  {
    name: 'Roasted Vegetable Wrap',
    calories: 320,
    protein: 8,
    carbs: 40,
    fats: 14,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Assorted Vegetables', quantity: '2 cups', unit: 'cups' },
      { name: 'Whole Wheat Tortilla', quantity: '1', unit: 'piece' },
      { name: 'Hummus', quantity: '2 tablespoons', unit: 'tablespoons' },
      { name: 'Olive Oil', quantity: '1 tablespoon', unit: 'tablespoon' }
    ]
  },
  {
    name: 'Egg Salad Sandwich',
    calories: 380,
    protein: 20,
    carbs: 30,
    fats: 20,
    vegan: false,
    vegetarian: true,
    ingredients: [
      { name: 'Boiled Eggs', quantity: '2', unit: 'pieces' },
      { name: 'Bread', quantity: '2 slices', unit: 'slices' },
      { name: 'Mayonnaise', quantity: '1 tablespoon', unit: 'tablespoon' },
      { name: 'Mustard', quantity: '1 teaspoon', unit: 'teaspoon' },
      { name: 'Lettuce', quantity: '2 leaves', unit: 'leaves' }
    ]
  },
  {
    name: 'Fruit Smoothie Bowl',
    calories: 300,
    protein: 8,
    carbs: 50,
    fats: 5,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Frozen Mixed Berries', quantity: '1 cup', unit: 'cup' },
      { name: 'Banana', quantity: '1', unit: 'piece' },
      { name: 'Almond Milk', quantity: '1/2 cup', unit: 'cup' },
      { name: 'Granola', quantity: '1/4 cup', unit: 'cup' },
      { name: 'Chia Seeds', quantity: '1 tablespoon', unit: 'tablespoon' }
    ]
  },
  {
    name: 'Chickpea Salad',
    calories: 320,
    protein: 12,
    carbs: 45,
    fats: 10,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Canned Chickpeas', quantity: '1 cup', unit: 'cup' },
      { name: 'Bell Pepper', quantity: '1', unit: 'piece' },
      { name: 'Red Onion', quantity: '1/4', unit: 'piece' },
      { name: 'Lemon Juice', quantity: '2 tablespoons', unit: 'tablespoons' },
      { name: 'Olive Oil', quantity: '1 tablespoon', unit: 'tablespoon' },
      { name: 'Fresh Parsley', quantity: '2 tablespoons', unit: 'tablespoons' }
    ]
  },
  {
    name: 'Mediterranean Wrap',
    calories: 380,
    protein: 15,
    carbs: 50,
    fats: 15,
    vegan: true,
    vegetarian: true,
    ingredients: [
      { name: 'Whole Wheat Wrap', quantity: '1', unit: 'piece' },
      { name: 'Hummus', quantity: '2 tablespoons', unit: 'tablespoons' },
      { name: 'Cucumber', quantity: '1/2', unit: 'piece' },
      { name: 'Tomato', quantity: '1', unit: 'piece' },
      { name: 'Kalamata Olives', quantity: '4', unit: 'pieces' },
      { name: 'Feta Cheese', quantity: '1/4 cup', unit: 'cup' }
    ]
  },
  // Add more recipes here
];

  
  // Function to generate a meal plan
function generateMealPlan(diet, goal) {
  const mealPlan = [];
  const selectedRecipeIndices = new Set(); // To keep track of selected recipes

  for (let i = 0; i < 3; i++) { // Generate a meal plan for 3 meals
    let eligibleRecipes = [];

    if (diet === 'vegan') {
      eligibleRecipes = recipes.filter(recipe => recipe.vegan);
    } else if (diet === 'vegetarian') {
      eligibleRecipes = recipes.filter(recipe => recipe.vegan || recipe.vegetarian);
    } else { // Balanced diet
      eligibleRecipes = recipes;
    }

    // Remove indices of already selected recipes
    const remainingIndices = eligibleRecipes
      .map((recipe, index) => selectedRecipeIndices.has(index) ? -1 : index)
      .filter(index => index !== -1);

    if (remainingIndices.length === 0) {
      console.log('No eligible recipes found.');
      break;
    }

    const randomIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
    const selectedRecipe = eligibleRecipes[randomIndex];
    
    mealPlan.push(selectedRecipe);
    selectedRecipeIndices.add(randomIndex); // Add the index to the set
  }

  return mealPlan;
}

  

  
  
// Function to display the meal plan
function displayMealPlan(mealPlan) {
    const mealPlanContent = document.getElementById('mealPlanContent');
    mealPlanContent.innerHTML = '';
    
    mealPlan.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipe-item');
      recipeItem.innerHTML = `
        <h3>${recipe.name}</h3>
        <p>Calories: ${recipe.calories}</p>
        <p>Protein: ${recipe.protein}g</p>
        <p>Carbs: ${recipe.carbs}g</p>
        <p>Fats: ${recipe.fats}g</p>
      `;
      
      mealPlanContent.appendChild(recipeItem);
    });
  }
  
  // Function to display the shopping list
function displayShoppingList(mealPlan) {
  const shoppingListContent = document.getElementById('shoppingListContent');
  shoppingListContent.innerHTML = '';

  const ingredients = [];

  mealPlan.forEach(recipe => {
    ingredients.push(...getIngredients(recipe));
  });

  ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    shoppingListContent.appendChild(listItem);
  });
}

// Function to get the ingredients of a recipe as a formatted string
function getIngredients(recipe) {
  const ingredientsList = [];

  if (recipe.ingredients) {
    recipe.ingredients.forEach(ingredient => {
      ingredientsList.push(`${ingredient.quantity} ${ingredient.unit} of ${ingredient.name}`);
    });
  }

  return ingredientsList;
}

  
  // Event listener for the preferences form
  const preferencesForm = document.getElementById('preferencesForm');
  preferencesForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const diet = preferencesForm.diet.value;
    const goal = preferencesForm.goal.value;
    
    const mealPlan = generateMealPlan(diet, goal);
    displayMealPlan(mealPlan);
    displayShoppingList(mealPlan);
  });
  