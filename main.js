
// let count = 0;
// from.addEventListener("submit", function(){ refreshBolma.preventDefault();
// const inputningQiymati = Number(input.value);
// console.log(typeof inputningQiymati);
// soz.textContent = inputningQiymati;
// input.value = "";
// })
// btnPlyus.addEventListener("click", function() {
// })
// count++;
// console.log(count);
// soz.textContent = count;
// btnMinus.addEventListener("click", function() {
// count--;
// console.log(count);
// soz.textContent = count;
// })
// 11
// const newTag = document.createElement("h1");
// newTag.textContent = "Bosildi"; document.body.appendChild(newTag);
// newTag.textContent = userName; document.body.appendChild(newTag);


const form = document.querySelector(".wrapper");
const input = document.querySelector("#raqam");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const num = document.querySelector(".text");
const color = document.querySelector("#rang");

color.addEventListener("input", () => {
    const rangTanla = color.value; 
    num.style.color = rangTanla;
});

let count = 0;
num.textContent = count;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    count = Number(input.value);
    num.textContent = count;
});

// Кнопка минус
minus.addEventListener("click", () => {
    --count;
    num.textContent = count;
    input.value = count;
});

plus.addEventListener("click", () => {
    ++count;
    num.textContent = count;
    input.value = count; 
});
