const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const timelineSection = document.getElementById("timelineSection");

document.getElementById("openBtn").addEventListener("click", () => {
    intro.classList.remove("active");
    letter.classList.add("active");
});

const years = [
2015,
2016,
2017,
2018,
2019,
2020,
2022,
2023,
2024,
2025,
2026
];

document.getElementById("continueBtn").addEventListener("click", () => {

document.getElementById("letter").style.display = "none";

document.getElementById("slideshow").style.display = "block";

const container =
document.getElementById("memoryContainer");

years.forEach(year => {

const div = document.createElement("div");

div.className = "memory";

div.innerHTML = `
<h1>${year}</h1>
<img src="${year}.jpeg">
`;

container.appendChild(div);

});

const memories =
document.querySelectorAll(".memory");

let current = 0;

memories[0].classList.add("active");

const song = document.getElementById("song");

song.play()
.then(() => console.log("Playing"))
.catch(err => console.error(err));

setInterval(() => {

memories[current].classList.remove("active");

current++;

if(current >= memories.length){

showEnding();
return;
}

memories[current].classList.add("active");

}, 2818);

});

function showEnding(){

const end = document.createElement("div");

end.className = "memory active";

end.innerHTML = `
<h1>❤️ Thank You Papa ❤️</h1>

<p style="
max-width:90%;
font-size:1.3rem;
line-height:1.8;
">

Har yaad ke liye.<br><br>

Har muskaan ke liye.<br><br>

Har sacrifice ke liye.<br><br>

Main aapse bahut pyaar karta hoon Papa.<br><br>

Happy Father's Day ❤️<br><br>

- Mridul

</p>
`;

document.body.appendChild(end);

}