const changeBackGroundBtn = document.getElementById("change-background-btn");
const randomColor = document.getElementById("random-color");
const colorContainer = document.getElementById("color-container");
const colorName = document.getElementById("color-name");

let colorChangeCount = 0;

const colors = [ 
  "#ff0000", 
  "#ffffff", 
  "#0000ff", 
  "#008000", 
  "#ffff00", 
  "#000000", 
  "#800080", 
  "#ffc0cb", 
  "#a52a2a", 
  "#808080", 
  "#40e0d0", 
  "#006400", 
  "#87cefa", 
];


function getRandom8BitColor(){
  const r = Math.floor(Math.random()*256)>>0;//8 bits for red
  const g = Math.floor(Math.random()*256)>>0;//8 bits for green
  const b = Math.floor(Math.random()*256)>>0;//8 bits for blue
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  }

changeBackGroundBtn.addEventListener("click", () => {
  const getRandomColor =  getRandom8BitColor();
  const newHeight = Math.floor(Math.random() * 200) + 100;
  const neWRadius =  Math.floor(Math.random() * 10) + 10;
  const newPadding = Math.floor(Math.random() * 20) + 5;

  // Background color
  const getBackRandomColor = colors[Math.floor(Math.random()*colors.length)];

  randomColor.style.backgroundColor = getRandomColor;
  randomColor.style.height = `${newHeight}px`;
colorContainer.style.backgroundColor = getBackRandomColor;
colorContainer.style.borderRadius =  `${neWRadius}px`;
randomColor.style.borderRadius =  `${neWRadius}px`;
changeBackGroundBtn.style.borderRadius =  `${neWRadius}px`;
colorContainer.style.padding = `${newPadding}px`;
  colorChangeCount++;
 
  changeBackGroundBtn.textContent = `More color (${colorChangeCount})`;
  document.getElementById("color-name").innerText = `Color Code/Name: ${getRandomColor}`;
});
 
console.log(2)
