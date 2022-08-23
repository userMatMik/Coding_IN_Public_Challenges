// Vanilla JavaScript DOM Challenges //


// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).

const divEl = document.createElement('div');

// 2. Add a class of "boxy" to that div.
divEl.classList.add('boxy');

// 3. Add two paragraphs of text to that div with the text of your choosing.

const paragraphEl = `<p>
                        Paragraph 1
                    </p>
                    <p>
                        Paragraph 2
                    </p>`

divEl.innerHTML = paragraphEl;

// 4. Insert the div into the DOM just after the h1.

const h1El = document.querySelector('h1');


h1El.insertAdjacentElement('afterend', divEl)

// 5. Add a third paragraph to the div after it’s in the DOM.

const divElDom = document.querySelector('.boxy');

const paragraphToAdd = `<p>
                            Paragraph 3
                        </p>`

divElDom.insertAdjacentHTML('beforeend', paragraphToAdd);


// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").

const ulEl = document.querySelector('ul');

const ulToAdd = `<ul>
                    <li>
                        one
                    </li>
                    <li>
                        two
                    </li>
                    <li>
                        three
                    </li>
                </ul>`

ulEl.insertAdjacentHTML('beforeend', ulToAdd);                

// 2. Add a paragraph after the list of items with a class of "glow."

const pToAdd = `<p class="glow">
                    lorem ipsum
                </p>`
ulEl.insertAdjacentHTML('afterend', pToAdd);          

// 3. Remove a card when its button is clicked.

// !Works well- commented just for a purpose of next challenge

// const cardBtns = document.querySelectorAll('.card__btn');

// function removeCard(event) {
//     event.target.parentElement.remove();
// }

// cardBtns.forEach(btn => {
//     btn.addEventListener('click', removeCard)
// })

// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.

// !Works well- commented just for a purpose of next challenge

// const cardBtns = document.querySelectorAll('.card__btn');

// function addGlow(event) {
//     event.target.parentElement.firstElementChild.classList.toggle('glow')
// }

// cardBtns.forEach(btn => {
//     btn.addEventListener('click', addGlow)
// })

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")

const cardBtns = document.querySelectorAll('.card__btn');

function btnClickHandler(event) {
    const cardId = event.target.parentElement.id;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const h2El = card.querySelector('.card__heading')
        if (card.id !== cardId) {
            h2El.textContent = "Jealous 👀"
        }
        if (card.id === cardId) {
            h2El.textContent = "I’m the greatest!"
        }
    })
}

cardBtns.forEach(btn => {
    btn.addEventListener('click', btnClickHandler)
})


//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const cardContaier = document.querySelector('.card-container');

const addBtn = document.createElement('button')
addBtn.classList.add('btn');
addBtn.id = 'addCard'
addBtn.textContent = 'Add more cards';

cardContaier.insertAdjacentElement('afterend' ,addBtn)

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).

function generateCard() {
    let currentID = document.querySelectorAll('.card').length + 1 
    console.log(currentID)
    const cardStr = `
                    <div class="card" id="card-${currentID}">
                        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${currentID}" alt="Lorem Ipsum Picture">
                        <h2 class="card__heading">Lorem Ipsum Title ${currentID}</h2>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at! Ipsam, provident omnis? Corrupti illum earum enim, dolorem quas   fugiat iste.</p>
                        <button class="btn card__btn">Learn More</button>
                    </div>
                    `
    cardContaier.insertAdjacentHTML('beforeend', cardStr)
}

document.querySelector('#addCard').addEventListener('click', generateCard);



// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)

function generateCardOnLoad({title, descr}) {
    let currentID = document.querySelectorAll('.card').length + 1 
    console.log(currentID)
    const cardStr = `
                    <div class="card" id="card-${currentID}">
                        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${currentID}" alt="Lorem Ipsum Picture">
                        <h2 class="card__heading">${title}</h2>
                        <p class="card__description">${descr}</p>
                        <button class="btn card__btn">Learn More</button>
                    </div>
                    `
    cardContaier.insertAdjacentHTML('beforeend', cardStr)
}



window.onload = function() {
    generateCardOnLoad({
        title: "Title 1",
        descr: "description 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id enim reprehenderit laudantium veritatis aut eaque optio quidem" 
    })
    generateCardOnLoad({
        title: "Title 2",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id enim reprehenderit laudantium veritatis aut eaque optio quidem" 
    })
    generateCardOnLoad({
        title: "Title 3",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id enim reprehenderit laudantium veritatis aut eaque optio quidem" 
    })
}

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.