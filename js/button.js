const BtnShowModalWindow = document.querySelectorAll(".button");
console.log(BtnShowModalWindow);
const BntCloseModalWindow = document.querySelector(".close");
const oder = document.querySelector(".oder");

const ShowModalWindow = function () {
  oder.classList.remove("hidden");
};

const closeModalWindow = function () {
  oder.classList.add("hidden");
};

for (let i = 0; i < BtnShowModalWindow.length; i++) {
  BtnShowModalWindow[i].addEventListener("click", ShowModalWindow);
}

BntCloseModalWindow.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !oder.classList.contains("hidden")) {
    closeModalWindow();
  }
});
