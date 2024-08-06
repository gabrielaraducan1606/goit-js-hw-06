const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const containerEl = document.getElementById("ingredients");
console.log(containerEl);
const list = document.createElement("li");
containerEl.append(list);

for (let i = 0; i <= ingredients.length; i++){
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  list.append(li);
}