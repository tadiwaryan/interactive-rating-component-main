//CODE STARTS HERE

let ratingButtonOne = document.querySelector('#one')

let ratingButtonTwo = document.querySelector('#two')

let ratingButtonThree = document.querySelector('#three')

let ratingButtonFour = document.querySelector('#four')

let ratingButtonFive = document.querySelector('#five')

let submitButton = document.querySelector('#submit');

let initialState = document.querySelector('#initial_state');

let card = document.querySelector('#card');

let numOne = ratingButtonOne.addEventListener('click', evt => {

    let rating = evt.target.textContent;
    console.log(rating);

    return Int(rating);


} );

let numTwo = ratingButtonTwo.addEventListener('click', evt => {
    
    let rating = evt.target.textContent;
    console.log(rating);

    return Int(rating);

});

let numThree = ratingButtonThree.addEventListener('click', evt=> {
    
    let rating = evt.target.textContent;
    console.log(rating);

    return Int(rating);

});

let numFour = ratingButtonFour.addEventListener('click', evt =>{

    let rating = evt.target.textContent;
    console.log(rating);

    return Int(rating);

});

let numFive = ratingButtonFive.addEventListener('click', evt=>{

    let rating = evt.target.textContent;
    console.log(rating)

    return Int(rating);


});

submitButton.addEventListener('click', ()=>{
   /* RATING LOGIC....WELL SORTA😅😅
    let rating_num;

    if (numOne > 0){
        return rating_num += numOne;
    } elseif (numTwo > 0){
        return rating_num += numTwo;
    } elseif (numThree){

    } elseif(numFour){

    } elseif (numFive){

    } else{
        return console.log('ERROR');
    }
    */
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

    yourRating.textContent = 'You selected ' + '*****' + ' out of 5';

    thanksHeading.textContent = 'Thank you!';

    thankYouText.textContent = ' We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';


});











