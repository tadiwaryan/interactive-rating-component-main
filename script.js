//CODE STARTS HERE

let ratingButtonOne = document.querySelector('#one')

let ratingButtonTwo = document.querySelector('#two')

let ratingButtonThree = document.querySelector('#three')

let ratingButtonFour = document.querySelector('#four')

let ratingButtonFive = document.querySelector('#five')

let submitButton = document.querySelector('#submit');

let initialState = document.querySelector('#initial_state');

let card = document.querySelector('#card');

function ratingValue (ratingButton){
    let rating = ratingButton.textContent;
}

ratingButtonOne.addEventListener('click', ratingValue(ratingButtonOne));

ratingButtonTwo.addEventListener('click', ratingValue(ratingButtonTwo));

ratingButtonThree.addEventListener('click', ratingValue(ratingButtonThree));

ratingButtonFour.addEventListener('click', ratingValue(ratingButtonFour));

ratingButtonFive.addEventListener('click', ratingValue(ratingButtonFive));

submitButton.addEventListener('click', ()=>{
    
    initialState.remove();

    let thankYouState = document.createElement('div');

    thankYouState.setAttribute('id', 'thank_you_state');

    card.appendChild(thankYouState);

    let image = document.createElement('img');

    image.setAttribute('id', 'thank_you')

    image.src = 'illustration-thank-you.svg';

    thankYouState.appendChild(image);


});











