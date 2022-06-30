//CODE STARTS HERE

let ratingButtonOne = document.querySelector('#one')

let ratingButtonTwo = document.querySelector('#two')

let ratingButtonThree = document.querySelector('#three')

let ratingButtonFour = document.querySelector('#four')

let ratingButtonFive = document.querySelector('#five')

let submitButton = document.querySelector('#submit');

let initialState = document.querySelector('#initial_state');

let card = document.querySelector('#card');


let rating = 0;

console.log(rating);

ratingButtonOne.addEventListener('click', ()=> {

    if (rating>0){
        rating = 1;
    } else{
        rating += 1;
    };

    console.log(rating);
    
} );

let numTwo = ratingButtonTwo.addEventListener('click',() => {
    
    if (rating>0){
        rating = 2;
    } else{
        rating += 2;
    };
    
    
});

let numThree = ratingButtonThree.addEventListener('click',() => {
    
    if (rating>0){
        rating = 3;
    } else{
        rating += 3;
    };

});

let numFour = ratingButtonFour.addEventListener('click',() =>{

    if (rating>0){
        rating = 4;
    } else{
        rating += 4;
    };

});

let numFive = ratingButtonFive.addEventListener('click',() =>{

    if (rating>0){
        rating = 5;
        
    } else{
        rating += 5;
    };

});

submitButton.addEventListener('click', ()=>{
  
    initialState.remove();

    let thankYouState = document.createElement('div');

    thankYouState.setAttribute('id', 'thank_you_state');

    card.appendChild(thankYouState);

    let image = document.createElement('img');

    image.setAttribute('id', 'thank_you')

    image.src = 'images/illustration-thank-you.svg';

    thankYouState.appendChild(image);

    let thanksHeading = document.createElement('h1');

    thanksHeading.setAttribute('id', 'thanks_heading')


    let yourRating = document.createElement('p')

    yourRating.setAttribute('id', 'your_rating');

    let thankYouText = document.createElement('p');

    thankYouText.setAttribute('id', 'thank_you_text');

    thankYouState.appendChild(yourRating);

    thankYouState.appendChild(thanksHeading);

    thankYouState.appendChild(thankYouText);

    yourRating.textContent = 'You selected ' + rating + ' out of 5';

    thanksHeading.textContent = 'Thank you!';

    thankYouText.textContent = ' We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';


});











