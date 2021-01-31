// Requirements

// The starter code has been provided for you. lib/index.html and lib/style.css include the initial structure and styling.

// In lib/script.js, you will find an array of objects with each character's name and bio.

// You will need to modify the HTML, CSS, and JS to complete the requirements. Think about the problem you are solving in each step, and make use of the features of all three.

// Add a button to each character's <div> with the class more-info. When the user clicks the button, the name of the character prints to the console.

// Add more functionality to the button: when clicked, the bio of the character appears beneath their image.

// Add an input field and submit button at the top of the page. When the user types the name of a character and clicks submit, only that character remains visible in the browser.

// Add another button to each character's <div> with the class alive-or-dead. When the user clicks the button, indicate the character is still on the show with with a green STILL ALIVE! under their image or that they have been killed off with a red SORRY, YOU DEAD under their image.

// Bonus

// Create a button that, when clicked, arranges all characters in alphabetical order.

// Create another button that randomly shuffles the characters.

// Create the HTML elements for each character completely in Javascript and append them to the <div class="got-characters"> element.

var characters = [
    {
        name: 'Daenerys Targaryen',
        bio:
            'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
        status: 'alive',
    },
    {
        name: 'Khal Drogo',
        bio:
            'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
        status: 'dead',
    },
    {
        name: 'Tyrion Lannister',
        bio:
            "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
        status: 'alive',
    },
    {
        name: 'Sansa Stark',
        bio:
            'Sansa Stark was raised as a highborn lady who would one marry into another great house.',
        status: 'alive',
    },
    {
        name: 'Arya Stark',
        bio:
            'Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.',
        status: 'alive',
    },
    {
        name: 'Jon Snow',
        bio:
            'Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.',
        status: 'alive',
    },
];

let buttonDaenerys = document.querySelector('#daenerys');
buttonDaenerys.addEventListener('click', printNameDaenerys, false);

function printNameDaenerys(e) {
    console.log('Daenerys');
}

let buttonKhal = document.querySelector('#khal');
buttonKhal.addEventListener('click', printNameKhal, false);

function printNameKhal(e) {
    console.log('Khal');
}

let buttonTyrion = document.querySelector('#tyrion');
buttonTyrion.addEventListener('click', printNameTyrion, false);

function printNameTyrion(e) {
    console.log('Tyrion');
}

let buttonSansa = document.querySelector('#sansa');
buttonSansa.addEventListener('click', printNameSansa, false);

function printNameSansa(e) {
    console.log('Sansa');
}

let buttonArya = document.querySelector('#arya');
buttonArya.addEventListener('click', printNameArya, false);

function printNameArya(e) {
    console.log('Arya');
}

let buttonJon = document.querySelector('#jon');
buttonJon.addEventListener('click', printNameJon, false);

function printNameJon(e) {
    console.log('Jon');
}

// Find repo lab here: https://github.com/rixiobarrios/got-dom-events-lab
