console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth= document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  // body.appendChild(section);

  // inside, add each land as an article tag
  for (i=0; i<lands.length; i++){
    var land = document.createElement("article");
    var heading = document.createElement("h1");
    heading.innerText=(lands[i]);
    land.appendChild(heading);
    middleEarth.appendChild(land);
  }
  body.appendChild(middleEarth);
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList=document.createElement("ul");
  var theShire = document.querySelector("article");
  for (var i = 0; i<hobbits.length; i++) {
    var hobbitItem = document.createElement("li");
    hobbitItem.textContent = hobbits[i];
    hobbitList.appendChild(hobbitItem);
  }
  theShire.appendChild(hobbitList);
  // give each hobbit a class of hobbit
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute("class", "magic-imbued-jewelry");
  ring.addEventListener('click', nazgulScreech);
  var Frodo = document.querySelector("li");
  Frodo.appendChild(ring);
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var Rivendell = document.querySelectorAll("article")[1]; 
  var aside = document.createElement("aside");
  var buddyList=document.createElement("ul");
    for (var i=0; i<buddies.length; i++){
      var buddy = document.createElement("li");
      buddy.innerText=buddies[i];
      buddyList.appendChild(buddy);
    }
    aside.appendChild(buddyList);
    Rivendell.appendChild(aside);     //CHANGE!!!
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
makeBuddies();


// Part 5
function beautifulStranger () {
  var findStrider = document.querySelectorAll("li");
  findStrider.forEach(function(li) {
    if (li.textContent === "Strider")
      li.textContent = "Aragorn";
  });
}
 
  // change the 'Strider' textnode to 'Aragorn'
beautifulStranger(); 


// Part 6


function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var shireHobbits = document.querySelector('ul');
  var Rivendell = document.querySelectorAll("article")[1];
  Rivendell.appendChild(shireHobbits);
}
leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship=document.createElement("div");
  var Rivendell = document.querySelectorAll("article")[1];
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var allPpl=document.querySelectorAll("li");
  console.log(allPpl);
    for (i=0;i<allPpl.length;i++){
      fellowship.appendChild(allPpl[i]);
      alert("Your wolfpack += 1");
    }
  Rivendell.appendChild(fellowship);
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8
function theBalrog() {
  var findGandalf = document.querySelectorAll("li");
  for (var i =0; i<findGandalf.length; i++){
    if (findGandalf[i].textContent === "Gandalf the Grey"){
      findGandalf[i].textContent= "Gandalf the White";
      findGandalf[i].style.background='white';
      findGandalf[i].style.border='5px solid grey';    }
  }
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();


// Part 9

function hornOfGondor() {
  alert ("Da horen git blawn. Boreimear iz ded");
  var findBoromir = document.querySelectorAll("li");
  for (var i=0; i<findBoromir.length; i++){
    if (findBoromir[i].textContent === "Boromir") {
      findBoromir[i].innerHTML='<strike>' + 'Boromir' + '<strike>';
      findBoromir[i].setAttribute('id', 'Boromir');
    }
  }
  var Boromir=document.getElementById('Boromir');
  Boromir.parentNode.removeChild(Boromir);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var findFrodoSam = document.querySelectorAll("li");
  for (var i=0;i<findFrodoSam.length;i++){
    if (findFrodoSam[i].textContent === "Frodo Baggins") {
      findFrodoSam[i].setAttribute('id', 'Frodo');
    } else if (findFrodoSam[i].textContent === "Samwise 'Sam' Gamgee") {
      findFrodoSam[i].setAttribute('id', 'Sam');
    }
  }
  var Frodo=document.getElementById('Frodo');
  var FrodoSam=document.getElementById('Sam');
  var Mordor=document.querySelectorAll('article')[2];
  var mtDoom=document.createElement('section');
  mtDoom.setAttribute('id', 'mtDoom');
  mtDoom.appendChild(Frodo);
  mtDoom.appendChild(Sam);
  Mordor.appendChild(mtDoom);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum=document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  gollum.textContent="Gollum";
  var mtDoom=document.getElementById('mtDoom');
  mtDoom.appendChild(gollum);
  var ring=getElementById('the-ring');
  ring.parentNode.removeChild(ring);
  gollum.appendChild(ring);



//   var Frodo=getElementById('Frodo');
//   var ring=querySelector('magic-imbued-jewelry');
//   ring.parentNode.removeChild(ring);
//   gollum.appendChild(ring);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

thereAndBackAgain();
