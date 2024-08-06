function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');
const colorValueSpan = document.querySelector('.color');
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyElement.style.backgroundColor = newColor;
    colorValueSpan.textContent = newColor;
});