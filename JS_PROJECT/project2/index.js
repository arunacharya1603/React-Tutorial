const typingText = document.querySelector(".typing-text p");
const inputField = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistake = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector("button");

// set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;




function loadParagraph() {
  const paragraph = [
    " My name is arun acharya and i pursing bachelors.",
    " degree in information technolgy from university institute of",
    "engineering and technology and i am a pasonate frontend developer",
    " and i am looking for oportunity in the same domain",
  ];

  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = "";
  for (const char of paragraph[randomIndex]) {
    console.log(char);
    typingText.innerHTML += `<span>${char}</span>`;
  }
  typingText.querySelectorAll("span")[0].classList.add("active");
}


// user input

function initTyping(){
    const char = typingText.querySelectorAll
    ('span');
    const typedChar = inputField.value.charAt(charIndex);

    if(charIndex < char.length && timeLeft > 0){
        if(char[charIndex].innerText === 
            typedChar){
                char[charIndex].classList.add('correct');
                console.log("correct");
            }
            else{
                char[charIndex].classList.add('incorrect');
                console.log("correct");
            }
            charIndex++;
    } else{

    }
}

input.addEventListener("input",initTyping);

loadParagraph();
