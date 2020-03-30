// J ava
// S cript
// O bject
// N otation

//= ===============================================

//= ===============================================

// JSON format EXAMPLE:
// array of objects.

// const thePets = [
//   {
//     name: 'Meowsalot',
//     species: 'cat',
//     favFood: 'tuna',
//   },

//   {
//     name: 'Barky',
//     species: 'dog',
//     favFood: 'carrots',
//   },
// ];

// console.log(thePets[1].favFood); // carrots

//= ======================================================

//= =======================================================

// A synchronous
// J avaScript
// A nd
// X ML

let pageCounter = 1;
const animal = document.getElementById('animal-info');
const button = document.getElementById('btn');

button.addEventListener('click', function() {
  // Web browser have a built-in tool named XMLHttpRequest

  const ourRequest = new XMLHttpRequest();

  // define our request with OPEN method
  // .open(1: type of request. GET or POST, 2:link to get or post data from / to a server)

  ourRequest.open(
    'GET',
    `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`
  );

  // define what todo with data

  ourRequest.onload = function() {
    //   const ourData = ourRequest.responseText; // output: [
    //    returns the first item from the 'respnseText' that is a string, as the browser doesnt know to interpret our data as being an object or an array of objects
    //    we need to tell browser to interpret data as JSON using a built-in tool that browser has: JSON.parse()
    const ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };

  // MAKING / SENDING the actual request:

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    pageCounter = 3;
    button.classList.add('hide-button');
  }
});

function renderHTML(data) {
  console.log(data);
  animal.innerHTML += data
    .map(animal => {
      console.log('e');
      let animalText = `
        <p>${animal.name} is a ${animal.species}
      `;

      for (let i = 0; i < animal.foods.likes.length; i++) {
        if (i == 0) {
          animalText += ` and likes to eat ${animal.foods.likes[i]}`;
        } else {
          animalText += ` and ${animal.foods.likes[i]}`;
        }
      }

      for (let i = 0; i < animal.foods.dislikes.length; i++) {
        if (i == 0) {
          animalText += ` but dislikes to eat ${animal.foods.dislikes[i]}`;
        } else {
          animalText += ` and ${animal.foods.dislikes[i]}`;
        }
      }
      animalText += `</p>`;
      return animalText;
    })
    .join('');
}
