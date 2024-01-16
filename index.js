const body = document.querySelector("body");
const changeBtn = document.querySelector("#change-bg");

changeBtn.addEventListener("click", changeBg);

function changeBg() {
  const random = Math.floor(Math.random() * colors.length);

  for (let i = 0; i < colors.length; i++) {
    body.style.backgroundColor = colors[random];
  }
}

const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#0000FF",
  "#8000FF",
  "#FF00FF",
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#000000",
  "#999999",
  "#E6E6FA",
  "#F0FFF0",
  "#F5F5F5",
  "#D3D3D3",
  "#BDBDBD",
  "#A9A9A9",
  "#DAA520",
  "#ADFF2F",
  "#90EE90",
  "#6B8E23",
  "#66CDAA",
  "#00CED1",
  "#48D1CC",
  "#40E0D0",
  "#7FFFD4",
  "#B0E0E6",
  "#AFEEEE",
  "#4682B4",
  "#B0C4DE",
  "#E0FFFF",
  "#F0F8FF",
  "#F5F5DC",
  "#FFE4C4",
  "#FAFAD2",
  "#FFEBCD",
  "#FFEFD5",
];
