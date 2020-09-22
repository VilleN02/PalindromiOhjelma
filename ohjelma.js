import {TextView, TextInput,contentView} from 'tabris';

//tekstikenttä jossa näytetään käännetty teksti
let palindromi = new TextView({
  centerX: 0, top: 100,
  font: "24px"
}).appendTo(contentView);

//tekstikenttä jossa näyetään: teksti on tai ei palindromi
let tulos = new TextView({
  centerX: 0, top: [palindromi, 50],
  font: "24px"
}).appendTo(contentView);

//input kenttä johon käyttäjä syöttää tekstin
contentView.append(
  <TextInput top={24} left ='20%' right='20%'
  message='Kirjoita sana tai lause tähän'
  onAccept={handleAccept}/>
);

//toimet kun teksti kirjoitettu
function handleAccept(ev) {
  //poimitaan usertext muuttujan käyttäjän syöttämä teksti
  var usertext = ev.text;
  
  //käännä käyttäjän tekstikenttään syöttämä teksti
  function reverseString(str) {
    return  str.split('').reverse().join('');
  }
  
  //käännetty teksti sijoitetaan palindromitext muuttujaan
  var palindromitext = reverseString(usertext);
  
  //näytä käännetty teksti palindromi tekstiviewissä
  palindromi.set({text: palindromitext});
  
  // on palindromi
  if (usertext == palindromitext) {
    tulos.set({text: "On palindromi"});
  } else { //ei ole palindromi
    
    tulos.set({text: "Ei ole palindromi"});
  }
});
