const text =
  "Dear mero mutuu ❤️, Bebyy first of all happy 9 months anniversary we are together for nine months 🎉. Huna ta hijo theyo sorry for the late wish 😚. Asti matra veteko jasto lagxa kati xitoo nine months ni vaisake xa 😍. Tmlai yaad hami first time veteko ani boleko malai ta tyo din sochera ajhai laaj lagera aauxa 🤭. Socheko ni theyena game bata suru vako rln real life ma yesto samma hunxa vanera 😊. Tmi sanga bolda vetda ma sabai birsinxu tmi nai ho mero one and only 😍. Maile suru dekhi nai vanekai xau you are my first and last vanera 🤗. Tmlai ma kahile xodne xaina 😍. Harmo rln jahile yesatai nai rahirahos kahile kahi ta daar lagxa katai sakinepo ho ki vanera 🥺. hami jati rsaye ni jhagada gare ni jahile yesari nai milera basam na please 🤗. Tmle euta kura notice gareko xau ma jati nai risaye ni tmi ek choti haseu vane ma sab birsinxu 🥺. I loveee youuu sooooo much ❤️, Im very very very obsessed with you 🤗. My heart belongs to you ❤️, and it beats only for you 😍.You have shown me the true meaning of love 🥰, and I promise to protect it with all my heart 🤗. 🥰❤️Thank you for being the brightest part of every day🥰. Please please malai xodera kahile na jau na hai bebeyyy 🥺";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
